import React from "react";

const cases = [
  {
    tag: "Landing Page",
    title: "SaaS Launch — 3.8× Conversion Lift",
    body: "Rebuilt a stalled SaaS landing in 7 days. Conversion went from 1.4% to 5.3%.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
  },
  {
    tag: "AI Agent",
    title: "Support Agent — 78% Deflection",
    body: "Custom Claude agent with RAG over 4k docs. Cut tier-1 ticket volume by three quarters.",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    tag: "Automation",
    title: "Ops Automation — 40 hrs/week saved",
    body: "Replaced a 6-step manual ops workflow with a self-healing AI pipeline.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
  },
];

const Work: React.FC = () => {
  return (
    <section id="work" className="bg-matte-alt relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300/80">Selected work</p>
          <h2 className="text-gold-gradient mt-3 text-4xl font-bold sm:text-5xl">Recent Builds</h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.title}
              className="reveal group overflow-hidden rounded-2xl border border-amber-300/15 bg-[#0A0907] transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-gold"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0907] via-[#0A0907]/30 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-amber-300/40 bg-[#0A0907]/70 px-3 py-1 text-xs font-medium text-amber-200 backdrop-blur">
                  {c.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-amber-50">{c.title}</h3>
                <p className="mt-2 text-sm text-amber-100/70">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;