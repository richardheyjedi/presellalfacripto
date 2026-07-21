import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 relative z-10 border-t border-white/10 bg-navy-950 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Footer Logo */}
        <div className="mb-6 transform scale-90">
          <Logo showText={true} />
        </div>

        <p className="text-slate-300 font-semibold mb-3">
          ALFA CRIPTO VIP © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>

        {/* Legal Disclaimer */}
        <div className="max-w-3xl text-slate-400/80 leading-relaxed mb-8 space-y-2">
          <p>
            <strong>Aviso de Risco:</strong> A negociação de criptoativos e derivativos financeiros envolve alto nível de risco e pode não ser adequada para todos os investidores. O alto grau de alavancagem pode trabalhar tanto a seu favor quanto contra você.
          </p>
          <p>
            As informações disponibilizadas nesta página e na comunidade VIP ALFA CRIPTO têm caráter estritamente educacional e informativo e não constituem recomendação individualizada de investimento ou consultoria financeira. Desempenhos passados não são garantia de resultados futuros.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-slate-400 font-medium">
          <a href="#" className="hover:text-electric-light transition-colors">Termos de Uso</a>
          <span>•</span>
          <a href="#" className="hover:text-electric-light transition-colors">Política de Privacidade</a>
          <span>•</span>
          <a href="#" className="hover:text-electric-light transition-colors">Aviso de Isenção de Responsabilidade</a>
        </div>
      </div>
    </footer>
  );
};
