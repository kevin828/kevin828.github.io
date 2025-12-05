import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const SubscriptionLandingLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
      en: {
          tag: "Monthly Goodness",
          desc: "Curated boxes delivered to your doorstep. Choose the plan that fits your lifestyle.",
          plans: [
              { name: "Starter Box", price: "$29", features: ["✓ 3 Premium Items", "✓ Free Shipping", "✗ Customization"], btn: "Select Starter" },
              { name: "Curator's Choice", price: "$59", features: ["✓ 7 Premium Items", "✓ Priority Shipping", "✓ Full Customization"], btn: null, tag: "BEST VALUE" },
              { name: "Luxe Collection", price: "$99", features: ["✓ 12+ Luxury Items", "✓ Mystery Gifts", "✓ VIP Support"], btn: "Select Luxe" }
          ],
          perMo: "/mo"
      },
      tw: {
          tag: "每月精選",
          desc: "精選禮盒直送到府。選擇適合您生活方式的方案。",
          plans: [
              { name: "入門禮盒", price: "$29", features: ["✓ 3 樣精選商品", "✓ 免運費", "✗ 客製化"], btn: "選擇入門" },
              { name: "策展人精選", price: "$59", features: ["✓ 7 樣精選商品", "✓ 優先配送", "✓ 完全客製化"], btn: null, tag: "超值首選" },
              { name: "奢華系列", price: "$99", features: ["✓ 12+ 樣奢華商品", "✓ 神秘禮物", "✓ VIP 支援"], btn: "選擇奢華" }
          ],
          perMo: "/月"
      }
  }[language];

  return (
    <div className="bg-yellow-50 dark:bg-yellow-950/30 py-12 px-6 transition-colors duration-300">
      <div className="text-center mb-12">
        <span className="text-yellow-600 dark:text-yellow-500 font-bold tracking-wider uppercase text-sm">{t.tag}</span>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">{contentFocus.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          {t.desc}
        </p>
      </div>

      {contentFocus.showPlanComparison && (
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-center">
            {/* Basic Plan */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-slate-700 opacity-80 hover:opacity-100 transition-opacity">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{t.plans[0].name}</h3>
                <div className="text-3xl font-bold my-4 text-gray-900 dark:text-white">{t.plans[0].price}<span className="text-sm font-normal text-gray-500 dark:text-gray-400">{t.perMo}</span></div>
                <ul className="space-y-3 mb-6 text-sm text-gray-600 dark:text-gray-300">
                    {t.plans[0].features.map((f,i) => <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">{f}</li>)}
                </ul>
                <Button variant="outline" className="w-full">{t.plans[0].btn}</Button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8 border-2 border-yellow-400 relative transform scale-105 z-10">
                <div className="absolute top-0 right-0 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">{t.plans[1].tag}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t.plans[1].name}</h3>
                <div className="text-4xl font-bold my-4 text-gray-900 dark:text-white">{t.plans[1].price}<span className="text-sm font-normal text-gray-500 dark:text-gray-400">{t.perMo}</span></div>
                <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                    {t.plans[1].features.map((f,i) => <li key={i} className="flex items-center"><span className="text-green-500 mr-2">✓</span> {f.replace('✓', '')}</li>)}
                </ul>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold">{contentFocus.primaryCTA}</Button>
            </div>

            {/* Ultimate Plan */}
             <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-slate-700 opacity-80 hover:opacity-100 transition-opacity">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{t.plans[2].name}</h3>
                <div className="text-3xl font-bold my-4 text-gray-900 dark:text-white">{t.plans[2].price}<span className="text-sm font-normal text-gray-500 dark:text-gray-400">{t.perMo}</span></div>
                <ul className="space-y-3 mb-6 text-sm text-gray-600 dark:text-gray-300">
                     {t.plans[2].features.map((f,i) => <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">{f}</li>)}
                </ul>
                <Button variant="outline" className="w-full">{t.plans[2].btn}</Button>
            </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionLandingLayout;