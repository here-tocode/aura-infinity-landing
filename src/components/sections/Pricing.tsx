import React from "react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Landing Page Sprint",
    tag: "5–7 days",
    points: [
      "Conversion-focused copy & design",
      "Pixel-perfect, fully responsive build",
      "SEO + analytics wired in",
      "One round of revisions",
    ],
  },
  {
    name: "Website Build",
    tag: "2–4 weeks",
    featured: true,
    points: [
      "Multi-page, typed React + TS app",
      "CMS or headless content layer",
      "Edge hosting + CI/CD",
      "30 days post-launch support",
    ],
  },
  {
    name: "AI Agent / Automation",
    tag: "Retainer",
    points: [
      "Custom Claude / GPT agent or pipeline",
      "Tool use, memory, RAG, evals",
      "n8n / MCP integrations",
      "Monthly iteration & monitoring",
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-matte relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300/80">Engagements</p>
          <h2 className="text-gold-gradient mt-3 text-4xl font-bold sm:text-5xl">Pick Your Lane</h2>
          <p className="mt-4 text-amber-100/70">
            Fixed-scope sprints or ongoing retainers. Every engagement starts with a free 30-min strategy call.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`reveal flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold ${
                t.featured
                  ? "border-amber-300/40 bg-[#171513]"
                  : "border-amber-300/15 bg-[#111110] hover:border-amber-300/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-amber-50">{t.name}</h3>
                {t.featured && (
                  <span className="bg-gold-gradient rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0A0907]">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-gold-gradient mt-1 text-sm font-medium">{t.tag}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-amber-100/80">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-300" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="bg-gold-gradient shadow-gold mt-8 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-[#0A0907] transition-transform hover:scale-105"
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;