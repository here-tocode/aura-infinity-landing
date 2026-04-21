import React from "react";

const stats = [
  { value: "50+", label: "Projects Shipped" },
  { value: "30+", label: "Global Clients" },
  { value: "10k+", label: "Hours Automated" },
  { value: "24/7", label: "Support" },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-matte relative px-6 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 rounded-2xl border border-amber-300/15 bg-[#111110] px-6 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="reveal text-center">
            <div className="text-gold-gradient text-4xl font-bold sm:text-5xl">{s.value}</div>
            <div className="mt-2 text-sm uppercase tracking-wider text-amber-100/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;