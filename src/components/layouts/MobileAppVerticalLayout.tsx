import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const MobileAppVerticalLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
      en: {
          desc: "Experience the future of productivity right in your pocket. Sync across devices, work offline, and collaborate in real-time.",
          loved: "Loved by 1M+ users worldwide",
          tasks: "My Tasks",
          upgrade: "Upgrade to Pro",
          fast: "🚀 Fast!",
          simple: "✨ Simple"
      },
      tw: {
          desc: "在口袋中體驗生產力的未來。跨裝置同步，離線工作，即時協作。",
          loved: "全球百萬用戶喜愛",
          tasks: "我的任務",
          upgrade: "升級專業版",
          fast: "🚀 快速！",
          simple: "✨ 簡單"
      }
  }[language];

  return (
    <div className="bg-blue-600 dark:bg-blue-900 text-white font-sans overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1">
            <h2 className="text-5xl font-bold mb-6 leading-tight">{contentFocus.title}</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                {t.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button className="bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 font-bold px-8 py-4 h-auto flex items-center gap-2 rounded-xl">
                    <span></span> App Store
                </Button>
                <Button className="bg-transparent border border-blue-300 text-white hover:bg-blue-700 dark:hover:bg-blue-800 px-8 py-4 h-auto flex items-center gap-2 rounded-xl">
                    <span>▶</span> Google Play
                </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-blue-200">
                <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-blue-400 border-2 border-blue-600 dark:border-blue-900"></div>
                    ))}
                </div>
                <p>{t.loved}</p>
            </div>
        </div>

        {/* Phone Mockup */}
        <div className="order-1 md:order-2 flex justify-center relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-3xl opacity-50 transform scale-110"></div>
            <div className="relative w-72 h-[550px] bg-gray-900 dark:bg-black rounded-[3rem] border-8 border-gray-900 dark:border-black shadow-2xl z-10 overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 dark:bg-black rounded-b-xl z-20"></div>
                {/* Screen Content */}
                <div className="w-full h-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white overflow-y-auto pt-8 px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-xl">{t.tasks}</h3>
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800 rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="bg-gray-50 dark:bg-slate-800 p-4 rounded-xl shadow-sm flex items-center gap-3">
                                <div className="w-5 h-5 border-2 border-blue-500 rounded-full"></div>
                                <div className="w-full">
                                    <div className="h-2 w-3/4 bg-gray-200 dark:bg-slate-700 rounded mb-2"></div>
                                    <div className="h-2 w-1/2 bg-gray-100 dark:bg-slate-600 rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="mt-8 bg-blue-600 text-white p-4 rounded-xl shadow-lg shadow-blue-200 dark:shadow-none text-center">
                        <p className="font-bold text-sm">{t.upgrade}</p>
                    </div>
                </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute top-20 -right-4 bg-white dark:bg-slate-800 text-blue-900 dark:text-blue-100 p-3 rounded-lg shadow-xl font-bold animate-bounce z-20">
                {t.fast}
            </div>
             <div className="absolute bottom-32 -left-4 bg-white dark:bg-slate-800 text-blue-900 dark:text-blue-100 p-3 rounded-lg shadow-xl font-bold animate-bounce animation-delay-500 z-20">
                {t.simple}
            </div>
        </div>

      </div>
    </div>
  );
};

export default MobileAppVerticalLayout;