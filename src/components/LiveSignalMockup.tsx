import React, { useState, useEffect } from 'react';
import { Signal, ShieldCheck, Zap, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface SignalData {
  pair: string;
  type: 'LONG' | 'SHORT';
  entry: string;
  target1: string;
  target2: string;
  target3: string;
  stopLoss: string;
  time: string;
  winRate: string;
  status: string;
}

const mockSignals: SignalData[] = [
  {
    pair: 'BTC / USDT',
    type: 'LONG',
    entry: '$67,450.00',
    target1: '$68,900 (+2.1%)',
    target2: '$70,500 (+4.5%)',
    target3: '$73,200 (+8.5%)',
    stopLoss: '$66,100 (-2.0%)',
    time: 'Há 4 min',
    winRate: '89.4%',
    status: 'TP2 ALCANÇADO 🚀',
  },
  {
    pair: 'ETH / USDT',
    type: 'LONG',
    entry: '$3,520.00',
    target1: '$3,620 (+2.8%)',
    target2: '$3,750 (+6.5%)',
    target3: '$3,900 (+10.8%)',
    stopLoss: '$3,440 (-2.2%)',
    time: 'Há 12 min',
    winRate: '91.2%',
    status: 'ENTRADA ATIVA ⚡',
  },
  {
    pair: 'SOL / USDT',
    type: 'LONG',
    entry: '$148.50',
    target1: '$154.00 (+3.7%)',
    target2: '$162.00 (+9.1%)',
    target3: '$175.00 (+17.8%)',
    stopLoss: '$143.00 (-3.7%)',
    time: 'Há 25 min',
    winRate: '88.7%',
    status: 'TP3 ALCANÇADO (LUCRO +17.8%) 💰',
  },
];

export const LiveSignalMockup: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mockSignals.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const signal = mockSignals[activeIndex];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 my-12 z-10 relative">
      {/* Container Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-light text-xs font-semibold uppercase tracking-wider mb-2">
          <Signal className="w-3.5 h-3.5 animate-pulse text-electric-cyan" />
          <span>Sinais em Tempo Real</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white">
          Veja a Estrutura dos Nossos Alertas VIP
        </h3>
      </div>

      {/* Signal Card Glass Panel */}
      <div className="glass-panel-glow rounded-2xl p-5 sm:p-7 relative overflow-hidden transition-all duration-500">
        {/* Top Ticker Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-electric-deep/40 border border-electric-blue/40 flex items-center justify-center font-black text-white text-base shadow-glow-blue">
              {signal.pair.split(' ')[0]}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-lg">{signal.pair}</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  {signal.type} 10x-20x
                </span>
              </div>
              <span className="text-xs text-slate-400">{signal.time} • Análise Técnica Confirmada</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-xl bg-navy-950/80 border border-electric-blue/30 text-xs font-semibold text-slate-200 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-electric-cyan" />
              <span>Taxa de Acerto: <strong className="text-electric-light">{signal.winRate}</strong></span>
            </div>
          </div>
        </div>

        {/* Signal Targets Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
          <div className="p-3 rounded-xl bg-navy-950/60 border border-white/5">
            <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Zona de Entrada
            </span>
            <span className="font-extrabold text-white text-sm sm:text-base">{signal.entry}</span>
          </div>

          <div className="p-3 rounded-xl bg-navy-950/60 border border-emerald-500/30 relative">
            <span className="block text-[11px] uppercase tracking-wider text-emerald-400 font-semibold mb-1 flex items-center justify-between">
              Target 1 <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            </span>
            <span className="font-extrabold text-emerald-300 text-sm sm:text-base">{signal.target1}</span>
          </div>

          <div className="p-3 rounded-xl bg-navy-950/60 border border-emerald-500/30">
            <span className="block text-[11px] uppercase tracking-wider text-emerald-400 font-semibold mb-1">
              Target 2 (Principal)
            </span>
            <span className="font-extrabold text-emerald-300 text-sm sm:text-base">{signal.target2}</span>
          </div>

          <div className="p-3 rounded-xl bg-navy-950/60 border border-rose-500/30">
            <span className="block text-[11px] uppercase tracking-wider text-rose-400 font-semibold mb-1 flex items-center justify-between">
              Stop Loss <ShieldCheck className="w-3 h-3 text-rose-400" />
            </span>
            <span className="font-extrabold text-rose-300 text-sm sm:text-base">{signal.stopLoss}</span>
          </div>
        </div>

        {/* Card Footer Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/5 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold text-emerald-400">{signal.status}</span>
          </div>
          <div className="text-slate-400 flex items-center gap-1">
            <span>Enviado via Telegram VIP e Notificação Push</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-electric-light" />
          </div>
        </div>
      </div>
    </div>
  );
};
