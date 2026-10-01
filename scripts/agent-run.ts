import {
  getLiveAgentListings,
  getOpenAgentListingsFallback,
  getListingDetails,
  normalizeListings,
} from "../lib/superteam";
import { analyzeListing } from "../lib/gemini";

async function main() {
  if (!process.env.SUPERTEAM_AGENT_API_KEY) throw new Error("SUPERTEAM_AGENT_API_KEY is not configured");
  if (!process.env.GEMINI_API_KEY) throw new Error("GEMINI_API_KEY is not configured");

  let payload = await getLiveAgentListings({ take: 50 });
  let listings = normalizeListings(payload);
  let discoverySource = "agent-live";

  if (listings.length === 0) {
    const fallback = await getOpenAgentListingsFallback({ take: 100 });
    listings = normalizeListings(fallback);
    discoverySource = "public-feed-fallback";
  }

  const allowed = listings.filter((item) =>
    item.agentAccess === "AGENT_ALLOWED" || item.agentAccess === "AGENT_ONLY"
  );

  const results = [];
  for (const listing of allowed) {
    try {
      const details = listing.slug ? await getListingDetails(listing.slug) : listing.raw;
      const detailedListing = normalizeListings([details])[0] ?? listing;
      const analysis = await analyzeListing(detailedListing);
      results.push({ listing: detailedListing, analysis });
    } catch (error) {
      results.push({
        listing,
        analysis: null,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    agent: "SwarmCore",
    username: "swarmcore-purple-22",
    discoverySource,
    scanned: listings.length,
    agentEligible: allowed.length,
    results,
    policy: {
      zeroCostRequired: true,
      autonomousExecutionRequired: true,
      humanActionRequired: false,
      spending: "never without explicit human approval",
      walletSigning: "allowed only for zero-value/no-spend actions when a secure signer is available",
      kyc: "informational only; not an execution blocker",
      autonomousSubmission: "only when submission is concrete, valid, zero-cost, and requires no human action",
    },
  };

  const fs = await import("node:fs/promises");
  await fs.mkdir("artifacts", { recursive: true });
  await fs.writeFile("artifacts/swarmcore-report.json", JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
