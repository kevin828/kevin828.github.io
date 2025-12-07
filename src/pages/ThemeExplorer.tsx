import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getThemesByCategory, slugToCategory } from '../core/hooks/useThemeSwitcher';
import { useLanguage } from '../core/hooks/useLanguage';
import PortfolioLayoutRenderer from '../components/utilities/PortfolioLayoutRenderer';
import Button from '../components/atoms/Button';
import { translations } from '../core/data/translations';
import ThemeExplorerHeader from '../components/organisms/ThemeExplorerHeader';

const ThemeExplorer: React.FC = () => {
    const { categorySlug } = useParams<{ categorySlug: string }>();
    const navigate = useNavigate();
    const { language } = useLanguage();

    const tExplorer = translations[language].themeExplorer;

    const category = slugToCategory(categorySlug || '');
    const [activeSubThemeId, setActiveSubThemeId] = useState<string>('');

    // Load themes based on category and language
    const themes = category ? getThemesByCategory(category, language) : [];

    useEffect(() => {
        // Ensure valid subtheme is selected when category changes or initial load
        if (themes.length > 0) {
            const currentThemeExists = themes.some(t => t.id === activeSubThemeId);
            if (!currentThemeExists) {
                setActiveSubThemeId(themes[0].id);
            }
        }
    }, [categorySlug, themes, activeSubThemeId]);

    if (!category) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-slate-900">
                <h1 className="text-2xl font-bold mb-4 dark:text-white">{tExplorer.categoryNotFound}</h1>
                <Button onClick={() => navigate('/')}>{tExplorer.returnHome}</Button>
            </div>
        );
    }

    const activeTheme = themes.find(t => t.id === activeSubThemeId) || themes[0];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
            <ThemeExplorerHeader
                currentCategory={category}
                themes={themes}
                activeSubThemeId={activeSubThemeId}
                onSubThemeChange={setActiveSubThemeId}
            />

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