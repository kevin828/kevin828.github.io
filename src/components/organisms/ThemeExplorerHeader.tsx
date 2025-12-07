import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeCategory } from '../../core/hooks/useThemeSwitcher';
import { ISubThemeDetail } from '../../core/types/Theme';
import { useLanguage } from '../../core/hooks/useLanguage';
import { useDarkMode } from '../../core/hooks/useDarkMode';
import { translations } from '../../core/data/translations';
import Button from '../atoms/Button';
import ExplorerCategorySelector from '../molecules/ExplorerCategorySelector';
import ExplorerSubThemeSelector from '../molecules/ExplorerSubThemeSelector';
import ExplorerSiteMenu from '../molecules/ExplorerSiteMenu';

interface ThemeExplorerHeaderProps {
    currentCategory: ThemeCategory;
    themes: ISubThemeDetail[];
    activeSubThemeId: string;
    onSubThemeChange: (id: string) => void;
}

const ThemeExplorerHeader: React.FC<ThemeExplorerHeaderProps> = ({
    currentCategory,
    themes,
    activeSubThemeId,
    onSubThemeChange
}) => {
    const navigate = useNavigate();
    const { language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useDarkMode();
    const tNav = translations[language].nav;

    const handleContactClick = () => {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById('contact');
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

    return (
        <div className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-slate-800 shadow-sm transition-colors duration-300 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo Atom */}
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('/');
                            }}
                            className="text-lg sm:text-xl font-bold tracking-tighter text-gray-900 dark:text-white transition-colors flex-shrink-0"
                        >
                            K.H. <span className="text-brand-600 dark:text-brand-400">Strategy</span>
                        </a>

                        <div className="h-6 w-px bg-gray-200 dark:bg-slate-700 hidden sm:block"></div>

                        {/* Category Selector Molecule */}
                        <ExplorerCategorySelector currentCategory={currentCategory} />
                    </div>

                    {/* Global Controls */}
                    <div className="flex items-center gap-3 relative">
                        {/* Desktop CTA */}
                        <div className="hidden sm:block">
                            <Button
                                size="sm"
                                onClick={handleContactClick}
                                className="shadow-sm font-semibold"
                            >
                                {tNav.contact}
                            </Button>
                        </div>

                        <div className="h-5 w-px bg-gray-200 dark:bg-slate-700 mx-1 hidden sm:block"></div>

                        {/* Language Toggle Atom */}
                        <button
                            onClick={toggleLanguage}
                            className="p-2 rounded-md transition-colors font-bold font-mono text-xs text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800 border border-transparent hover:border-gray-200 dark:hover:border-slate-700"
                            aria-label="Toggle Language"
                        >
                            {language === 'en' ? 'EN' : 'TW'}
                        </button>

                        {/* Theme Toggle Atom */}
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

                        {/* Site Menu Molecule */}
                        <ExplorerSiteMenu />
                    </div>
                </div>
            </div>

            {/* Sub Theme Selector Molecule */}
            <ExplorerSubThemeSelector
                themes={themes}
                activeSubThemeId={activeSubThemeId}
                onSubThemeChange={onSubThemeChange}
            />
        </div>
    );
};

export default ThemeExplorerHeader;