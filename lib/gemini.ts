export type GeminiAnalysis = {
  eligible: boolean;
  confidence: number;
  categoryFit: string[];
  reasoning: string;
  plan: string[];
  submissionReady: boolean;
  notes: string[];
};

const MODEL = process.env.GEMINI_MODEL ?? "gemini-2.5-flash";
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
}) {
  const prompt = [
    "You are SwarmCore, an autonomous bounty-hunting agent.",
    "Analyze the Superteam listing below.",
    "Focus on whether an AI agent can execute it autonomously with zero monetary entry cost.",
    "Prioritize smart contracts/Solidity, Web3 development, DeFi/crypto research, protocol analysis, AI×Web3, and agent-executable content/community work.",
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
