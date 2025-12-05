import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const GossipDenseGridLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
      en: {
          tag: "Live • Exclusive • Raw",
          breaking: "Breaking",
          headlines: [
              "SHOCKING: Star Spotted at Local Diner!",
              "10 Trends You Missed",
              "Who Wore It Better?",
              "Movie Premiere Chaos!",
              "Secret Wedding?",
              "Diet Secrets Revealed"
          ],
          ctaTitle: "DON'T MISS OUT!",
          ctaDesc: "Get the juiciest news first."
      },
      tw: {
          tag: "即時 • 獨家 • 原始",
          breaking: "獨家",
          headlines: [
              "震驚：巨星現身當地小餐館！",
              "10 個你錯過的趨勢",
              "誰穿得更好看？",
              "電影首映會混亂！",
              "秘密婚禮？",
              "減肥秘訣大公開"
          ],
          ctaTitle: "別錯過！",
          ctaDesc: "搶先獲得最勁爆新聞。"
      }
  }[language];
  
  const news = [
      { size: 'lg', title: t.headlines[0] },
      { size: 'sm', title: t.headlines[1] },
      { size: 'sm', title: t.headlines[2] },
      { size: 'md', title: t.headlines[3] },
      { size: 'sm', title: t.headlines[4] },
      { size: 'sm', title: t.headlines[5] },
  ];

  return (
    <div className="bg-pink-50 dark:bg-pink-950/30 p-4 md:p-8 font-sans transition-colors duration-300">
      <div className="bg-white dark:bg-slate-900 border-4 border-black dark:border-pink-500 p-4 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(236,72,153,0.5)]">
        <h2 className="text-5xl md:text-7xl font-black text-center text-pink-600 uppercase italic tracking-tighter leading-none">
            {contentFocus.title}
        </h2>
        <div className="text-center font-bold text-xs mt-2 uppercase tracking-widest border-t-2 border-black dark:border-pink-500 pt-2 w-max mx-auto px-4 text-gray-900 dark:text-gray-100">
            {t.tag}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Main Feature - Spans 2x2 */}
          <div className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden border-2 border-black dark:border-pink-500">
              <img src="https://picsum.photos/600/600?random=celeb1" alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <span className="bg-pink-600 text-white text-xs font-bold px-2 py-1 w-fit mb-2 uppercase">{t.breaking}</span>
                  <h3 className="text-white text-2xl md:text-4xl font-black italic leading-none">{news[0].title}</h3>
              </div>
          </div>

          {/* Standard Blocks */}
          {news.slice(1).map((item, i) => (
              <div key={i} className={`relative group cursor-pointer overflow-hidden border-2 border-black dark:border-pink-500 ${item.size === 'md' ? 'col-span-2' : ''}`}>
                  <img src={`https://picsum.photos/400/300?random=gossip${i}`} alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-0 w-full bg-white dark:bg-slate-800 p-2 border-t-2 border-black dark:border-pink-500">
                      <h4 className="font-bold text-sm md:text-base leading-tight hover:text-pink-600 dark:hover:text-pink-400 text-gray-900 dark:text-gray-100">{item.title}</h4>
                  </div>
              </div>
          ))}
          
          {/* CTA Block */}
          <div className="bg-yellow-300 border-2 border-black dark:border-pink-500 flex flex-col items-center justify-center p-4 text-center text-black">
              <h4 className="font-black text-xl mb-2 italic">{t.ctaTitle}</h4>
              <p className="text-xs font-bold mb-4">{t.ctaDesc}</p>
              <Button size="sm" className="bg-black text-white hover:bg-gray-800 rounded-none w-full uppercase font-bold">
                  {contentFocus.primaryCTA}
              </Button>
          </div>
      </div>
    </div>
  );
};

export default GossipDenseGridLayout;