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
    body: "Autonomous agents need to account for API costs, uncertain rewards, rejection risk and untrusted instructions. SwarmCore brings cost-aware decision-making and execution boundaries into the agent workflow.",
    tags: ["Cost-aware decisions", "Risk controls", "Prompt-injection defense"],
  },
  {
    number: "03",
    title: "Autonomous Execution & Verified Outcomes",
    subtitle: "Measure results in the real world.",
    body: "The workflow connects task discovery, work routing, deliverable review and outcome tracking. The goal is verified outcomes and net economic value—not activity, token usage or task count alone.",
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

const agents = [
  { name: "Research", x: 15, y: 24, task: "Explore" },
  { name: "Planner", x: 26, y: 74, task: "Decompose" },
  { name: "Critic", x: 74, y: 24, task: "Verify" },
  { name: "Executor", x: 85, y: 74, task: "Act" },
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
            <a href="#status" className="hover:text-white">Capabilities</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <span className="rounded-full border border-cyan-300/30 bg-cyan-300/5 px-3 py-1 text-[10px] font-semibold tracking-[.15em] text-cyan-200">AGENT INFRASTRUCTURE</span>
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
              SwarmCore is an agent coordination and execution layer designed to help AI systems discover opportunities, coordinate specialized work, evaluate costs and risks, and learn from measurable outcomes.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#platform" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-cyan-100">Explore the platform</a>
              <a href="#contact" className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-white/30">Discuss collaboration</a>
            </div>
            <p className="mt-6 text-xs leading-5 text-slate-500">Working opportunity-scanning and structured analysis workflows, with economic controls and outcome verification expanding around them.</p>
          </div>

          <div className="glow relative h-[390px] overflow-hidden rounded-3xl border border-white/10 bg-[#080c13]/80 sm:h-[430px]">
            <div className="grid-bg absolute inset-0 opacity-40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.09),transparent_48%)]" />
            <div className="relative h-full w-full">
              <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-200/40 bg-[#08121d]/90 shadow-[0_0_70px_rgba(125,211,252,.18)]">
                <div className="text-center font-mono text-[10px] leading-5 tracking-[.22em] text-cyan-100">SWARM<br/>CORE</div>
              </div>
              <div className="network-orbit network-orbit-one" />
              <div className="network-orbit network-orbit-two" />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="linkGlow"><stop offset="0%" stopColor="#64748b" stopOpacity=".18"/><stop offset="50%" stopColor="#67e8f9" stopOpacity=".85"/><stop offset="100%" stopColor="#64748b" stopOpacity=".18"/></linearGradient>
                </defs>
                <line x1="15" y1="24" x2="50" y2="50" className="network-link network-link-a" />
                <line x1="26" y1="74" x2="50" y2="50" className="network-link network-link-b" />
                <line x1="74" y1="24" x2="50" y2="50" className="network-link network-link-c" />
                <line x1="85" y1="74" x2="50" y2="50" className="network-link network-link-d" />
                <circle cx="50" cy="50" r="21" className="network-ring" />
                <circle cx="50" cy="50" r="30" className="network-ring network-ring-slow" />
              </svg>
              {agents.map((agent, i) => (
                <div key={agent.name} className={`agent-node agent-node-${i + 1}`} style={{ left: `${agent.x}%`, top: `${agent.y}%` }}>
                  <span className="agent-dot" />
                  <span className="mt-3 block whitespace-nowrap text-[10px] uppercase tracking-[.16em] text-slate-400">{agent.name}</span>
                  <span className="agent-task">{agent.task} → swarm</span>
                </div>
              ))}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[9px] tracking-[.14em] text-slate-500">
                <span className="flex items-center gap-2"><span className="live-indicator" /> AGENTS COORDINATING</span>
                <span>DISCOVER / REASON / VERIFY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-[.22em] text-cyan-300">THE PLATFORM · THREE CONNECTED DIRECTIONS</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">From coordinated agents to verified economic outcomes.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-400">SwarmCore connects three essential capabilities: orchestrating specialized agents, making execution cost- and risk-aware, and evaluating results against real-world outcomes.</p>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.number} className="flex flex-col rounded-2xl border border-white/10 bg-white/[.025] p-6 transition hover:-translate-y-1 hover:border-cyan-200/25">
                <div className="font-mono text-xs text-cyan-300">{pillar.number} / CORE CAPABILITY</div>
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
              <p className="mt-5 leading-7 text-slate-400">Economic and safety checks are built into the workflow before execution, while real outcomes help guide better future decisions.</p>
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
          <p className="font-mono text-xs tracking-[.22em] text-cyan-300">CAPABILITIES & ROADMAP</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">A growing foundation for autonomous work.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-400">The core workflow scans opportunities, filters candidates, performs bounded analysis and generates structured reports. The roadmap extends this foundation with stronger economic controls, safer execution and end-to-end outcome measurement.</p>
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[.04] p-6">
              <span className="font-mono text-xs text-cyan-300">AVAILABLE</span>
              <h3 className="mt-4 text-lg font-medium">Opportunity intelligence</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Automated discovery, candidate filtering and structured analysis reports.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[.02] p-6">
              <span className="font-mono text-xs text-slate-400">EXPANDING</span>
              <h3 className="mt-4 text-lg font-medium">Economic guardrails</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Cost-aware selection, expected-value checks and safer execution boundaries.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[.02] p-6">
              <span className="font-mono text-xs text-slate-400">NEXT</span>
              <h3 className="mt-4 text-lg font-medium">Verified outcomes</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Connecting submitted work to acceptance, actual payment and net results.</p>
            </div>
          </div>
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
