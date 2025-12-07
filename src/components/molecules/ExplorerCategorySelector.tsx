import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeCategory, CATEGORIES, categoryToSlug } from '../../core/hooks/useThemeSwitcher';
import { useLanguage } from '../../core/hooks/useLanguage';
import { translations } from '../../core/data/translations';

interface ExplorerCategorySelectorProps {
    currentCategory: ThemeCategory;
}

const ExplorerCategorySelector: React.FC<ExplorerCategorySelectorProps> = ({ currentCategory }) => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const tCats = translations[language].categories;
    const tExplorer = translations[language].themeExplorer;
    const [isOpen, setIsOpen] = useState(false);

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
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-base sm:text-lg font-bold text-gray-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors group"
            >
                <span className="truncate max-w-[120px] sm:max-w-none">{getCategoryLabel(currentCategory)}</span>
                <svg className={`w-4 h-4 text-gray-400 group-hover:text-brand-500 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
                    <div className="absolute top-full left-0 mt-3 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-gray-100 dark:border-slate-700 py-2 z-50 overflow-hidden ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-100">
                        <div className="px-4 py-2 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 mb-1">
                            {tExplorer.switchCategory}
                        </div>
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => {
                                    navigate(`/explore/${categoryToSlug(cat)}`);
                                    setIsOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-3 text-sm transition-colors ${currentCategory === cat
                                        ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400 font-bold'
                                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700'
                                    }`}
                            >
                                {getCategoryLabel(cat)}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ExplorerCategorySelector;