import React from "react";
import { ArrowRight } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section id="contact" className="bg-matte relative px-6 py-24 sm:py-32">
      <div
        className="reveal relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-amber-300/25 px-6 py-16 text-center sm:py-20"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(245,158,11,0.18), transparent 60%), #111110",
        }}
      >
        <h2 className="text-gold-gradient mx-auto max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
          Ready to Build Something Infinite?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-amber-100/75">
          Tell us what you want to ship. We'll reply within one business day with a plan and a price.
        </p>
        <a
          href="mailto:hello@aurainfinitylabs.com"
          className="bg-gold-gradient shadow-gold mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-[#0A0907] transition-transform hover:scale-105"
        >
          Launch Your Idea <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default CTA;