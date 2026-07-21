import React from 'react';
import { ArrowRight, Signal } from 'lucide-react';
import { VIP_URL } from '../config';

interface HeroProps {
  titleRef?: React.RefObject<HTMLHeadingElement>;
  highlightRef?: React.RefObject<HTMLDivElement>;
  descRef?: React.RefObject<HTMLDivElement>;
  btnRef?: React.RefObject<HTMLButtonElement>;
}

export const Hero: React.FC<HeroProps> = ({
  titleRef,
  highlightRef,
  descRef,
  btnRef,
}) => {
  const handleVipClick = () => {
    window.open(VIP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen w-full pt-28 pb-16 flex flex-col items-center justify-center px-4 sm:px-6 text-center z-10 overflow-hidden">
      {/* Dynamic Animated Background Spheres & Light Beam */}
      <div className="hero-glow-sphere-1" />
      <div className="hero-glow-sphere-2" />
      <div className="hero-glow-sphere-3" />
      <div className="hero-light-beam" />

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10 w-full px-2 sm:px-4">
        
        {/* 1. Small Decorative Live Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-blue/40 bg-navy-900/70 backdrop-blur-md shadow-glow-cyan animate-pulse">
          <Signal className="w-3.5 h-3.5 text-electric-cyan" />
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-200 font-bold">Transmissão em Tempo Real</span>
        </div>

        {/* 2. Main Title - Responsive sizing & line breaks */}
        <h1
          ref={titleRef as any}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-[54px] font-black text-white leading-[1.2] sm:leading-[1.15] tracking-tight max-w-[940px] mb-6 drop-shadow-lg"
        >
          Receba Sinais de Cripto <br className="block xs:hidden" /> em Tempo Real <br className="hidden sm:inline" /> no Nosso Grupo Gratuito
        </h1>

        {/* 3. Highlight Text: Proven Results */}
        <div
          ref={highlightRef as any}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-8 px-2"
        >
          <span className="text-sm sm:text-lg md:text-xl font-bold text-gradient-blue tracking-tight max-w-[760px] leading-snug drop-shadow-md">
            Análises objetivas, oportunidades selecionadas e pontos estratégicos para você acompanhar o mercado com mais clareza.
          </span>
        </div>

        {/* 4. Description Box */}
        <div
          ref={descRef as any}
          className="glass-panel w-full max-w-[740px] p-5 sm:p-7 rounded-2xl mb-10 text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed border border-white/15 shadow-2xl backdrop-blur-xl"
        >
          <p>
            Entre gratuitamente e receba sinais, possíveis pontos de entrada e saída, atualizações do mercado e conteúdos práticos preparados por especialistas. Tudo de forma simples, direta e acessível, mesmo para quem está começando.
          </p>
        </div>

        {/* 5. Main CTA Button - Full fluid responsiveness on mobile */}
        <div className="relative group w-full max-w-[340px] sm:max-w-[430px]">
          {/* Intense Outer Glow Aura */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-electric-cyan via-electric-blue to-electric-light blur-xl opacity-75 animate-pulse" />

          <button
            ref={btnRef as any}
            onClick={handleVipClick}
            className="btn-vip-primary animate-pulse-subtle w-full h-[62px] sm:h-[72px] flex items-center justify-center gap-2.5 sm:gap-3 text-white text-xs sm:text-sm md:text-base font-black tracking-wider uppercase cursor-pointer relative z-10 px-4"
          >
            <span className="drop-shadow-md tracking-wider">ENTRAR AGORA NO GRUPO GRATUITO</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/30 flex-shrink-0">
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-electric-cyan stroke-[3]" />
            </div>
          </button>
        </div>

        {/* Live Social Proof Badge below button - Auto wraps on mobile */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-4 py-2 sm:py-2.5 rounded-2xl sm:rounded-full bg-navy-900/60 border border-white/10 text-[10px] sm:text-xs text-slate-200 backdrop-blur-md shadow-lg font-semibold max-w-[90%] sm:max-w-none">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Acesso 100% gratuito</span>
          </div>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span>Vagas limitadas para novos membros</span>
        </div>

      </div>
    </section>
  );
};
