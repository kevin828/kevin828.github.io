import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const EnterpriseSalesLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
      en: {
          desc: "Empower your organization with intelligent automation and military-grade security at scale.",
          trusted: "Trusted by Fortune 500 Companies",
          why: "Why Industry Leaders Choose Us",
          reason1Title: "Scalability",
          reason1Desc: "Infrastructure that grows with your needs, handling millions of transactions per second.",
          reason2Title: "Compliance",
          reason2Desc: "SOC2 Type II, GDPR, and HIPAA compliant environments out of the box.",
          quote: "\"Implementing this platform reduced our operational overhead by 40% within the first quarter. It's not just software; it's a competitive advantage.\"",
          partners: "Strategic Technology Partners"
      },
      tw: {
          desc: "以大規模的智能自動化和軍規級安全性賦能您的組織。",
          trusted: "受財富 500 強企業信賴",
          why: "為何業界領袖選擇我們",
          reason1Title: "可擴展性",
          reason1Desc: "隨您的需求增長的基礎設施，每秒處理數百萬筆交易。",
          reason2Title: "合規性",
          reason2Desc: "開箱即用的 SOC2 Type II、GDPR 和 HIPAA 合規環境。",
          quote: "「導入此平台後，我們的營運成本在第一季降低了 40%。這不僅僅是軟體；這是競爭優勢。」",
          partners: "策略技術合作夥伴"
      }
  }[language];

  return (
    <div className="bg-gray-100 dark:bg-slate-900 font-serif text-gray-900 dark:text-white transition-colors duration-300">
      <div className="bg-slate-900 dark:bg-black text-white py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">{contentFocus.title}</h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            {t.desc}
        </p>
        <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-200 px-10 font-sans font-bold">
            {contentFocus.primaryCTA}
        </Button>
      </div>

      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 py-8">
          <p className="text-center text-xs font-sans uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">{t.trusted}</p>
          <div className="flex justify-center gap-12 flex-wrap px-6 opacity-60 grayscale">
              {['Acme Corp', 'Globex', 'Soylent', 'Initech', 'Umbrella'].map(logo => (
                  <span key={logo} className="text-xl font-bold font-sans text-gray-400 dark:text-gray-500">{logo}</span>
              ))}
          </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
              <h3 className="text-3xl font-bold mb-6">{t.why}</h3>
              <ul className="space-y-6">
                  <li className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center font-bold text-slate-700 dark:text-slate-300">01</div>
                      <div>
                          <h4 className="font-bold text-lg">{t.reason1Title}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{t.reason1Desc}</p>
                      </div>
                  </li>
                  <li className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center font-bold text-slate-700 dark:text-slate-300">02</div>
                      <div>
                          <h4 className="font-bold text-lg">{t.reason2Title}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{t.reason2Desc}</p>
                      </div>
                  </li>
              </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 shadow-xl rounded-lg border-l-4 border-slate-900 dark:border-slate-500">
              <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                  {t.quote}
              </p>
              <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  <div>
                      <p className="font-bold font-sans">Elena Fisher</p>
                      <p className="text-sm text-gray-500 font-sans">CTO, Global Dynamics</p>
                  </div>
              </div>
          </div>
      </div>

      <div className="py-16 bg-gray-50 dark:bg-slate-950/50 border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h4 className="text-sm font-bold font-sans uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-10">{t.partners}</h4>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                 {['Partner A', 'Partner B', 'Partner C', 'Partner D'].map((name, i) => (
                    <div key={i} className="group flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="w-10 h-10 bg-slate-300 dark:bg-slate-700 rounded-md group-hover:bg-slate-400 dark:group-hover:bg-slate-600 transition-colors"></div>
                        <span className="font-sans font-bold text-xl text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                           LOGO
                        </span>
                    </div>
                 ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSalesLayout;