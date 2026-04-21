import React from "react";
import { Search, Compass, Hammer, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Discover", body: "We map goals, users, and constraints — fast." },
  { icon: Compass, title: "Architect", body: "Information architecture, AI design, system blueprint." },
  { icon: Hammer, title: "Build with Claude Code & Codex", body: "Agentic coding loops compress weeks into days." },
  { icon: Rocket, title: "Launch & Iterate", body: "Ship to prod, instrument, then compound improvements." },
];

const Process: React.FC = () => {
  return (
    <section className="bg-matte relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300/80">Process</p>
          <h2 className="text-gold-gradient mt-3 text-4xl font-bold sm:text-5xl">How We Ship</h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <div key={title} className="reveal relative rounded-2xl border border-amber-300/15 bg-[#111110] p-6">
              <div className="text-gold-gradient text-5xl font-bold opacity-30">0{i + 1}</div>
              <Icon className="mt-3 h-7 w-7 text-amber-300" />
              <h3 className="mt-4 text-base font-semibold text-amber-50">{title}</h3>
              <p className="mt-2 text-sm text-amber-100/70">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;