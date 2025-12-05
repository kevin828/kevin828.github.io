import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const StructuredRecipeLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
      en: {
          time: "45 Mins",
          diff: "Intermediate",
          ingTitle: "Ingredients",
          ingredients: ["2 cups All-Purpose Flour", "1/2 cup Unsalted Butter (cold)", "1 tsp Vanilla Extract", "3 Large Eggs", "1 cup Granulated Sugar"],
          instrTitle: "Instructions",
          step: "Step",
          stepDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pre-heat oven to 350°F.",
          tipTitle: "Chef's Tip",
          tip: "\"Ensure butter is strictly cold to achieve the flakiest texture possible.\""
      },
      tw: {
          time: "45 分鐘",
          diff: "中級",
          ingTitle: "食材",
          ingredients: ["2 杯中筋麵粉", "1/2 杯無鹽奶油 (冷)", "1 茶匙香草精", "3 顆大雞蛋", "1 杯砂糖"],
          instrTitle: "步驟說明",
          step: "步驟",
          stepDesc: "Lorem ipsum dolor sit amet... (預熱烤箱至 350°F)。",
          tipTitle: "主廚秘訣",
          tip: "「確保奶油保持冰冷以達到最酥脆的口感。」"
      }
  }[language];

  return (
    <div className="bg-yellow-50 dark:bg-yellow-950/20 font-serif text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 shadow-xl min-h-[800px] my-8 md:my-12 relative">
          
          {/* Header Image */}
          <div className="h-64 md:h-80 w-full relative">
              <img src="https://picsum.photos/1200/600?random=baking" alt="Recipe" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h2 className="text-4xl md:text-5xl font-bold mb-2">{contentFocus.title}</h2>
                  <div className="flex gap-4 text-sm font-sans">
                      <span className="bg-yellow-500 px-2 py-1 rounded text-black font-bold">{t.time}</span>
                      <span className="bg-yellow-500 px-2 py-1 rounded text-black font-bold">{t.diff}</span>
                  </div>
              </div>
          </div>

          <div className="p-8 md:p-12 grid md:grid-cols-3 gap-12">
              {/* Ingredients Sidebar */}
              <div className="md:col-span-1 border-r border-dashed border-gray-300 dark:border-gray-700 pr-8">
                  <h3 className="font-bold text-xl mb-6 uppercase tracking-widest text-orange-600 dark:text-orange-400">{t.ingTitle}</h3>
                  <ul className="space-y-3 font-sans text-sm">
                      {t.ingredients.map((ing, i) => (
                          <li key={i} className="flex items-center gap-3 pb-3 border-b border-gray-100 dark:border-gray-800">
                              <input type="checkbox" className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500 border-gray-300 dark:border-gray-600 dark:bg-slate-700" />
                              <span className="text-gray-700 dark:text-gray-300">{ing}</span>
                          </li>
                      ))}
                  </ul>
                  {contentFocus.printableLayout && (
                      <div className="mt-8">
                          <Button variant="outline" className="w-full border-orange-400 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-900/20">
                              🖨️ {contentFocus.primaryCTA}
                          </Button>
                      </div>
                  )}
              </div>

              {/* Instructions Main */}
              <div className="md:col-span-2">
                  <h3 className="font-bold text-xl mb-6 uppercase tracking-widest text-orange-600 dark:text-orange-400">{t.instrTitle}</h3>
                  <div className="space-y-8">
                      {[1, 2, 3].map((step) => (
                          <div key={step} className="flex gap-4">
                              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 rounded-full flex items-center justify-center font-bold font-sans">
                                  {step}
                              </div>
                              <div>
                                  <h4 className="font-bold mb-2 text-lg">{t.step} {step}</h4>
                                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                      {t.stepDesc}
                                  </p>
                              </div>
                          </div>
                      ))}
                  </div>

                  <div className="mt-12 bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">{t.tipTitle}</h4>
                      <p className="text-sm text-orange-700 dark:text-orange-300 italic">{t.tip}</p>
                  </div>
              </div>
          </div>

      </div>
    </div>
  );
};

export default StructuredRecipeLayout;