import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FloatingIcons } from './components/FloatingIcons';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Entrance Master Timeline for Hero Section
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Initial states
      gsap.set(headerRef.current, { y: -60, opacity: 0 });
      gsap.set(logoRef.current, { scale: 0.2, opacity: 0, rotate: -15 });
      gsap.set(titleRef.current, { y: 50, opacity: 0, filter: 'blur(12px)' });
      gsap.set(highlightRef.current, { y: 30, opacity: 0, filter: 'blur(8px)' });
      gsap.set(descRef.current, { y: 40, opacity: 0 });
      gsap.set(btnRef.current, { scale: 0.85, opacity: 0 });

      // Entrance Sequence
      tl.to(headerRef.current, { y: 0, opacity: 1, duration: 0.8 })
        .to(logoRef.current, { scale: 1, opacity: 1, rotate: 0, duration: 0.9, ease: 'back.out(1.7)' }, '-=0.5')
        .to(titleRef.current, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.0 }, '-=0.4')
        .to(highlightRef.current, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8 }, '-=0.6')
        .to(descRef.current, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
        .to(btnRef.current, { scale: 1, opacity: 1, duration: 0.7, ease: 'elastic.out(1, 0.5)' }, '-=0.3');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#081929] bg-tech-grid bg-radial-vignette text-white overflow-hidden flex flex-col justify-between">
      {/* Curved Glowing Corner Arcs */}
      <div className="glow-arc-top-right" />
      <div className="glow-arc-bottom-left" />

      {/* Background Floating Tech Icons */}
      <FloatingIcons />

      {/* Centralized Brand Header (ALFA CRIPTO) */}
      <Header headerRef={headerRef} logoRef={logoRef} />

      {/* Main Hero Section - Forced to full screen width */}
      <main className="flex-1 flex items-center justify-center w-full">
        <Hero
          titleRef={titleRef}
          highlightRef={highlightRef}
          descRef={descRef}
          btnRef={btnRef}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
