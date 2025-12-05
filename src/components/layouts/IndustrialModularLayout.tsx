import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const IndustrialModularLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
      en: {
          cert: "ISO 9001 Certified • Heavy Industry Solutions",
          flowTitle: "Production Process Flow",
          steps: ['Raw Material', 'Fabrication', 'Assembly', 'QC Check', 'Logistics'],
          tags: ["CNC Machining", "Robotic Welding"],
          capTitle: "Capabilities",
          specs: [
            { k: 'Max Diameter', v: '4000mm' },
            { k: 'Tolerance', v: '±0.005mm' },
            { k: 'Material', v: 'Titanium' },
            { k: 'Lead Time', v: '2-4 Weeks' }
          ]
      },
      tw: {
          cert: "ISO 9001 認證 • 重工業解決方案",
          flowTitle: "生產流程圖",
          steps: ['原料', '製造', '組裝', '品管', '物流'],
          tags: ["CNC 加工", "機器人焊接"],
          capTitle: "產能規格",
          specs: [
            { k: '最大直徑', v: '4000mm' },
            { k: '公差', v: '±0.005mm' },
            { k: '材質', v: '鈦合金' },
            { k: '交期', v: '2-4 週' }
          ]
      }
  }[language];

  return (
    <div className="bg-gray-200 dark:bg-slate-800 p-6 md:p-12 font-sans text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b-4 border-orange-500 pb-4">
            <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-gray-900 dark:text-white">{contentFocus.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 font-bold mt-1">{t.cert}</p>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-none px-8">
                {contentFocus.primaryCTA}
            </Button>
        </div>

        {contentFocus.showFlowCharts && (
            <div className="bg-white dark:bg-slate-900 p-8 shadow-sm mb-8">
                <h3 className="text-lg font-bold text-gray-500 dark:text-gray-400 uppercase mb-6">{t.flowTitle}</h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {t.steps.map((step, idx) => (
                        <React.Fragment key={step}>
                            <div className="bg-gray-100 dark:bg-slate-700 border-2 border-gray-300 dark:border-slate-600 p-4 w-full md:w-32 text-center font-bold text-sm hover:border-orange-500 transition-colors">
                                {step}
                            </div>
                            {idx < 4 && (
                                <div className="hidden md:block text-gray-400 text-xl font-bold">→</div>
                            )}
                             {idx < 4 && (
                                <div className="md:hidden text-gray-400 text-xl font-bold">↓</div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
            <div className="col-span-2 grid grid-cols-2 gap-6">
                <div className="relative group overflow-hidden bg-gray-900 dark:bg-black h-48">
                    <img src="https://picsum.photos/400/300?random=factory1" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform" alt="Factory" />
                    <div className="absolute bottom-0 left-0 bg-orange-600 text-white text-xs font-bold px-3 py-1">{t.tags[0]}</div>
                </div>
                 <div className="relative group overflow-hidden bg-gray-900 dark:bg-black h-48">
                    <img src="https://picsum.photos/400/300?random=factory2" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform" alt="Factory" />
                    <div className="absolute bottom-0 left-0 bg-orange-600 text-white text-xs font-bold px-3 py-1">{t.tags[1]}</div>
                </div>
            </div>
            
            <div className="bg-gray-800 dark:bg-slate-900 text-gray-100 p-6">
                <h4 className="font-bold text-orange-500 mb-4 uppercase">{t.capTitle}</h4>
                <ul className="space-y-2 text-sm font-mono">
                    {t.specs.map((s, i) => (
                        <li key={i} className="flex justify-between border-b border-gray-700 dark:border-gray-600 pb-1">
                            <span>{s.k}</span>
                            <span>{s.v}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialModularLayout;