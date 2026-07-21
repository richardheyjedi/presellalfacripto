import React from 'react';

export const FloatingIcons: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. Bitcoin Icon Top-Left */}
      <div className="absolute top-[18%] left-[8%] sm:left-[12%] opacity-35 float-slow-1">
        <div className="w-12 h-12 rounded-full border border-electric-blue/30 bg-navy-900/60 backdrop-blur-md flex items-center justify-center shadow-glow-blue">
          <span className="text-electric-light font-bold text-xl">₿</span>
        </div>
      </div>

      {/* 2. Candlesticks Chart Top-Right */}
      <div className="absolute top-[22%] right-[8%] sm:right-[13%] opacity-40 float-slow-2">
        <div className="w-14 h-14 rounded-2xl border border-electric-blue/30 bg-navy-900/60 backdrop-blur-md p-2.5 flex items-end justify-around shadow-glow-blue">
          <div className="w-1.5 h-6 bg-emerald-400/80 rounded-sm relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-emerald-400/60" />
          </div>
          <div className="w-1.5 h-8 bg-electric-light rounded-sm relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[1px] h-10 bg-electric-light/60" />
          </div>
          <div className="w-1.5 h-4 bg-emerald-400/80 rounded-sm relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-emerald-400/60" />
          </div>
        </div>
      </div>

      {/* 3. Shield Lock Mid-Left */}
      <div className="absolute top-[48%] left-[5%] sm:left-[10%] opacity-30 float-slow-3">
        <div className="w-12 h-12 rounded-2xl border border-electric-blue/30 bg-navy-900/60 backdrop-blur-md flex items-center justify-center shadow-glow-blue">
          <svg width="22" height="26" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L22 6V14C22 20.5 17.5 25.5 12 27C6.5 25.5 2 20.5 2 14V6L12 2Z" stroke="#5CCBFF" strokeWidth="2" strokeLinejoin="round" />
            <rect x="9" y="12" width="6" height="6" rx="1" stroke="#5CCBFF" strokeWidth="1.5" />
            <path d="M10 12V10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10V12" stroke="#5CCBFF" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* 4. Blockchain Node Network Mid-Right */}
      <div className="absolute top-[52%] right-[5%] sm:right-[10%] opacity-35 float-slow-1">
        <div className="w-14 h-14 rounded-2xl border border-electric-blue/30 bg-navy-900/60 backdrop-blur-md p-3 flex items-center justify-center shadow-glow-cyan">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="7" r="3" stroke="#5CCBFF" strokeWidth="2" />
            <circle cx="7" cy="23" r="3" stroke="#2794FF" strokeWidth="2" />
            <circle cx="25" cy="23" r="3" stroke="#2794FF" strokeWidth="2" />
            <line x1="14" y1="9.5" x2="9" y2="20.5" stroke="#5CCBFF" strokeWidth="1.5" strokeDasharray="2 2" />
            <line x1="18" y1="9.5" x2="23" y2="20.5" stroke="#5CCBFF" strokeWidth="1.5" strokeDasharray="2 2" />
            <line x1="10" y1="23" x2="22" y2="23" stroke="#2794FF" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* 5. Bitcoin Icon Bottom-Left Accent */}
      <div className="absolute bottom-[20%] left-[12%] opacity-25 float-slow-2">
        <div className="w-10 h-10 rounded-full border border-white/10 bg-navy-900/40 backdrop-blur-sm flex items-center justify-center">
          <span className="text-slate-400 font-bold text-sm">₿</span>
        </div>
      </div>

      {/* Light Spots / Floating Particles */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-electric-cyan/60 blur-[1px] animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 rounded-full bg-electric-blue/60 blur-[1px] animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-electric-light/70 blur-[1px] animate-pulse" />
    </div>
  );
};
