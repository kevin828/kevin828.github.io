import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const AcademicMinimalLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
      en: {
          journal: "Journal of Modern Strategy • Vol. 32, No. 4 • 2024",
          dept: "Department of User Experience Engineering",
          absTitle: "Abstract",
          absBody: "This study explores the efficacy of adaptive layout engines in enhancing user engagement across diverse content domains. By utilizing a dynamic component rendering system, we demonstrate a statistically significant increase in session duration and conversion rates. The findings suggest that architectural flexibility is superior to static design patterns in modern web applications.",
          kwTitle: "Keywords:",
          kwBody: "React, TypeScript, Dynamic Rendering, UX Strategy, Component Architecture",
          cite: "Cite this Article"
      },
      tw: {
          journal: "現代策略期刊 • 第32卷, 第4期 • 2024",
          dept: "使用者體驗工程系",
          absTitle: "摘要",
          absBody: "本研究探討自適應佈局引擎在提升跨領域內容使用者參與度的效能。透過使用動態元件渲染系統，我們證明了會話持續時間和轉換率有統計顯著的增加。研究結果顯示，在現代網路應用中，架構靈活性優於靜態設計模式。",
          kwTitle: "關鍵字:",
          kwBody: "React, TypeScript, 動態渲染, UX 策略, 元件架構",
          cite: "引用此文章"
      }
  }[language];

  return (
    <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 font-serif py-16 px-6 md:px-20 transition-colors duration-300">
      <div className={`max-w-3xl mx-auto ${contentFocus.centerContent ? 'text-center' : 'text-left'}`}>
        
        {/* Header Metadata */}
        <div className="text-gray-500 dark:text-gray-400 text-sm font-sans mb-8 tracking-wide uppercase border-b border-gray-200 dark:border-gray-700 pb-8">
            <p>{t.journal}</p>
        </div>

        {/* Title & Author */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100 leading-tight">
            {contentFocus.title}
        </h2>
        <div className="mb-12 text-lg text-slate-700 dark:text-slate-300 italic">
            <p>Hsieh, K., et al.</p>
            <p className="text-sm not-italic text-gray-500 dark:text-gray-400 mt-1">{t.dept}</p>
        </div>

        {/* Abstract */}
        <div className="text-left mb-12">
            <h3 className="text-sm font-bold uppercase font-sans text-slate-900 dark:text-slate-100 mb-4 tracking-wider">{t.absTitle}</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-8 text-lg">
                {t.absBody}
            </p>
        </div>

        {/* Keywords */}
        <div className="text-left mb-16 font-sans text-sm">
            <span className="font-bold mr-2">{t.kwTitle}</span>
            <span className="text-gray-600 dark:text-gray-400">{t.kwBody}</span>
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center border-t border-gray-200 dark:border-gray-700 pt-12">
            <Button size="lg" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-gray-200 font-sans min-w-[200px]">
                {contentFocus.primaryCTA} (2.4MB)
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-sans min-w-[200px]">
                {t.cite}
            </Button>
        </div>
      </div>
    </div>
  );
};

export default AcademicMinimalLayout;