import React from "react";

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

/**
 * Aura Infinity Labs custom logo.
 * The mark fuses a lowercase alpha (α) with a sideways infinity (∞) — one
 * continuous gold-gradient stroke. The alpha's body is the left lobe of the
 * infinity; the alpha's tail completes the right lobe.
 */
export const Logo: React.FC<LogoProps> = ({
  size = 36,
  showWordmark = true,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Aura Infinity Labs"
      >
        <defs>
          <linearGradient id="aiLabsGold" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="50%" stopColor="#FACC15" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <filter id="aiLabsGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/*
          One continuous stroke:
          - Starts top-right of the alpha bowl
          - Sweeps left and around forming the alpha's closed body (left lobe of ∞)
          - Crosses through the centre
          - Loops out to the right and back forming the alpha's tail (right lobe of ∞)
        */}
        <path
          d="M 30 18
             C 18 18, 12 28, 16 38
             C 20 48, 32 48, 34 38
             C 36 28, 30 18, 30 18
             M 22 32
             C 30 24, 42 24, 48 32
             C 54 40, 46 46, 38 40
             C 32 36, 30 32, 30 32"
          stroke="url(#aiLabsGold)"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#aiLabsGlow)"
        />
        {/* small accent dot at the meeting point of α and ∞ */}
        <circle cx="32" cy="32" r="1.6" fill="url(#aiLabsGold)" />
      </svg>

      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className="text-gold-gradient text-2xl font-medium italic tracking-wide"
            style={{ fontFamily: '"Cormorant Garamond", serif', letterSpacing: "0.02em" }}
          >
            Aura
          </span>
          <span className="mt-1 text-[0.6rem] font-light uppercase tracking-[0.42em] text-amber-100/70">
            Infinity&nbsp;Labs
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;