"use client";

import { useEffect, useState } from "react";

const agents = [
  { name: "Research", x: "15%", y: "25%", task: "Explore" },
  { name: "Planner", x: "27%", y: "70%", task: "Decompose" },
  { name: "Critic", x: "73%", y: "25%", task: "Verify" },
  { name: "Executor", x: "84%", y: "70%", task: "Act" },
];

export default function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((v) => (v + 1) % agents.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <main>
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#05070b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="font-mono text-sm font-bold tracking-[.28em]">SWARMCORE</a>
          <div className="hidden gap-7 text-sm text-slate-400 sm:flex">
            <a href="#research" className="hover:text-white">Research</a>
            <a href="#architecture" className="hover:text-white">Architecture</a>
            <a href="#roadmap" className="hover:text-white">Roadmap</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <span className="rounded-full border border-cyan-300/30 bg-cyan-300/5 px-3 py-1 text-[10px] font-semibold tracking-[.18em] text-cyan-200">RESEARCH PHASE</span>
        </div>
      </nav>

      <section className="grid-bg relative overflow-hidden px-6 pb-24 pt-36 sm:pt-44">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl"/>
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-5 font-mono text-xs tracking-[.25em] text-cyan-300">MULTI-AGENT AI / SWARM INTELLIGENCE</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-.04em] sm:text-7xl">
              Building the coordination layer for <span className="text-cyan-200">autonomous AI.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              SwarmCore is an early-stage research initiative exploring how autonomous AI agents can collaborate, distribute tasks, verify decisions and act collectively across cloud and edge environments.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#research" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100">Explore research</a>
              <a href="#contact" className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-white/30">Contact</a>
            </div>
            <p className="mt-6 text-xs text-slate-500">Independent research · Experimental · Not yet a commercial platform</p>
          </div>

          <div className="glow relative h-[390px] overflow-hidden rounded-3xl border border-white/10 bg-[#080c13]/80">
            <div className="absolute inset-0 grid-bg opacity-40"/>
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/40 bg-cyan-300/10 shadow-[0_0_70px_rgba(125,211,252,.18)]">
              <div className="flex h-full items-center justify-center text-center font-mono text-[10px] tracking-widest text-cyan-100">SWARM<br/>CORE</div>
            </div>
            {agents.map((a,i)=><div key={a.name} className="absolute transition-all duration-700" style={{left:a.x,top:a.y}}>
              <div className={`h-3 w-3 rounded-full ${i===active?"bg-cyan-200 shadow-[0_0_22px_rgba(125,211,252,.9)]":"bg-slate-500"}`}/>
              <div className="mt-2 text-[10px] uppercase tracking-wider text-slate-500">{a.name}</div>
              {i===active && <div className="absolute -top-5 left-5 whitespace-nowrap font-mono text-[9px] text-cyan-300">{a.task} → swarm</div>}
            </div>)}
            <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="15" y1="25" x2="50" y2="50" stroke="currentColor" strokeWidth=".18"/><line x1="27" y1="70" x2="50" y2="50" stroke="currentColor" strokeWidth=".18"/><line x1="73" y1="25" x2="50" y2="50" stroke="currentColor" strokeWidth=".18"/><line x1="84" y1="70" x2="50" y2="50" stroke="currentColor" strokeWidth=".18"/>
            </svg>
          </div>
        </div>
      </section>

      <section id="research" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-[.25em] text-cyan-300">01 / RESEARCH</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">From individual agents to collective intelligence.</h2>
          <p className="mt-5 max-w-2xl text-slate-400">We are exploring the systems layer between autonomous agents: how they communicate, delegate, challenge, coordinate and adapt.</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Multi-Agent Coordination","Dynamic task allocation, delegation and agent-to-agent workflows."],
              ["Swarm Intelligence","Collective behavior and decision-making emerging from specialized agents."],
              ["Agent Communication","Protocols and shared context for reliable collaboration."],
              ["Collective Verification","Debate, critique and cross-agent validation before action."],
              ["Edge AI","Coordination between cloud intelligence and local edge agents."],
              ["Autonomous Systems","Research toward agents that can continuously sense, reason and act."]
            ].map(([title,body])=><article key={title} className="rounded-2xl border border-white/10 bg-white/[.025] p-6 transition hover:-translate-y-1 hover:border-cyan-200/25">
              <h3 className="text-lg font-medium">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{body}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section id="architecture" className="border-t border-white/10 bg-[#070a10] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-[.25em] text-cyan-300">02 / ARCHITECTURE</p>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight">A coordination layer, not another chatbot.</h2>
              <p className="mt-5 leading-7 text-slate-400">The research direction is to connect specialized agents through a shared coordination layer that can allocate work, compare outputs, resolve conflicts and route actions to tools or edge systems.</p>
            </div>
            <div className="grid gap-3">
              {["Specialized Agents","Coordination & Delegation","Collective Reasoning","Verification & Evaluation","Tools, APIs & Edge Devices"].map((x,i)=><div key={x} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[.02] p-4"><span className="font-mono text-xs text-cyan-300">0{i+1}</span><span>{x}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-[.25em] text-cyan-300">03 / ROADMAP</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">Research first. Product later.</h2>
          <div className="mt-12 grid gap-3 md:grid-cols-5">
            {["Research","Architecture","Prototype","Experimental Swarm","Cloud + Edge"].map((x,i)=><div key={x} className="rounded-2xl border border-white/10 p-5"><div className="font-mono text-xs text-slate-500">0{i+1}</div><div className="mt-10 text-sm font-medium">{x}</div><div className="mt-3 h-px bg-gradient-to-r from-cyan-300/50 to-transparent"/></div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/[.08] to-violet-400/[.06] p-8 text-center sm:p-14">
          <p className="font-mono text-xs tracking-[.25em] text-cyan-300">RESEARCH PHASE</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">Interested in collective AI?</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">We are open to conversations around multi-agent systems, swarm intelligence, edge AI and experimental collaboration.</p>
          <a href="mailto:aiagentquantum@gmail.com" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-100">aiagentquantum@gmail.com</a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-xs text-slate-600 sm:flex-row"><span>© 2026 SwarmCore Research</span><span>Multi-Agent AI · Swarm Intelligence · Edge AI</span></div>
      </footer>
    </main>
  );
}
