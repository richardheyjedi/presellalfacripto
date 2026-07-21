import React from 'react';
import { Cpu, Users, ShieldAlert, BellRing } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Algoritmos de Alta Precisão',
      desc: 'Monitoramento 24/7 de padrões de candle, order flow e níveis ocultos de liquidez das baleias em tempo real.',
    },
    {
      icon: Users,
      title: 'Traders Institucionais',
      desc: 'Filtragem humana realizada por especialistas com mais de 8 anos no mercado financeiro para validar a entrada.',
    },
    {
      icon: ShieldAlert,
      title: 'Gestão de Risco Rigorosa',
      desc: 'Relação risco-retorno calculada em cada sinal (mínimo 1:2.5) protegendo seu banca contra ruídos do mercado.',
    },
    {
      icon: BellRing,
      title: 'Notificações Ultra-Rápidas',
      desc: 'Receba alertas instantâneos via Telegram com dados completos: par, direção, alavancagem, entradas e TP/SL.',
    },
  ];

  return (
    <section id="funcionalidades" className="py-24 px-4 relative z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-electric-light px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20">
          Diferenciais Exclusivos
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
          Tecnologia & Expertise para Maximizar Suas Decisões
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Nossa estrutura foi desenhada para quem busca consistência, reduzindo erros operacionais e oferecendo estratégias de alta probabilidade.
        </p>
      </div>

      {/* Grid of 4 Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {features.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="feature-card glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-electric-blue/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-electric-blue/15 border border-electric-blue/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-glow-blue">
                <IconComponent className="w-6 h-6 text-electric-light stroke-[2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 group-hover:text-electric-light transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
