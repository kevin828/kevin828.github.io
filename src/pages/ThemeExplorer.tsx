import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getThemesByCategory, ThemeCategory, CATEGORIES } from '../core/hooks/useThemeSwitcher';
import { useLanguage } from '../core/hooks/useLanguage';
import { useDarkMode } from '../core/hooks/useDarkMode';
import PortfolioLayoutRenderer from '../components/utilities/PortfolioLayoutRenderer';
import Button from '../components/atoms/Button';
import { translations } from '../core/data/translations';

// Helper to map URL slugs back to exact Category strings
const slugToCategory = (slug: string): ThemeCategory | undefined => {
    switch (slug) {
        case 'portfolio': return 'Portfolio';
        case 'ecommerce': return 'E-Commerce';
        case 'corporate': return 'Corporate';
        case 'news': return 'Content/News';
        case 'software': return 'Software/SaaS';
        default: return undefined;
    }
};

// Helper to map Category strings to URL slugs
const categoryToSlug = (cat: ThemeCategory): string => {
    switch (cat) {
        case 'Portfolio': return 'portfolio';
        case 'E-Commerce': return 'ecommerce';
        case 'Corporate': return 'corporate';
        case 'Content/News': return 'news';
        case 'Software/SaaS': return 'software';
        default: return 'portfolio';
    }
};

const ThemeExplorer: React.FC = () => {
    const { categorySlug } = useParams<{ categorySlug: string }>();
    const navigate = useNavigate();
    const { language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useDarkMode();

    const tCats = translations[language].categories;
    const tNav = translations[language].nav;
    const tExplorer = translations[language].themeExplorer;

    const category = slugToCategory(categorySlug || '');

    const [activeSubThemeId, setActiveSubThemeId] = useState<string>('');
    const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
    const [isSiteMenuOpen, setIsSiteMenuOpen] = useState(false);

    // Load themes based on category and language
    const themes = category ? getThemesByCategory(category, language) : [];

    const navLinks = [
        { name: tNav.portfolio, id: 'portfolio' },
        { name: tNav.services, id: 'services' },
        { name: tNav.pricing, id: 'pricing' },
        { name: tNav.about, id: 'about' },
        { name: tNav.contact, id: 'contact' },
    ];

    useEffect(() => {
        // Ensure valid subtheme is selected when category changes or initial load
        if (themes.length > 0) {
            const currentThemeExists = themes.some(t => t.id === activeSubThemeId);
            if (!currentThemeExists) {
                setActiveSubThemeId(themes[0].id);
            }
        }
    }, [categorySlug, themes, activeSubThemeId]);

    const handleSiteNav = (id: string) => {
        setIsSiteMenuOpen(false);
        navigate('/');
        // Wait for navigation to complete and LandingPage to mount before scrolling
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }, 300);
    };

    if (!category) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-slate-900">
                <h1 className="text-2xl font-bold mb-4 dark:text-white">{tExplorer.categoryNotFound}</h1>
                <Button onClick={() => navigate('/')}>{tExplorer.returnHome}</Button>
            </div>
        );
    }

    const activeTheme = themes.find(t => t.id === activeSubThemeId) || themes[0];

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
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
            {/* Header / Toolbar */}
            <div className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-slate-800 shadow-sm transition-colors duration-300 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Top Row: Navigation & Global Controls */}
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-4">
                            {/* Category Selector */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
                                    className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors group"
                                >
                                    <span>{getCategoryLabel(category)}</span>
                                    <svg className={`w-4 h-4 text-gray-400 group-hover:text-brand-500 transition-transform duration-200 ${isCategoryMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {isCategoryMenuOpen && (
                                    <>
                                        <div className="fixed inset-0 z-40" onClick={() => setIsCategoryMenuOpen(false)}></div>
                                        <div className="absolute top-full left-0 mt-3 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-gray-100 dark:border-slate-700 py-2 z-50 overflow-hidden ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-100">
                                            <div className="px-4 py-2 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 mb-1">
                                                {tExplorer.switchCategory}
                                            </div>
                                            {CATEGORIES.map(cat => (
                                                <button
                                                    key={cat}
                                                    onClick={() => {
                                                        navigate(`/explore/${categoryToSlug(cat)}`);
                                                        setIsCategoryMenuOpen(false);
                                                    }}
                                                    className={`block w-full text-left px-4 py-3 text-sm transition-colors ${category === cat
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
                        </div>

                        {/* Right: Global Controls */}
                        <div className="flex items-center gap-2 relative">
                            <button
                                onClick={toggleLanguage}
                                className="p-2 rounded-md transition-colors font-bold font-mono text-xs text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800 border border-transparent hover:border-gray-200 dark:hover:border-slate-700"
                                aria-label="Toggle Language"
                            >
                                {language === 'en' ? 'EN' : 'TW'}
                            </button>

                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full transition-colors text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800 border border-transparent hover:border-gray-200 dark:hover:border-slate-700"
                                aria-label="Toggle Dark Mode"
                            >
                                {theme === 'dark' ? (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                )}
                            </button>

                            <div className="h-5 w-px bg-gray-200 dark:bg-slate-700 mx-1 hidden sm:block"></div>

                            {/* Site Menu Toggle */}
                            <button
                                onClick={() => setIsSiteMenuOpen(!isSiteMenuOpen)}
                                className="p-2 rounded-md transition-colors text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-slate-800 focus:outline-none"
                                aria-label="Site Menu"
                            >
                                {isSiteMenuOpen ? (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                                )}
                            </button>

                            {/* Site Menu Dropdown */}
                            {isSiteMenuOpen && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setIsSiteMenuOpen(false)}></div>
                                    <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-gray-100 dark:border-slate-700 py-2 z-50 overflow-hidden ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-100 origin-top-right">
                                        {navLinks.map(link => (
                                            <button
                                                key={link.id}
                                                onClick={() => handleSiteNav(link.id)}
                                                className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                                            >
                                                {link.name}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Sub-theme Switcher (Full Width & Scrollable) */}
                <div className="border-t border-gray-200 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/50 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div
                            className="flex overflow-x-auto py-3 gap-3 no-scrollbar"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <style>{`
                                .no-scrollbar::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>
                            {themes.map(theme => {
                                const isActive = activeSubThemeId === theme.id;
                                return (
                                    <button
                                        key={theme.id}
                                        onClick={() => setActiveSubThemeId(theme.id)}
                                        className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border flex-shrink-0 select-none ${isActive
                                                ? 'bg-brand-600 text-white border-brand-600 shadow-sm ring-2 ring-brand-200 dark:ring-brand-900'
                                                : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700'
                                            }`}
                                    >
                                        {theme.name}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Viewer */}
            <div className="flex-grow p-4 md:p-8">
                <div className="max-w-7xl mx-auto bg-white dark:bg-slate-900 shadow-2xl rounded-xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 min-h-[80vh] transition-colors duration-300">
                    {activeTheme && <PortfolioLayoutRenderer theme={activeTheme} />}
                </div>
            </div>
        </div>
    );
};

export default ThemeExplorer;