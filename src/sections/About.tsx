import React from 'react';
import { useLanguage } from '../core/hooks/useLanguage';
import { translations } from '../core/data/translations';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <div className="relative">
                    <div className="absolute inset-0 bg-brand-200 dark:bg-brand-900/50 transform translate-x-4 translate-y-4 rounded-lg"></div>
                    <img 
                        src="https://picsum.photos/600/600?grayscale" 
                        alt="Kevin Hsieh" 
                        className="relative rounded-lg shadow-lg w-full object-cover" 
                    />
                </div>
            </div>
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t.title}</h2>
                <h3 className="text-xl text-brand-600 dark:text-brand-400 font-medium mb-4">{t.founder}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {t.p1}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                   {t.p2}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded border-l-4 border-gray-800 dark:border-gray-500">
                        <span className="block font-bold text-gray-900 dark:text-white">{t.eng}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{t.engDesc}</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded border-l-4 border-brand-600 dark:border-brand-500">
                        <span className="block font-bold text-gray-900 dark:text-white">{t.strat}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{t.stratDesc}</span>
                    </div>
                </div>
            </div>
          </div>
       </div>
    </section>
  );
};

export default About;