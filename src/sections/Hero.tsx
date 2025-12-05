import React, { useEffect, useState } from 'react';
import Button from '../components/atoms/Button';
import { useLanguage } from '../core/hooks/useLanguage';
import { translations } from '../core/data/translations';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to center of screen (values -1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      
      // Move background slightly in opposite direction for depth
      setOffset({ x: x * -15, y: y * -15 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-50 dark:bg-slate-900 transition-colors duration-300">
      
      {/* Dynamic Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
            className="absolute inset-0 transition-transform duration-100 ease-out will-change-transform"
            style={{ 
                transform: `translate(${offset.x}px, ${offset.y}px) scale(1.1)`,
            }}
        >
            <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                alt="Global Tech Network" 
                className="w-full h-full object-cover opacity-10 dark:opacity-25 filter sepia-[0.2] dark:sepia-0"
            />
        </div>
        {/* Gradient Overlays for smooth integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/90 via-brand-50/50 to-brand-50/90 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-900/90"></div>
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-200 dark:bg-brand-900/40 blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-normal filter animate-blob pointer-events-none"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-72 h-72 rounded-full bg-purple-200 dark:bg-purple-900/40 blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-normal filter animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 drop-shadow-sm">
          {t.titleLine1} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600 dark:from-brand-400 dark:to-purple-400">{t.titleLine2}</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-10">
          {t.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-8 sm:px-0">
          <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-500/20" onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})}>
            {t.ctaPrimary}
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm" onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>
            {t.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;