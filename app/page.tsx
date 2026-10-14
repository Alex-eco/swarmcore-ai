const pillars = [
  {
    number: "01",
    title: "Multi-Agent Orchestration",
    subtitle: "Coordinate intelligence, not just prompts.",
    body: "Specialized agents discover opportunities, break down work, challenge assumptions and review outputs. SwarmCore coordinates the workflow so each agent has a defined role and results can be checked before action.",
    tags: ["Delegation", "Specialized agents", "Cross-checking"],
  },
  {
    number: "02",
    title: "Agent Economic Security",
    subtitle: "Understand costs and risks before acting.",
    body: "Autonomous agents need to account for API costs, uncertain rewards, rejection risk and untrusted instructions. SwarmCore is being designed to evaluate expected value, apply execution limits and reduce exposure to prompt injection.",
    tags: ["Cost-aware decisions", "Risk controls", "Prompt-injection defense"],
  },
  {
    number: "03",
    title: "Autonomous Execution & Verified Outcomes",
    subtitle: "Measure results in the real world.",
    body: "The intended workflow discovers tasks, routes work, checks deliverables and tracks acceptance, expenses and payouts. The goal is verified outcomes and net economic value—not activity, token usage or task count alone.",
    tags: ["Task discovery", "Result verification", "Payout tracking"],
  },
];

const steps = [
  ["01", "Discover", "Find relevant tasks and opportunities."],
  ["02", "Evaluate", "Estimate reward, cost, uncertainty and risk."],
  ["03", "Execute safely", "Assign work with bounded tool permissions."],
  ["04", "Verify", "Review the deliverable before submission."],
  ["05", "Track outcomes", "Record acceptance, actual payouts and expenses."],
  ["06", "Improve decisions", "Compare forecasts with actual results."],
];

export default function Home() {
  return (
    <main>
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#05070b]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="font-mono text-sm font-bold tracking-[.28em]">SWARMCORE</a>
          <div className="hidden gap-7 text-sm text-slate-400 sm:flex">
            <a href="#platform" className="hover:text-white">Platform</a>
            <a href="#workflow" className="hover:text-white">How it works</a>
            <a href="#status" className="hover:text-white">Current build</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <span className="rounded-full border border-cyan-300/30 bg-cyan-300/5 px-3 py-1 text-[10px] font-semibold tracking-[.15em] text-cyan-200">PROTOTYPE IN PROGRESS</span>
        </div>
      </nav>

      <section className="grid-bg relative overflow-hidden px-6 pb-24 pt-36 sm:pt-44">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-5 font-mono text-xs tracking-[.2em] text-cyan-300">MULTI-AGENT AI · ECONOMIC SECURITY · AUTONOMOUS EXECUTION</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-.04em] sm:text-7xl">
              Make autonomous AI <span className="text-cyan-200">useful, safer, and economically viable.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              SwarmCore is building infrastructure for AI agents that coordinate work, assess costs and risks before acting, and measure real outcomes. The first use case is an automated workflow that discovers and evaluates paid tasks.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#platform" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-cyan-100">Explore the platform</a>
              <a href="#contact" className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-white/30">Discuss collaboration</a>
            </div>
            <p className="mt-6 text-xs leading-5 text-slate-500">Early-stage prototype. Scheduled opportunity scanning and structured report generation are implemented; additional capabilities are in development.</p>
          </div>

          <div className="glow relative overflow-hidden rounded-3xl border border-white/10 bg-[#080c13]/80 p-7 sm:p-9">
            <div className="grid-bg absolute inset-0 opacity-40" />
            <div className="relative">
              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-xs tracking-[.2em] text-cyan-200">AGENT WORKFLOW</span>
                <span className="rounded-full border border-cyan-300/20 px-2 py-1 text-[10px] text-cyan-200">CONCEPT</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["01", "Discover", "Find opportunities"],
                  ["02", "Evaluate", "Estimate cost & risk"],
                  ["03", "Execute", "Route bounded work"],
                  ["04", "Verify", "Check real outcomes"],
                ].map(([number, title, detail]) => (
                  <div key={number} className="rounded-xl border border-white/10 bg-[#0b111b]/90 p-4">
                    <span className="font-mono text-xs text-cyan-300">{number}</span>
                    <h3 className="mt-3 font-medium">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-cyan-200/20 bg-cyan-200/[.04] p-4">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-200" />
                  <span className="text-sm text-slate-300">Outcome-first orchestration</span>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-500">Target: verified net value after costs, not simply more agent activity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-[.22em] text-cyan-300">THE PLATFORM · THREE CONNECTED DIRECTIONS</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">From coordinated agents to verified economic outcomes.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-400">Each direction solves a different part of the same problem: how to make autonomous systems work together, stay within safe limits, and deliver measurable value.</p>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.number} className="flex flex-col rounded-2xl border border-white/10 bg-white/[.025] p-6 transition hover:-translate-y-1 hover:border-cyan-200/25">
                <div className="font-mono text-xs text-cyan-300">{pillar.number} / CORE DIRECTION</div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{pillar.title}</h3>
                <p className="mt-3 text-sm font-medium text-slate-300">{pillar.subtitle}</p>
                <p className="mt-4 flex-1 text-sm leading-6 text-slate-400">{pillar.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-400">{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="border-t border-white/10 bg-[#070a10] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-[.22em] text-cyan-300">HOW IT WORKS</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">A decision loop built around outcomes.</h2>
              <p className="mt-5 leading-7 text-slate-400">The intended workflow puts economic and safety checks before execution, then uses real outcomes to improve future decisions.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {steps.map(([number, title, body]) => (
                <div key={number} className="rounded-xl border border-white/10 bg-white/[.02] p-5">
                  <span className="font-mono text-xs text-cyan-300">{number}</span>
                  <h3 className="mt-3 font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="status" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-[.22em] text-cyan-300">CURRENT BUILD</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">Building from a working workflow.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-400">SwarmCore already has an automated opportunity-scanning workflow that collects listings, filters candidates, runs a bounded analysis step and generates a structured report. The broader economic-control and verification layer is being developed around that foundation.</p>
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[.04] p-6">
              <span className="font-mono text-xs text-cyan-300">IMPLEMENTED</span>
              <h3 className="mt-4 text-lg font-medium">Opportunity scanning</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Scheduled discovery, candidate filtering and structured report generation.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[.02] p-6">
              <span className="font-mono text-xs text-slate-400">IN DEVELOPMENT</span>
              <h3 className="mt-4 text-lg font-medium">Economic guardrails</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Cost-aware selection, expected-value checks and safer execution boundaries.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[.02] p-6">
              <span className="font-mono text-xs text-slate-400">NEXT CAPABILITY</span>
              <h3 className="mt-4 text-lg font-medium">Outcome and payout tracking</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Connecting submitted work to acceptance, actual payment and net results.</p>
            </div>
          </div>
          <p className="mt-5 text-xs leading-5 text-slate-600">We do not claim autonomous earnings or positive profitability until actual payouts and costs have been verified.</p>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/[.08] to-violet-400/[.06] p-8 text-center sm:p-14">
          <p className="font-mono text-xs tracking-[.22em] text-cyan-300">BUILD WITH US</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">Help shape the next layer of autonomous AI.</h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">We welcome conversations with AI builders, Web3 teams, security specialists, research partners and potential early users.</p>
          <a href="mailto:aiagentquantum@gmail.com" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-100">Contact SwarmCore</a>
          <p className="mt-4 text-sm text-slate-500">aiagentquantum@gmail.com</p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-xs text-slate-600 sm:flex-row">
          <span>© 2026 SwarmCore</span>
          <span>Multi-Agent AI · Agent Economic Security · Autonomous Execution</span>
        </div>
      </footer>
    </main>
  );
}
