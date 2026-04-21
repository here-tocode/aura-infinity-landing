import React from "react";
import { Terminal, Cpu, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Terminal,
    title: "Claude Code Mastery",
    body: "Agentic coding workflows, sub-agents, MCP servers, parallel task orchestration — we live in the terminal.",
  },
  {
    icon: Cpu,
    title: "OpenAI Codex Power Users",
    body: "Codex CLI pipelines, custom tooling, autonomous review loops. We compound velocity, not technical debt.",
  },
  {
    icon: ShieldCheck,
    title: "Production-Grade Delivery",
    body: "Typed code, tests, CI, observability. Real software — not vibe-coded throwaways.",
  },
];

const tech = ["Claude", "OpenAI", "Anthropic MCP", "n8n", "Vercel", "Supabase"];

const Stack: React.FC = () => {
  return (
    <section id="stack" className="bg-matte-alt relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300/80">Our edge</p>
          <h2 className="text-gold-gradient mt-3 text-4xl font-bold sm:text-5xl">Stack & Superpowers</h2>
          <p className="mt-4 text-amber-100/70">
            We're operators of Claude Code and OpenAI Codex — we ship in days what teams take months to spec.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="reveal rounded-2xl border border-amber-300/15 bg-[#0A0907] p-8 transition-all duration-300 hover:border-amber-300/40 hover:shadow-gold"
            >
              <Icon className="h-8 w-8 text-amber-300" />
              <h3 className="mt-5 text-xl font-semibold text-amber-50">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-amber-100/70">{body}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-3">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-amber-300/20 bg-[#0A0907] px-4 py-1.5 text-xs font-medium text-amber-100/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;