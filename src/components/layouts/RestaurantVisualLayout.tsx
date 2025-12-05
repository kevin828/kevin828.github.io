import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const RestaurantVisualLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
      en: {
          tag: "Fine Dining Experience",
          menuTitle: "Chef's Tasting Menu",
          items: [
              { name: "Wagyu Beef Tartare", price: "$24" },
              { name: "Pan Seared Scallops", price: "$32" },
              { name: "Truffle Risotto", price: "$28" }
          ],
          hoursLabel: "Opening Hours",
          hours: "Mon-Sun: 17:00 - 23:00"
      },
      tw: {
          tag: "精緻餐飲體驗",
          menuTitle: "主廚品嚐菜單",
          items: [
              { name: "和牛塔塔", price: "$24" },
              { name: "香煎干貝", price: "$32" },
              { name: "松露燉飯", price: "$28" }
          ],
          hoursLabel: "營業時間",
          hours: "週一至週日: 17:00 - 23:00"
      }
  }[language];

  return (
    <div className="bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-100 font-serif min-h-[700px] flex flex-col relative overflow-hidden transition-colors duration-300">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
         <img src="https://picsum.photos/1920/1080?random=restaurant" alt="Restaurant Interior" className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-white/80 dark:bg-black/70 transition-colors duration-300"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex-grow flex flex-col justify-center items-center text-center">
         <span className="text-amber-600 dark:text-amber-500 uppercase tracking-[0.3em] text-xs mb-4 font-bold">{t.tag}</span>
         <h2 className="text-5xl md:text-7xl font-bold mb-8 italic text-stone-900 dark:text-white drop-shadow-sm">{contentFocus.title}</h2>
         
         <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md border border-stone-200 dark:border-white/10 p-8 rounded-lg max-w-2xl w-full mb-12 shadow-xl dark:shadow-none">
            <h3 className="text-2xl mb-6 text-amber-700 dark:text-amber-200 border-b border-stone-300 dark:border-white/10 pb-4">{t.menuTitle}</h3>
            <ul className="space-y-4 text-lg">
                {t.items.map((item, i) => (
                    <li key={i} className="flex justify-between">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-stone-500 dark:text-stone-400">................... {item.price}</span>
                    </li>
                ))}
            </ul>
         </div>

         <div className="flex flex-col md:flex-row gap-6 items-center">
             <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white px-10 py-4 rounded-sm border border-red-800 uppercase tracking-widest text-sm shadow-lg">
                {contentFocus.primaryCTA}
             </Button>
             <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1 font-bold">{t.hoursLabel}</p>
                <p className="text-sm font-bold">{t.hours}</p>
             </div>
         </div>
      </div>
    </div>
  );
};

export default RestaurantVisualLayout;