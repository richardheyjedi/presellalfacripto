import React from 'react';
import { ShieldCheck, Lock, Eye, Headphones } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityItems = [
    {
      icon: ShieldCheck,
      title: 'Gestão de Risco Controlada',
      desc: 'Recomendação rígida de dimensionamento de lote (1% a 2% de risco por operação) para garantir preservação do seu patrimônio.',
    },
    {
      icon: Lock,
      title: 'Privacidade & Ambiente Seguro',
      desc: 'Canal VIP exclusivo no Telegram com bot automatizado para verificação de membros e acesso 100% encriptado.',
    },
    {
      icon: Eye,
      title: 'Histórico 100% Auditável',
      desc: 'Todas as operações (acertos e stop loss) são registradas publicamente na planilha oficial de performance da sala.',
    },
    {
      icon: Headphones,
      title: 'Suporte Técnico e Operacional',
      desc: 'Suporte ativo para sanar dúvidas sobre alavancagem, tipos de ordem (Limit/Market) e gerenciamento de banca.',
    },
  ];

  return (
    <section id="seguranca" className="py-24 px-4 relative z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-electric-light px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20">
          Segurança & Compromisso
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
          Sua Segurança Operacional em Primeiro Lugar
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Atuamos de forma profissional e responsável, priorizando a gestão de capital e a transparência em cada recomendação.
        </p>
      </div>

      {/* Grid of Security Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {securityItems.map((sec, idx) => {
          const IconComp = sec.icon;
          return (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-electric-light/40 transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-electric-blue/15 border border-electric-blue/30 flex items-center justify-center flex-shrink-0 shadow-glow-blue">
                <IconComp className="w-6 h-6 text-electric-light" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {sec.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {sec.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
