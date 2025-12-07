import React from 'react';
import { CATEGORIES } from '../core/hooks/useThemeSwitcher';
import { useLanguage } from '../core/hooks/useLanguage';
import { translations } from '../core/data/translations';
import SectionHeading from '../components/molecules/SectionHeading';
import PortfolioCard from '../components/molecules/PortfolioCard';

const Portfolio: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].portfolio;

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATEGORIES.map((cat) => (
            <PortfolioCard key={cat} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;