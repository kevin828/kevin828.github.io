import React from 'react';
import { useLanguage } from '../core/hooks/useLanguage';
import { translations } from '../core/data/translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-12 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tighter">K.H. Strategy</span>
          <p className="text-sm mt-2">© {new Date().getFullYear()} K.H. Strategy. {t.rights}</p>
        </div>
        <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-600 dark:hover:text-white transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-brand-600 dark:hover:text-white transition-colors">{t.terms}</a>
            <a href="#" className="hover:text-brand-600 dark:hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-brand-600 dark:hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;