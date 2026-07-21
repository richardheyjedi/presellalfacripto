import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Gabriel Menezes',
      role: 'Membro VIP há 9 meses',
      gain: '+42.8% de Lucro no Mês',
      text: 'Já passei por várias salas de sinais que só davam stop loss. A CryptoVIP é totalmente diferente. A gestão de risco é levada a sério e os sinais chegam rápido.',
      avatar: 'G',
    },
    {
      name: 'Carla Silveira',
      role: 'Membro VIP há 5 meses',
      gain: '+38.4% de Lucro no Mês',
      text: 'Para quem trabalha o dia todo igual a mim, ter os alvos exatos de TP1, TP2 e Stop Loss salvou minha vida operando cripto. Muito didático!',
      avatar: 'C',
    },
    {
      name: 'Rodrigo Fontes',
      role: 'Membro VIP há 1 ano',
      gain: '+65.2% no Trimestre',
      text: 'O suporte tira dúvidas rápido sobre alavancagem. O sinal do Bitcoin na semana passada pagou a mensalidade do ano inteiro!',
      avatar: 'R',
    },
  ];

  return (
    <section className="py-20 px-4 relative z-10 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-electric-light px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20">
          Depoimentos Reais
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
          O Que Dizem Nossos Membros VIP
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, index) => (
          <div key={index} className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                "{rev.text}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <div className="w-10 h-10 rounded-full bg-electric-deep border border-electric-light flex items-center justify-center font-bold text-white text-base">
                {rev.avatar}
              </div>
              <div>
                <div className="font-bold text-white text-sm flex items-center gap-1.5">
                  {rev.name}
                  <CheckCircle className="w-3.5 h-3.5 text-electric-light" />
                </div>
                <div className="text-[11px] text-slate-400">{rev.role}</div>
                <div className="text-xs font-extrabold text-emerald-400 mt-0.5">{rev.gain}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
