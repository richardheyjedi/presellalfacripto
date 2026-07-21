import React from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  headerRef?: React.RefObject<HTMLHeadingElement>;
  logoRef?: React.RefObject<HTMLDivElement>;
}

export const Header: React.FC<HeaderProps> = ({ headerRef, logoRef }) => {
  return (
    <header className="absolute top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-auto">
      <div
        ref={headerRef as any}
        className="flex items-center justify-center py-2 px-6"
      >
        {/* Clean Centered Brand Logo (ALFA CRIPTO) - No dropdown menu */}
        <div
          ref={logoRef as any}
          className="cursor-pointer transition-transform hover:scale-105"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="ALFA CRIPTO - Sala VIP de Sinais"
        >
          <Logo showText={true} />
        </div>
      </div>
    </header>
  );
};
