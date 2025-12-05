import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const StructuredCaseStudyLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
      en: {
          tag: "Case Study: FinApp v2.0",
          desc: "Redefining the banking experience through empathy-driven research and iterative prototyping. Focused on accessibility and rapid transaction flow.",
          tags: ["Figma", "Protopie", "User Testing"],
          readBtn: "Read Full Study",
          problem: "The Problem",
          problemDesc: "Users found the legacy transfer system confusing, resulting in a 40% drop-off rate at the final confirmation step.",
          solution: "The Solution",
          solutionDesc: "A simplified 3-step wizard with real-time validation and biometric confirmation reduced drop-off to under 5%.",
          wireframes: "Low-Fidelity Iterations",
          wfLabel: "Wireframe",
          wfTitles: ["Authentication", "Dashboard", "User Profile"],
          viewDetail: "View Details"
      },
      tw: {
          tag: "案例研究: FinApp v2.0",
          desc: "透過同理心研究與迭代原型，重新定義銀行體驗。專注於無障礙設計與快速交易流程。",
          tags: ["Figma", "Protopie", "使用者測試"],
          readBtn: "閱讀完整研究",
          problem: "問題",
          problemDesc: "使用者發現舊版轉帳系統令人困惑，導致最後確認步驟的流失率高達 40%。",
          solution: "解決方案",
          solutionDesc: "簡化的三步驟精靈，搭配即時驗證與生物辨識確認，將流失率降至 5% 以下。",
          wireframes: "低保真迭代",
          wfLabel: "線框圖",
          wfTitles: ["身分驗證", "儀表板", "使用者設定"],
          viewDetail: "查看詳情"
      }
  }[language];

  return (
    <div className="max-w-5xl mx-auto py-12 px-6 bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="grid md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-5 flex flex-col justify-center">
            <div className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-xs mb-4 uppercase">{t.tag}</div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {contentFocus.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            {t.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
                {t.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs">{tag}</span>
                ))}
                {contentFocus.metadataPriority.map((meta, i) => (
                    <span key={`meta-${i}`} className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium border border-indigo-100 dark:border-indigo-800">{meta}</span>
                ))}
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700 w-fit">{t.readBtn}</Button>
        </div>
        <div className="md:col-span-7 bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
             {/* Mockup Representation */}
             <div className="relative w-64 h-[500px] bg-white dark:bg-slate-900 border-8 border-gray-800 dark:border-slate-700 rounded-[3rem] shadow-2xl overflow-hidden z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="https://picsum.photos/300/600?random=ui" className="w-full h-full object-cover" alt="App Screen" />
             </div>
             {contentFocus.useMockups && (
                 <div className="absolute -right-10 top-20 w-40 h-80 bg-gray-200 dark:bg-slate-700 rounded-[2rem] opacity-50 transform rotate-12 -z-0"></div>
             )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 dark:border-slate-700 rounded-xl p-8 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800">
              <h3 className="font-bold text-xl mb-4 text-gray-800 dark:text-gray-100">{t.problem}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{t.problemDesc}</p>
          </div>
          <div className="border border-gray-200 dark:border-slate-700 rounded-xl p-8 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800">
              <h3 className="font-bold text-xl mb-4 text-gray-800 dark:text-gray-100">{t.solution}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{t.solutionDesc}</p>
          </div>
      </div>
      
      {contentFocus.displayWireframes && (
          <div className="mt-16">
              <h3 className="text-center font-bold text-2xl mb-8 text-gray-900 dark:text-white">{t.wireframes}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="aspect-[9/16] bg-white dark:bg-slate-900 border-2 border-dashed border-gray-300 dark:border-slate-700 rounded-xl p-4 flex flex-col gap-3 relative group hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors cursor-pointer overflow-hidden max-w-xs mx-auto md:max-w-none w-full">
                        
                        {/* Variation 1: Login / Auth */}
                        {i === 1 && (
                            <>
                                <div className="h-4 bg-gray-100 dark:bg-slate-800 rounded w-1/3 mb-4 mx-auto"></div>
                                <div className="h-24 bg-gray-50 dark:bg-slate-800 rounded-full w-24 mx-auto border-2 border-gray-100 dark:border-slate-700 mb-6 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-gray-200 dark:bg-slate-600 rounded-full opacity-50"></div>
                                </div>
                                <div className="space-y-3 mt-4">
                                    <div className="h-10 bg-gray-100 dark:bg-slate-800 rounded w-full"></div>
                                    <div className="h-10 bg-gray-100 dark:bg-slate-800 rounded w-full"></div>
                                </div>
                                <div className="mt-auto">
                                    <div className="h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded w-full"></div>
                                </div>
                            </>
                        )}

                        {/* Variation 2: Dashboard / List View */}
                        {i === 2 && (
                            <>
                                <div className="flex justify-between items-center mb-2">
                                    <div className="h-4 bg-gray-100 dark:bg-slate-800 rounded w-8"></div>
                                    <div className="h-6 bg-gray-100 dark:bg-slate-800 rounded-full w-6"></div>
                                </div>
                                <div className="flex gap-2 overflow-hidden mb-4">
                                    {[1,2,3,4].map(c => <div key={c} className="h-12 w-12 rounded-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shrink-0"></div>)}
                                </div>
                                <div className="space-y-3 overflow-hidden">
                                    {[1,2,3].map(r => (
                                        <div key={r} className="flex gap-3 items-center">
                                            <div className="h-10 w-10 rounded bg-gray-100 dark:bg-slate-800 shrink-0"></div>
                                            <div className="flex-1 space-y-1">
                                                <div className="h-2 bg-gray-100 dark:bg-slate-800 w-3/4 rounded"></div>
                                                <div className="h-2 bg-gray-50 dark:bg-slate-800 w-1/2 rounded"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-auto h-12 bg-gray-50 dark:bg-slate-800 rounded-t-lg mx-[-1rem] mb-[-1rem] border-t border-gray-100 dark:border-slate-700"></div>
                            </>
                        )}

                        {/* Variation 3: Profile / Settings */}
                        {i === 3 && (
                            <>
                                <div className="h-24 bg-gray-50 dark:bg-slate-800 rounded-lg -mx-4 -mt-4 mb-8 relative">
                                    <div className="absolute -bottom-6 left-4 h-16 w-16 rounded-full bg-white dark:bg-slate-900 border-4 border-white dark:border-slate-900 flex items-center justify-center">
                                        <div className="h-full w-full bg-gray-200 dark:bg-slate-700 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="ml-auto w-1/2 h-8 bg-indigo-50 dark:bg-indigo-900/20 rounded mb-4"></div>
                                <div className="space-y-2 mt-2">
                                    <div className="h-3 bg-gray-100 dark:bg-slate-800 w-1/3 rounded mb-4"></div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="aspect-square bg-gray-50 dark:bg-slate-800 rounded"></div>
                                        <div className="aspect-square bg-gray-50 dark:bg-slate-800 rounded"></div>
                                        <div className="aspect-square bg-gray-50 dark:bg-slate-800 rounded"></div>
                                        <div className="aspect-square bg-gray-50 dark:bg-slate-800 rounded"></div>
                                    </div>
                                </div>
                            </>
                        )}
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm gap-3 transform scale-95 group-hover:scale-100">
                             <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full text-indigo-600 dark:text-indigo-400 mb-1 shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                             </div>
                             <div className="text-center">
                                <span className="block font-bold text-gray-900 dark:text-white text-lg mb-1">
                                    {t.wfTitles[i-1]}
                                </span>
                                <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium uppercase tracking-wider border border-indigo-200 dark:border-indigo-800 px-2 py-1 rounded-md">
                                    {t.viewDetail}
                                </span>
                             </div>
                        </div>
                    </div>
                  ))}
              </div>
          </div>
      )}
    </div>
  );
};

export default StructuredCaseStudyLayout;