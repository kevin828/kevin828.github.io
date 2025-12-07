import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../core/hooks/useLanguage';
import { translations } from '../../core/data/translations';

const ExplorerSiteMenu: React.FC = () => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const tNav = translations[language].nav;
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: tNav.portfolio, id: 'portfolio' },
        { name: tNav.services, id: 'services' },
        { name: tNav.pricing, id: 'pricing' },
        { name: tNav.about, id: 'about' },
        { name: tNav.contact, id: 'contact' },
    ];

    const handleSiteNav = (id: string) => {
        setIsOpen(false);
        navigate('/');
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

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md transition-colors text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-slate-800 focus:outline-none"
                aria-label="Site Menu"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-gray-100 dark:border-slate-700 py-2 z-50 overflow-hidden ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-100 origin-top-right">
                        {navLinks.map(link => (
                            <button
                                key={link.id}
                                onClick={() => handleSiteNav(link.id)}
                                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${link.id === 'contact'
                                        ? 'text-brand-600 dark:text-brand-400 sm:hidden'
                                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700'
                                    }`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ExplorerSiteMenu;