import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';

interface ExplorerSubThemeSelectorProps {
    themes: ISubThemeDetail[];
    activeSubThemeId: string;
    onSubThemeChange: (id: string) => void;
}

const ExplorerSubThemeSelector: React.FC<ExplorerSubThemeSelectorProps> = ({ themes, activeSubThemeId, onSubThemeChange }) => {
    return (
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
                                onClick={() => onSubThemeChange(theme.id)}
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
    );
};

export default ExplorerSubThemeSelector;