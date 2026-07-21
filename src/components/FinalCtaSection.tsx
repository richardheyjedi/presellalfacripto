import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { VIP_URL } from '../config';

export const FinalCtaSection: React.FC = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleVipClick = () => {
    window.open(VIP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="vip-access" className="py-24 px-4 relative z-10 max-w-5xl mx-auto">
      <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 text-center border border-electric-blue/40 relative overflow-hidden shadow-2xl">
        {/* Subtle background glow circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl pointer-events-none" />

        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs font-bold uppercase tracking-wider mb-6">
          <Flame className="w-4 h-4 text-rose-400 animate-pulse" />
          <span>Desconto Promocional de Lançamento por Tempo Limitado</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight">
          Pronto para Transformar Suas Operações no Mercado Cripto?
        </h2>

        <p className="text-slate-200 text-sm sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Junte-se a mais de 14.500 membros e tenha acesso a análises institucionais, entradas em tempo real e suporte estratégico.
        </p>

        {/* Countdown & Slots Left Box */}
        <div className="inline-flex flex-wrap items-center justify-center gap-6 px-6 py-3 rounded-2xl bg-navy-950/80 border border-white/10 mb-10">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 uppercase font-semibold">Oferta Expira Em:</span>
            <span className="font-mono font-extrabold text-electric-light text-lg sm:text-xl">
              {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          <div className="hidden sm:block w-[1px] h-6 bg-white/10" />
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Restam apenas 7 vagas com 50% OFF</span>
          </div>
        </div>

        {/* Big CTA Button */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-electric-cyan via-electric-blue to-electric-light blur-xl opacity-75 animate-pulse" />
            <button
              onClick={handleVipClick}
              className="btn-vip-primary animate-pulse-subtle w-[320px] sm:w-[430px] h-[66px] sm:h-[72px] flex items-center justify-center gap-3 text-white text-sm sm:text-base font-black tracking-wider uppercase cursor-pointer relative z-10"
            >
              <span className="drop-shadow-md tracking-wider">GARANTIR MEU ACESSO À SALA VIP</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/30">
                <ArrowRight className="w-4 h-4 text-electric-cyan stroke-[3]" />
              </div>
            </button>
          </div>
        </div>

        {/* Guarantee footer note */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Garantia incondicional de 7 dias • Acesso imediato no Telegram</span>
        </div>
      </div>
    </section>
  );
};
