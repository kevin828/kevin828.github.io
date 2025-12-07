import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getThemesByCategory, ThemeCategory, PREVIEW_SUBTHEME_IDS, categoryToSlug } from '../../core/hooks/useThemeSwitcher';
import PortfolioLayoutRenderer from '../utilities/PortfolioLayoutRenderer';
import { useLanguage } from '../../core/hooks/useLanguage';
import { translations } from '../../core/data/translations';
import Button from '../atoms/Button';
import Card from './Card';

interface PortfolioCardProps {
  category: ThemeCategory;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ category }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const tCats = translations[language].categories;
  const tPortfolio = translations[language].portfolio;
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const themes = getThemesByCategory(category, language);
  // Use configured preview ID, or fallback to first available theme
  const previewId = PREVIEW_SUBTHEME_IDS[category];
  const defaultTheme = themes.find(t => t.id === previewId) || themes[0];

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

  const getCategoryDescription = (cat: ThemeCategory) => {
    const desc = tPortfolio.categoryDescriptions;
    switch (cat) {
      case 'Portfolio': return desc.portfolio;
      case 'E-Commerce': return desc.ecommerce;
      case 'Corporate': return desc.corporate;
      case 'Content/News': return desc.news;
      case 'Software/SaaS': return desc.software;
      default: return '';
    }
  };

  useEffect(() => {
    let rafId: number;

    const updateParallax = () => {
      if (!cardRef.current || !contentRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if card is in viewport (with buffer)
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const previewContainer = contentRef.current.parentElement;
        if (!previewContainer) return;

        const contentHeight = contentRef.current.scrollHeight;
        const previewHeight = previewContainer.clientHeight;

        // Scale factor matches the inline style below (100 / 285.7% ~= 0.35)
        const scale = 0.35;
        const availableVisibleHeight = previewHeight / scale;

        // Max scroll is the difference between content height and the visible window
        // Ensure non-negative
        const maxScroll = Math.max(0, contentHeight - availableVisibleHeight);

        // Calculate progress of card through viewport
        // 0 = Entering from bottom
        // 1 = Leaving at top
        const totalTravel = viewportHeight + rect.height;
        const currentTravel = viewportHeight - rect.top;
        let progress = currentTravel / totalTravel;

        // Clamp progress to ensure we don't overscroll
        progress = Math.max(0, Math.min(1, progress));

        const translateY = -(maxScroll * progress);

        contentRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateParallax);

    // Use ResizeObserver to detect content size changes (e.g. images loading)
    const resizeObserver = new ResizeObserver(() => {
      updateParallax();
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    updateParallax(); // Initial check

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateParallax);
      resizeObserver.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <Card
      ref={cardRef}
      onClick={() => navigate(`/explore/${categoryToSlug(category)}`)}
      noPadding
      className="group relative cursor-pointer flex flex-col h-[500px] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-gray-200 dark:border-slate-800"
    >
      {/* Header Area */}
      <div className="p-6 bg-white dark:bg-slate-900 z-10 relative border-b border-gray-100 dark:border-slate-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {getCategoryLabel(category)}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
          {getCategoryDescription(category)}
        </p>
      </div>

      {/* Preview Window (Mock Browser) */}
      <div className="relative flex-grow bg-gray-100 dark:bg-slate-950 px-4 pt-4 overflow-hidden">
        <div className="w-full h-full bg-white dark:bg-slate-900 rounded-t-lg shadow-lg relative overflow-hidden ring-1 ring-black/5">
          {/* Mock Browser Bar */}
          <div className="h-6 bg-gray-100 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 flex items-center px-3 gap-1.5 z-20 relative">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          </div>

          {/* Dynamic Content Container - Scaled Down & Parallaxed */}
          {/* Width 285.7% is roughly 100/0.35 */}
          <div
            ref={contentRef}
            className="min-h-[2500px] origin-top-left transform pointer-events-none select-none will-change-transform bg-white dark:bg-slate-900"
            style={{ width: '285.7%', transform: 'scale(0.35)' }}
          >
            <PortfolioLayoutRenderer theme={defaultTheme} />
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-brand-900/10 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px] z-30">
            <Button className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
              {tPortfolio.explore} {themes.length} {tPortfolio.layouts}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PortfolioCard;