import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';
import { useDarkMode } from '../core/hooks/useDarkMode';
import { useLanguage } from '../core/hooks/useLanguage';
import { translations } from '../core/data/translations';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useDarkMode();
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  
  const t = translations[language].nav;

  // Static IDs for scroll tracking
  const sectionIds = ['portfolio', 'services', 'pricing', 'about'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const scrollPosition = window.scrollY + 100; // Header offset + buffer
      let current = '';

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.portfolio, id: 'portfolio' },
    { name: t.services, id: 'services' },
    { name: t.pricing, id: 'pricing' },
    { name: t.about, id: 'about' },
  ];

  const scrollToSection = (id: string) => {
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
  };

  const handleNavigation = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      scrollToSection(id);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" onClick={handleLogoClick} className={`text-2xl font-bold tracking-tighter transition-colors ${scrolled || isMobileMenuOpen ? 'text-brand-900 dark:text-brand-400' : 'text-gray-900 dark:text-white'}`}>
            K.H. <span className="text-brand-600 dark:text-brand-400">Strategy</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className={`text-sm transition-colors bg-transparent border-none cursor-pointer
                ${activeSection === link.id 
                  ? 'text-brand-600 dark:text-brand-400 font-bold' 
                  : `font-medium hover:text-brand-600 dark:hover:text-brand-400 ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-gray-800 dark:text-white'}`
                }
              `}
            >
              {link.name}
            </button>
          ))}
          
          <button
            onClick={toggleLanguage}
            className={`relative group p-2 rounded-md transition-colors font-bold font-mono text-xs ${
                scrolled
                    ? 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800'
                    : 'text-gray-800 hover:bg-white/20 dark:text-white dark:hover:bg-white/10'
            }`}
            aria-label="Toggle Language"
            title={language === 'en' ? 'Switch to Traditional Chinese' : 'Switch to English'}
          >
             {language === 'en' ? 'EN' : 'TW'}
             {/* Tooltip */}
             <span className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-gray-800 dark:bg-slate-700 text-white text-[10px] py-1 px-2 rounded shadow-lg font-sans font-normal z-50">
                {language === 'en' ? 'Switch to Traditional Chinese' : 'Switch to English'}
             </span>
          </button>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                scrolled
                    ? 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800'
                    : 'text-gray-800 hover:bg-white/20 dark:text-white dark:hover:bg-white/10'
            }`}
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

          <Button size="sm" onClick={() => handleNavigation('contact')}>
            {t.contact}
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
            <button
                onClick={toggleLanguage}
                className={`p-2 rounded-md transition-colors font-bold font-mono text-xs ${
                    scrolled || isMobileMenuOpen ? 'text-gray-600 dark:text-gray-300' : 'text-gray-800 dark:text-white'
                }`}
                title={language === 'en' ? 'Switch to Traditional Chinese' : 'Switch to English'}
            >
               {language === 'en' ? 'EN' : 'TW'}
            </button>
            <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                    scrolled || isMobileMenuOpen ? 'text-gray-600 dark:text-gray-300' : 'text-gray-800 dark:text-white'
                }`}
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
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors focus:outline-none ${
                    scrolled || isMobileMenuOpen ? 'text-gray-600 dark:text-gray-300' : 'text-gray-800 dark:text-white'
                }`}
                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? (
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl border-t border-gray-100 dark:border-slate-800 transition-all duration-300 ease-in-out transform origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100 translate-y-0 visible' : 'opacity-0 scale-y-95 -translate-y-2 invisible'
        }`}
      >
          <div className="flex flex-col px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                  <button
                      key={link.id}
                      onClick={() => handleNavigation(link.id)}
                      className={`text-left text-lg font-medium py-3 border-b border-gray-100 dark:border-slate-800 last:border-0 ${
                          activeSection === link.id
                              ? 'text-brand-600 dark:text-brand-400'
                              : 'text-gray-800 dark:text-white hover:text-brand-600 dark:hover:text-brand-400'
                      }`}
                  >
                      {link.name}
                  </button>
              ))}
              <div className="pt-4">
                   <Button size="lg" className="w-full" onClick={() => handleNavigation('contact')}>
                      {t.contact}
                  </Button>
              </div>
          </div>
      </div>
    </nav>
  );
};

export default Navigation;