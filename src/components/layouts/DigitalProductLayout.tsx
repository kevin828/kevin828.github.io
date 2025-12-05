import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const DigitalProductLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
      en: {
          tag: "Masterclass",
          stats: ["⭐️ 4.9 (1,204 ratings)", "👨‍💻 15,000 students", "Last updated: Oct 2023"],
          preview: "Preview: Course Intro",
          payment: "One-time payment",
          curriculum: "Course Curriculum",
          unit: "Module",
          topic: "Advanced Concepts"
      },
      tw: {
          tag: "大師班",
          stats: ["⭐️ 4.9 (1,204 評價)", "👨‍💻 15,000 學生", "最後更新: 2023年10月"],
          preview: "預覽：課程介紹",
          payment: "一次性付款",
          curriculum: "課程大綱",
          unit: "單元",
          topic: "進階概念"
      }
  }[language];

  return (
    <div className="bg-indigo-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="bg-indigo-900 dark:bg-indigo-950 text-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
              <span className="bg-indigo-700 dark:bg-indigo-800 text-indigo-100 dark:text-indigo-200 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">{t.tag}</span>
              <h2 className="text-4xl font-bold mt-4 mb-6">{contentFocus.title}</h2>
              <div className="flex items-center gap-6 text-sm text-indigo-200 dark:text-indigo-300">
                  <span>{t.stats[0]}</span>
                  <span>{t.stats[1]}</span>
                  <span>{t.stats[2]}</span>
              </div>
          </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-8">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden border border-indigo-100 dark:border-slate-800">
              {contentFocus.showPlayer && (
                  <div className="aspect-video bg-black flex items-center justify-center relative group cursor-pointer">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                      </div>
                      <p className="absolute bottom-4 left-4 text-white font-medium">{t.preview}</p>
                  </div>
              )}
              
              <div className="p-8">
                  <div className="flex justify-between items-center mb-8 pb-8 border-b border-gray-100 dark:border-slate-800">
                      <div>
                          <p className="text-3xl font-bold text-gray-900 dark:text-white">$99.00</p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">{t.payment}</p>
                      </div>
                      <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
                          {contentFocus.primaryCTA}
                      </Button>
                  </div>

                  <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-4">{t.curriculum}</h3>
                  <div className="space-y-2">
                      {[1, 2, 3, 4].map((unit) => (
                          <div key={unit} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800 rounded hover:bg-indigo-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                              <div className="flex items-center gap-3">
                                  <div className="w-6 h-6 rounded-full border border-indigo-300 flex items-center justify-center text-xs text-indigo-600 font-bold">{unit}</div>
                                  <span className="font-medium text-gray-700 dark:text-gray-200">{t.unit} {unit}: {t.topic}</span>
                              </div>
                              <span className="text-gray-400 dark:text-gray-500 text-sm">15:00</span>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default DigitalProductLayout;