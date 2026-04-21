import React from "react";
import { ShaderAnimation } from "@/components/ui/shader-lines";

interface HeroProps {
  trustBadge?: { text: string };
  headline: { line1: string; line2: string };
  subtitle: string;
  buttons?: {
    primary?: { text: string; onClick?: () => void };
    secondary?: { text: string; onClick?: () => void };
  };
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  trustBadge,
  headline,
  subtitle,
  buttons,
  className = "",
}) => {
  return (
    <section
      className={`relative min-h-screen w-full overflow-hidden bg-matte ${className}`}
    >
      {/* Shader-lines background */}
      <div className="absolute inset-0">
        <ShaderAnimation />
      </div>

      {/* Radial vignette + bottom fade for legibility */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(10,9,7,0) 0%, rgba(10,9,7,0.55) 70%, #0A0907 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0A0907]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-32 text-center">
        {trustBadge && (
          <div className="animate-fade-in-down mb-8 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/10 px-4 py-1.5 text-sm text-amber-100 backdrop-blur-md">
            {trustBadge.text}
          </div>
        )}

        <h1 className="animate-fade-in-up animation-delay-200 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
          <span className="text-gold-gradient animate-gradient block bg-clip-text">
            {headline.line1}
          </span>
          <span className="text-gold-gradient animate-gradient mt-2 block bg-clip-text">
            {headline.line2}
          </span>
        </h1>

        <p className="animate-fade-in-up animation-delay-400 mt-8 max-w-2xl text-base text-[#FFD700]/85 sm:text-lg md:text-xl">
          {subtitle}
        </p>

        {buttons && (
          <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col items-center gap-4 sm:flex-row">
            {buttons.primary && (
              <button
                onClick={buttons.primary.onClick}
                className="bg-gold-gradient rounded-full px-8 py-3.5 text-base font-semibold text-[#0A0907] shadow-[0_10px_30px_-10px_rgba(255,215,0,0.6)] transition-transform hover:scale-105"
              >
                {buttons.primary.text}
              </button>
            )}
            {buttons.secondary && (
              <button
                onClick={buttons.secondary.onClick}
                className="rounded-full border border-[#FFD700]/40 bg-[#FFD700]/5 px-8 py-3.5 text-base font-semibold text-[#FFD700] backdrop-blur-md transition-colors hover:bg-[#FFD700]/10"
              >
                {buttons.secondary.text}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;