import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const WaterfallGridLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
    en: {
        subtitle: "Exploring the boundaries of visual communication.",
        project: "Project"
    },
    tw: {
        subtitle: "探索視覺溝通的邊界。",
        project: "專案"
    }
  }[language];
  
  // Tooltip definitions for metadata tags
  const metaDefinitions: Record<string, string> = {
    "Concept": "The creative logic and ideation behind the visual structure.",
    "Guidelines": "Standardized rules ensuring consistency across all brand touchpoints.",
    "設計概念": "視覺結構背後的創意邏輯與構思。",
    "視覺規範": "確保所有品牌接觸點一致性的標準化規則。"
  };
  
  // Mock data for visual grid
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <div className="p-8 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="mb-12 text-center">
        <h2 className="text-5xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          {contentFocus.title}
        </h2>
        <p className="text-xl text-gray-500 dark:text-gray-400">{t.subtitle}</p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {items.map((item) => (
          <div key={item} className="break-inside-avoid group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 bg-white dark:bg-slate-800 cursor-pointer">
            <img 
              src={`https://picsum.photos/600/${400 + (item % 3) * 100}?random=${item}`} 
              alt={`Design Work ${item}`} 
              className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 backdrop-blur-[2px]">
              <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{t.project} {item}</h3>
              <div className="flex gap-2 mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {contentFocus.metadataPriority.map(meta => (
                  <div key={meta} className="relative group/tooltip">
                    <span className="text-xs text-pink-300 uppercase tracking-wider cursor-help border-b border-pink-300/30 pb-0.5">{meta}</span>
                    <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-gray-900/95 text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none backdrop-blur-sm z-20 shadow-lg border border-gray-700">
                        {metaDefinitions[meta] || meta}
                        <div className="absolute top-full left-4 border-4 border-transparent border-t-gray-900/95"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button size="lg" className="bg-gradient-to-r from-pink-500 to-violet-500 text-white border-none">
          {contentFocus.primaryCTA}
        </Button>
      </div>
    </div>
  );
};

export default WaterfallGridLayout;