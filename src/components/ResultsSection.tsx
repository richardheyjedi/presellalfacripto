import React from 'react';
import { Award, BarChart3, Users, CheckCircle } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  const stats = [
    { label: 'Taxa de Acerto Média', value: '87.4%', icon: Award, desc: 'Auditoria de sinais nos últimos 12 meses' },
    { label: 'Membros Ativos', value: '14.500+', icon: Users, desc: 'Comunidade VIP engajada diariamente' },
    { label: 'Sinais por Mês', value: '+320', icon: BarChart3, desc: 'Entradas em Spot e Mercado Futuro' },
    { label: 'Satisfação dos Membros', value: '4.9 / 5', icon: CheckCircle, desc: 'Baseado em mais de 3.200 avaliações' },
  ];

  return (
    <section id="resultados" className="py-24 px-4 relative z-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-electric-light px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20">
          Resultados e Métricas
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
          Transparência que Gera Confiança
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Nossos números refletem a consistência da nossa metodologia operacional.
        </p>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
        {stats.map((stat, i) => {
          const IconComp = stat.icon;
          return (
            <div
              key={i}
              className="stat-card glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-electric-blue/15 border border-electric-blue/30 flex items-center justify-center mb-3 shadow-glow-blue">
                <IconComp className="w-5 h-5 text-electric-light" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white mb-1 text-gradient-cyan">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400">
                {stat.desc}
              </div>
            </div>
          );
        })}
      </div>

      {/* Performance Candlestick SVG Chart Mockup */}
      <div className="glass-panel-glow p-6 sm:p-8 rounded-3xl border border-electric-blue/30 relative">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Histórico Operacional VIP
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Desempenho acumulado de ganhos vs. Stop Loss em operações recentes
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              Operações Vencedoras (Take Profit)
            </span>
            <span className="flex items-center gap-1.5 text-rose-400">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              Stop Loss Protegido
            </span>
          </div>
        </div>

        {/* SVG Curve Chart */}
        <div className="w-full h-48 sm:h-64 relative flex items-end justify-between px-2 pt-6">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 200">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2794FF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#2794FF" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
            <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
            <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

            {/* Profit Curve Area */}
            <path
              d="M0 170 Q 60 140, 120 110 T 240 80 T 360 40 T 500 20 L 500 200 L 0 200 Z"
              fill="url(#chartGrad)"
            />

            {/* Profit Curve Stroke */}
            <path
              d="M0 170 Q 60 140, 120 110 T 240 80 T 360 40 T 500 20"
              fill="none"
              stroke="#5CCBFF"
              strokeWidth="3"
            />
          </svg>

          {/* Candlestick visual bars */}
          {[
            { h: '60%', green: true },
            { h: '45%', green: true },
            { h: '75%', green: true },
            { h: '35%', green: false },
            { h: '85%', green: true },
            { h: '90%', green: true },
            { h: '70%', green: true },
            { h: '95%', green: true },
          ].map((bar, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center group cursor-pointer">
              <div
                className={`w-3 sm:w-4 rounded-sm transition-all duration-300 ${
                  bar.green ? 'bg-emerald-400 shadow-glow-blue' : 'bg-rose-500'
                }`}
                style={{ height: bar.h }}
              />
              <div className={`w-[1px] h-6 -my-3 ${bar.green ? 'bg-emerald-300' : 'bg-rose-400'}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
