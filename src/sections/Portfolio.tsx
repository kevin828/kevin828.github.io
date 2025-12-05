import React from 'react';
import { useThemeSwitcher, ThemeCategory } from '../core/hooks/useThemeSwitcher';
import PortfolioLayoutRenderer from '../components/utilities/PortfolioLayoutRenderer';
import { useLanguage } from '../core/hooks/useLanguage';
import { translations } from '../core/data/translations';
import SectionHeading from '../components/molecules/SectionHeading';

const Portfolio: React.FC = () => {
  const { category, switchCategory, activeSubTheme, availableThemes, switchSubTheme } = useThemeSwitcher();
  const { language } = useLanguage();
  const t = translations[language].portfolio;
  const tCats = translations[language].categories;

  const getCategoryLabel = (cat: ThemeCategory) => {
    switch (cat) {
      case 'Portfolio': return tCats.portfolio;
      case 'E-Commerce': return tCats.ecommerce;
      case 'Corporate': return tCats.corporate;
      case 'Content/News': return tCats.news;
      case 'Software/SaaS': return tCats.software;
      default: return cat;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.title}
          subtitle={t.subtitle}
        />

        {/* Category Switcher */}
        <div className="flex justify-start md:justify-center mb-8 overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pb-2 md:pb-0">
          <div className="flex flex-nowrap md:inline-flex md:flex-wrap gap-2 md:gap-0 bg-transparent md:bg-white md:dark:bg-slate-800 md:p-1 md:rounded-full md:shadow-sm md:border md:border-gray-200 md:dark:border-slate-700 transition-colors">
            {(['Portfolio', 'E-Commerce', 'Corporate', 'Content/News', 'Software/SaaS'] as ThemeCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => switchCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${category === cat
                    ? 'bg-gray-900 text-white shadow dark:bg-brand-600'
                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-white dark:bg-slate-800 md:bg-transparent md:dark:bg-transparent border border-gray-200 dark:border-slate-700 md:border-none'
                  }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>
        </div>

        {/* SubTheme Selector */}
        <div className="flex justify-start md:justify-center flex-nowrap md:flex-wrap gap-4 mb-12 overflow-x-auto md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0">
          {availableThemes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => switchSubTheme(theme.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-sm border-2 whitespace-nowrap flex-shrink-0
                ${activeSubTheme.id === theme.id
                  ? 'border-brand-600 bg-brand-600 text-white shadow-brand-500/30 shadow-lg scale-105'
                  : 'border-white bg-white text-gray-700 hover:border-brand-200 hover:bg-gray-50 dark:bg-slate-800 dark:border-slate-700 dark:text-gray-300 dark:hover:bg-slate-700 dark:hover:border-slate-500'
                }`}
            >
              {theme.name}
            </button>
          ))}
        </div>

        {/* Dynamic Showcase Container */}
        <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-slate-800 bg-white dark:bg-slate-900 min-h-[600px] transition-all duration-300">
          <div className="bg-gray-100 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wider">
              {getCategoryLabel(category)} / {activeSubTheme.name}
            </span>
          </div>
          <PortfolioLayoutRenderer theme={activeSubTheme} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;