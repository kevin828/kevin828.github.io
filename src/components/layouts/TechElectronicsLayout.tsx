import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const TechElectronicsLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
      en: {
          model: "Model: XG-9000 // Series: Pro",
          perf: "Performance",
          batt: "Battery",
          specs: "Technical Specifications",
          colFeature: "Feature",
          colStd: "Standard",
          rows: [
              { feat: 'Processor', val: 'Octa-Core 3.2GHz', std: 'Quad-Core 2.0GHz' },
              { feat: 'Memory', val: '32GB LPDDR5', std: '8GB DDR4' },
              { feat: 'Storage', val: '2TB NVMe SSD', std: '512GB SSD' },
              { feat: 'Display', val: '4K OLED 120Hz', std: '1080p IPS 60Hz' },
          ]
      },
      tw: {
          model: "型號: XG-9000 // 系列: Pro",
          perf: "效能表現",
          batt: "電池續航",
          specs: "技術規格",
          colFeature: "功能",
          colStd: "標準版",
          rows: [
              { feat: '處理器', val: '八核心 3.2GHz', std: '四核心 2.0GHz' },
              { feat: '記憶體', val: '32GB LPDDR5', std: '8GB DDR4' },
              { feat: '儲存空間', val: '2TB NVMe SSD', std: '512GB SSD' },
              { feat: '螢幕', val: '4K OLED 120Hz', std: '1080p IPS 60Hz' },
          ]
      }
  }[language];

  return (
    <div className="bg-gray-100 dark:bg-slate-900 p-8 font-mono text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-6xl mx-auto bg-white dark:bg-slate-800 shadow-sm border border-gray-200 dark:border-slate-700 p-8 rounded-lg">
        
        {/* Header */}
        <div className="border-b border-gray-200 dark:border-slate-700 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
                <h2 className="text-2xl font-bold uppercase tracking-tighter text-gray-900 dark:text-white">{contentFocus.title}</h2>
                <span className="text-xs text-cyan-600 dark:text-cyan-400">{t.model}</span>
            </div>
            <div className="mt-4 md:mt-0">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-mono text-sm">
                    {contentFocus.primaryCTA}
                </Button>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image & Specs */}
            <div>
                <div className="bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded p-8 mb-6 flex items-center justify-center">
                    <img src="https://picsum.photos/500/300?random=tech" alt="Tech Product" className="mix-blend-multiply dark:mix-blend-normal" />
                </div>
                {contentFocus.displayCharts && (
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="w-24 text-xs font-bold">{t.perf}</span>
                            <div className="flex-grow bg-gray-200 dark:bg-slate-600 h-2 rounded-full overflow-hidden">
                                <div className="bg-cyan-500 h-full w-[90%]"></div>
                            </div>
                            <span className="text-xs">90%</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-24 text-xs font-bold">{t.batt}</span>
                            <div className="flex-grow bg-gray-200 dark:bg-slate-600 h-2 rounded-full overflow-hidden">
                                <div className="bg-cyan-500 h-full w-[75%]"></div>
                            </div>
                            <span className="text-xs">75%</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Comparison Table */}
            <div>
                <h3 className="text-lg font-bold mb-4 border-l-4 border-cyan-500 pl-3">{t.specs}</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-gray-50 dark:bg-slate-700">
                            <tr>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{t.colFeature}</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">XG-9000</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">{t.colStd}</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-800 divide-y divide-gray-200 dark:divide-slate-700">
                            {t.rows.map((row, i) => (
                                <tr key={i}>
                                    <td className="px-4 py-2 font-medium text-gray-900 dark:text-gray-200">{row.feat}</td>
                                    <td className="px-4 py-2 text-cyan-700 dark:text-cyan-400 font-bold">{row.val}</td>
                                    <td className="px-4 py-2 text-gray-400 dark:text-gray-500">{row.std}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default TechElectronicsLayout;