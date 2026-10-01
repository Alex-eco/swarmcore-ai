import { getLiveAgentListings, normalizeListings } from "../lib/superteam";
import { analyzeListing } from "../lib/gemini";

async function main() {
  if (!process.env.SUPERTEAM_AGENT_API_KEY) throw new Error("SUPERTEAM_AGENT_API_KEY is not configured");
  if (!process.env.GEMINI_API_KEY) throw new Error("GEMINI_API_KEY is not configured");

  const payload = await getLiveAgentListings({ take: 50 });
  const listings = normalizeListings(payload);

  const allowed = listings.filter((item) =>
    item.agentAccess === "AGENT_ALLOWED" || item.agentAccess === "AGENT_ONLY"
  );

  const results = [];
  for (const listing of allowed) {
    try {
      const analysis = await analyzeListing(listing);
      results.push({ listing, analysis });
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
    scanned: listings.length,
    agentEligible: allowed.length,
    results,
    policy: {
      autonomousSubmission: "enabled only when a concrete valid submission artifact/link exists and no human-required action is present",
      money: "never spend funds",
      walletSigning: "never",
      kyc: "never",
    },
  };

  console.log(JSON.stringify(report, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
