import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const EditorialMagazineLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
      en: {
          season: "Spring / Summer 2025",
          heroTitle: "Ethereal Motion",
          quote: "\"Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening.\"",
          item1: "Silk Scarf",
          item2: "Leather Boots"
      },
      tw: {
          season: "2025 春 / 夏",
          heroTitle: "空靈動態",
          quote: "「時尚不僅存在於服裝中。時尚在天空中，在街道上，時尚與觀念、生活方式以及發生的一切息息相關。」",
          item1: "絲綢圍巾",
          item2: "經典皮靴"
      }
  }[language];

  return (
    <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 transition-colors duration-300">
      <div className="grid md:grid-cols-2 min-h-[600px]">
        {/* Left: Hero Image */}
        <div className="relative h-96 md:h-auto overflow-hidden">
             <img 
               src="https://picsum.photos/800/1200?random=fashion" 
               alt="Fashion Editorial" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
             />
             <div className="absolute bottom-8 left-8">
                 <p className="text-white text-xs tracking-[0.3em] uppercase mb-2">{t.season}</p>
                 <h2 className="text-white text-4xl font-serif italic">{t.heroTitle}</h2>
             </div>
        </div>

        {/* Right: Content & Grid */}
        <div className="p-12 flex flex-col justify-center">
            <div className="mb-12 text-center md:text-left">
                <h3 className="font-serif text-3xl mb-4">{contentFocus.title}</h3>
                <p className="text-stone-500 dark:text-stone-400 leading-relaxed font-serif italic max-w-md">
                    {t.quote}
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="bg-stone-50 dark:bg-stone-800 p-4 text-center">
                    <img src="https://picsum.photos/300/400?random=bag" alt="Item" className="w-full h-48 object-cover mb-4" />
                    <p className="font-serif text-sm">{t.item1}</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">$120.00</p>
                </div>
                <div className="bg-stone-50 dark:bg-stone-800 p-4 text-center">
                    <img src="https://picsum.photos/300/400?random=shoes" alt="Item" className="w-full h-48 object-cover mb-4" />
                    <p className="font-serif text-sm">{t.item2}</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">$450.00</p>
                </div>
            </div>

            <div className="text-center md:text-left">
                <Button className="rounded-none bg-stone-900 text-white px-10 py-4 uppercase tracking-widest hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-300">
                    {contentFocus.primaryCTA}
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EditorialMagazineLayout;