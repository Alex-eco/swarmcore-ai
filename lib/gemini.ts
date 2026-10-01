export type GeminiAnalysis = {
  eligible: boolean;
  confidence: number;
  categoryFit: string[];
  reasoning: string;
  plan: string[];
  zeroCost: boolean;
  autonomous: boolean;
  spendingRequired: boolean;
  humanActionRequired: boolean;
  walletSigningRequired: boolean;
  kyc: "required" | "not_required" | "unknown";
  submissionReady: boolean;
  notes: string[];
};

const MODEL = process.env.GEMINI_MODEL ?? "gemini-3.8-flash";
const BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models";

function getKey() {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error("GEMINI_API_KEY is not configured");
  return key;
}

export async function analyzeListing(listing: {
  id?: string | null;
  slug?: string | null;
  type?: string | null;
  title?: string | null;
  description?: string | null;
  agentAccess?: string | null;
  deadline?: string | null;
  reward?: unknown;
  compensationType?: string | null;
  skills?: string[];
  raw?: unknown;
}) {
  const prompt = [
    "You are SwarmCore, an autonomous bounty-hunting agent.",
    "Analyze the FULL Superteam listing contract below.",
    "Our primary filter is zero monetary entry cost and autonomous execution.",
    "KYC is informational only and must NOT by itself make a listing ineligible.",
    "Wallet signing is allowed in principle, including zero-value signatures or transactions, but spending money is forbidden without explicit human approval.",
    "A human-required action, paid transaction, deposit, purchase, or other monetary spend makes the listing not autonomously executable for the current MVP.",
    "Do not invent requirements, rewards, deadlines, or capabilities.",
    "Return ONLY valid JSON matching the requested schema.",
    "",
    JSON.stringify(listing, null, 2),
    "",
    "Schema:",
    JSON.stringify({
      eligible: "boolean",
      confidence: "number 0..1",
      categoryFit: ["string"],
      reasoning: "string",
      plan: ["short actionable step"],
      zeroCost: "boolean",
      autonomous: "boolean",
      spendingRequired: "boolean",
      humanActionRequired: "boolean",
      walletSigningRequired: "boolean",
      kyc: "required | not_required | unknown",
      submissionReady: "boolean",
      notes: ["string"],
    }),
  ].join("\n");

  const response = await fetch(
    `${BASE_URL}/${MODEL}:generateContent?key=${encodeURIComponent(getKey())}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.1,
          responseMimeType: "application/json",
        },
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Gemini API ${response.status}: ${(await response.text()).slice(0, 500)}`);
  }

  const data = await response.json() as any;
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Gemini returned no text");

  return JSON.parse(text) as GeminiAnalysis;
}
