import React from "react";
import { Rocket, Code2, Bot, Workflow } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "High-Converting Landing Pages",
    body: "Pixel-perfect, lightning-fast pages engineered for conversion — copy, design, and SEO baked in.",
  },
  {
    icon: Code2,
    title: "Custom Websites & Web Apps",
    body: "Production-grade React + TypeScript builds. Typed, tested, and shipped on edge infrastructure.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    body: "Custom Claude, GPT, and open-model agents with tools, memory, and RAG — wired into your stack.",
  },
  {
    icon: Workflow,
    title: "AI Automations",
    body: "n8n, Make, and bespoke pipelines that replace manual ops and unlock 10× operator leverage.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-matte relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300/80">What we build</p>
          <h2 className="text-gold-gradient mt-3 text-4xl font-bold sm:text-5xl">Services</h2>
          <p className="mt-4 text-amber-100/70">
            Four offerings, one obsession: shipping AI-native products that move metrics.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="reveal group rounded-2xl border border-amber-300/15 bg-[#111110] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-gold"
            >
              <div className="bg-gold-gradient inline-flex h-12 w-12 items-center justify-center rounded-xl text-[#0A0907]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-amber-50">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-amber-100/65">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;