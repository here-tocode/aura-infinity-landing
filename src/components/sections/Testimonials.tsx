import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Aura Infinity Labs shipped our landing page in five days and tripled our trial signups. Insane velocity.",
    name: "Maya Chen",
    role: "Founder, Northwind AI",
  },
  {
    quote: "Their custom Claude agent now handles 78% of our support volume. ROI in week two.",
    name: "Daniel Okafor",
    role: "Head of CX, Lumen Labs",
  },
  {
    quote: "These are the Claude Code and Codex operators every founder wants on speed-dial.",
    name: "Sara Lindqvist",
    role: "CTO, Vector Foundry",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-matte-alt relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300/80">Voices of trust</p>
          <h2 className="text-gold-gradient mt-3 text-4xl font-bold sm:text-5xl">What Clients Say</h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="reveal flex flex-col rounded-2xl border border-amber-300/15 bg-[#0A0907] p-7 transition-all duration-300 hover:border-amber-300/40 hover:shadow-gold"
            >
              <div className="flex gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-300" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-amber-50/90">"{t.quote}"</blockquote>
              <figcaption className="mt-6">
                <div className="text-gold-gradient text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-amber-100/60">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;