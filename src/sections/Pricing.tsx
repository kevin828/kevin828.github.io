import React from 'react';
import { useLanguage } from '../core/hooks/useLanguage';
import { useDarkMode } from '../core/hooks/useDarkMode';
import { translations } from '../core/data/translations';
import PricingCard from '../components/molecules/PricingCard';

const Pricing: React.FC = () => {
  const { language } = useLanguage();
  const { theme, toggleTheme } = useDarkMode();
  const t = translations[language].pricing;

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-gray-50 dark:bg-slate-950 overflow-hidden transition-colors duration-500">
      
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-200/40 dark:bg-brand-900/20 rounded-[100%] blur-[120px] -translate-y-1/2 transition-colors duration-500"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-200/40 dark:bg-purple-900/10 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 transition-colors duration-500"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
                <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-gray-200 dark:border-slate-700 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm"
                >
                    {theme === 'dark' ? (
                        <>
                            <svg className="w-4 h-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            <span>Light Mode</span>
                        </>
                    ) : (
                        <>
                            <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                            <span>Dark Mode</span>
                        </>
                    )}
                </button>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6 drop-shadow-sm transition-colors">{t.title}</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed transition-colors">
                {t.subtitle}
            </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto items-center">
          <PricingCard 
            index={0}
            title={t.mvpTitle}
            price={t.mvpPrice}
            period={t.mvpPer}
            features={[t.features.onePage, t.features.responsive, t.features.contact, t.features.fastDelivery]}
            buttonText={t.buttons.start}
          />

          <PricingCard 
            index={1}
            title={t.growthTitle}
            price={t.growthPrice}
            period={t.growthPer}
            features={[t.features.multiPage, t.features.cms, t.features.seo, t.features.training]}
            buttonText={t.buttons.select}
            isPopular={true}
          />

          <PricingCard 
            index={2}
            title={t.enterpriseTitle}
            price={t.enterprisePrice}
            period={t.enterprisePer}
            features={[t.features.react, t.features.database, t.features.api, t.features.support]}
            buttonText={t.buttons.contact}
          />
        </div>

        {/* Trust/Guarantee Footnote */}
        <div className="mt-16 text-center border-t border-gray-200 dark:border-slate-800/50 pt-8 transition-colors">
             <p className="text-sm text-gray-500 dark:text-slate-500 font-medium flex items-center justify-center gap-6">
                <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Secure Payment</span>
                <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> Fast Delivery</span>
             </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;