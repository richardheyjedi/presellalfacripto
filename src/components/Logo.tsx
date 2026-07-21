import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', showText = true }) => {
  return (
    <div className={`relative flex items-center justify-center gap-3 cursor-pointer group ${className}`}>
      {/* Outer Ambient Glow behind logo */}
      <div className="absolute -inset-2 bg-electric-blue/20 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

      {/* SVG Icon matching reference logo (Bitcoin circle-stroke hybrid with central lambda shape) */}
      <svg
        width="64"
        height="64"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 shield-logo-glow transform group-hover:scale-105 transition-transform duration-300 flex-shrink-0 text-white"
      >
        <defs>
          {/* Luminous blue gradient for the logo strokes */}
          <linearGradient id="logoStrokeGrad" x1="16" y1="10" x2="64" y2="70" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.5" stopColor="#5CCBFF" />
            <stop offset="1" stopColor="#2794FF" />
          </linearGradient>
          
          <filter id="logoGlow" x="-10" y="-10" width="100" height="100" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g filter="url(#logoGlow)">
          {/* Main Circle */}
          <circle
            cx="40"
            cy="40"
            r="24"
            stroke="url(#logoStrokeGrad)"
            strokeWidth="4.5"
            fill="none"
          />

          {/* Top Bitcoin-style vertical ticks */}
          <path
            d="M34 6V16M46 6V16"
            stroke="url(#logoStrokeGrad)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Bottom Bitcoin-style vertical ticks */}
          <path
            d="M34 64V74M46 64V74"
            stroke="url(#logoStrokeGrad)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Center Lambda / Chevron shape (representing the 'A' of Alfa) */}
          <path
            d="M26 54L40 28L54 54"
            stroke="url(#logoStrokeGrad)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>

      {/* Brand Text layout: "alfa" on top and "cripto" offset below */}
      {showText && (
        <div className="flex flex-col text-left relative z-10 leading-none select-none">
          <span className="text-[28px] font-black tracking-normal text-white font-sans lowercase leading-none">
            alfa
          </span>
          <span className="text-[18px] font-light tracking-wide text-slate-300 font-sans lowercase ml-5 leading-none mt-0.5">
            cripto
          </span>
        </div>
      )}
    </div>
  );
};
