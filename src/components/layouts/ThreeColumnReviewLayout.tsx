import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const ThreeColumnReviewLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
      en: {
          ticker: "LATEST: Q3 Earnings Reports Exceed Expectations",
          tag: "Market Analysis",
          headlineSuffix: ": The Future of Fintech",
          meta: "By J. Analyst • 12 Min Read • Oct 24, 2023",
          intro: "The convergence of traditional banking and decentralized finance is creating a new paradigm for asset management. Early adopters are seeing significant yield improvements, but regulatory hurdles remain a primary concern.",
          quote: "\"Volatility is not risk. It's the price of admission for high performance.\"",
          body: "We analyzed over 500 data points from Q1 to Q3. The trend lines suggest a bullish breakout for infrastructure tokens, while consumer-facing apps may face headwinds.",
          chartTitle: "Growth Projection (YoY)",
          premiumTitle: "Premium Insights",
          premiumDesc: "Get our full 50-page report delivered to your inbox.",
          trending: "Trending Now",
          trendItem: "AI-Driven HFT Algorithms gain market share",
          ad: "ADVERTISEMENT"
      },
      tw: {
          ticker: "最新消息：Q3 財報超出預期",
          tag: "市場分析",
          headlineSuffix: ": 金融科技的未來",
          meta: "分析師 J. • 12 分鐘閱讀 • 2023年10月24日",
          intro: "傳統銀行與去中心化金融的融合正在創造資產管理的新典範。早期採用者見證了顯著的收益提升，但監管障礙仍是主要擔憂。",
          quote: "「波動不是風險，而是高效能的入場費。」",
          body: "我們分析了 Q1 至 Q3 的 500 多個數據點。趨勢線顯示基礎設施代幣將迎來看漲突破，而面向消費者的應用可能面臨逆風。",
          chartTitle: "成長預測 (YoY)",
          premiumTitle: "高階洞察",
          premiumDesc: "獲取完整50頁報告。",
          trending: "熱門趨勢",
          trendItem: "AI 驅動的高頻演算法搶佔市場份額",
          ad: "廣告"
      }
  }[language];

  return (
    <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-sans transition-colors duration-300">
      {/* Top Bar / Ticker */}
      <div className="bg-emerald-900 text-white text-xs py-2 px-4 flex justify-between overflow-hidden whitespace-nowrap">
        <span className="font-mono">NASDAQ: +1.2%  •  S&P 500: +0.8%  •  BTC: +2.5%</span>
        <span className="hidden md:inline">{t.ticker}</span>
      </div>

      <div className="max-w-7xl mx-auto p-6 grid lg:grid-cols-12 gap-8">
        
        {/* Main Content (8 cols) */}
        <div className="lg:col-span-8">
            <span className="text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider text-xs">{t.tag}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 leading-tight">{contentFocus.title}{t.headlineSuffix}</h2>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6 border-b border-gray-100 dark:border-gray-800 pb-6">
                <span>{t.meta}</span>
            </div>

            <p className="text-lg leading-relaxed mb-6">
                {t.intro}
            </p>

            <div className="my-8 border-l-4 border-emerald-600 pl-6 italic text-xl text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-slate-800 py-4">
                {t.quote}
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {t.body}
            </p>

            {/* Chart Placeholder */}
            <div className="bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-6 rounded mb-8">
                <h4 className="font-bold text-sm text-gray-500 dark:text-gray-400 mb-4 uppercase">{t.chartTitle}</h4>
                <div className="flex items-end gap-2 h-40">
                    <div className="w-full bg-emerald-200 dark:bg-emerald-800 h-[40%] hover:bg-emerald-500 transition-colors"></div>
                    <div className="w-full bg-emerald-200 dark:bg-emerald-800 h-[55%] hover:bg-emerald-500 transition-colors"></div>
                    <div className="w-full bg-emerald-200 dark:bg-emerald-800 h-[45%] hover:bg-emerald-500 transition-colors"></div>
                    <div className="w-full bg-emerald-200 dark:bg-emerald-800 h-[70%] hover:bg-emerald-500 transition-colors"></div>
                    <div className="w-full bg-emerald-200 dark:bg-emerald-800 h-[85%] hover:bg-emerald-500 transition-colors relative group">
                         <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                             +85%
                         </div>
                    </div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-2">
                    <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span><span>Proj</span>
                </div>
            </div>
        </div>

        {/* Sidebar (4 cols) */}
        {contentFocus.hasSidebar && (
            <div className="lg:col-span-4 space-y-8">
                {/* CTA Box */}
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded border border-emerald-100 dark:border-emerald-800">
                    <h3 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">{t.premiumTitle}</h3>
                    <p className="text-sm text-emerald-800 dark:text-emerald-200 mb-4">{t.premiumDesc}</p>
                    <Button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white">
                        {contentFocus.primaryCTA}
                    </Button>
                </div>

                {/* Top Stories */}
                <div>
                    <h3 className="font-bold border-b-2 border-black dark:border-white mb-4 pb-1">{t.trending}</h3>
                    <ul className="space-y-4">
                        {[1, 2, 3, 4].map(i => (
                            <li key={i} className="group cursor-pointer">
                                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs mr-2">0{i}</span>
                                <span className="text-sm font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-300 hover:underline">
                                    {t.trendItem}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Ad Placeholder */}
                <div className="bg-gray-100 dark:bg-slate-800 h-64 flex items-center justify-center text-gray-400 text-xs tracking-widest border border-dashed border-gray-300 dark:border-slate-600">
                    {t.ad}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default ThreeColumnReviewLayout;