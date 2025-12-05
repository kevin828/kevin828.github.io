import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const StandardDividedLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const content = {
      en: {
        projects: [
            { title: "Algorithmic Trading Bot", stack: "Python, Docker, AWS", desc: "High-frequency trading system with < 5ms latency." },
            { title: "Distributed File System", stack: "Go, gRPC, Raft", desc: "Fault-tolerant storage solution handling PB-scale data." },
            { title: "Real-time Analytics Engine", stack: "Rust, Kafka, ClickHouse", desc: "Processing 1M+ events per second." }
        ],
        archTitle: "Architecture Overview",
        archDesc: "Microservices architecture utilizing event-driven patterns for maximum scalability and decoupling.",
        archList: ["CI/CD Pipeline: GitHub Actions", "Infrastructure: Terraform", "Monitoring: Prometheus + Grafana"],
        logicComment: "logic"
      },
      tw: {
        projects: [
            { title: "演算法交易機器人", stack: "Python, Docker, AWS", desc: "延遲低於 5ms 的高頻交易系統。" },
            { title: "分散式檔案系統", stack: "Go, gRPC, Raft", desc: "處理 PB 級數據的容錯儲存解決方案。" },
            { title: "即時分析引擎", stack: "Rust, Kafka, ClickHouse", desc: "每秒處理超過 100 萬個事件。" }
        ],
        archTitle: "架構總覽",
        archDesc: "採用事件驅動模式的微服務架構，實現最大擴展性與解耦。",
        archList: ["CI/CD 流程: GitHub Actions", "基礎設施: Terraform", "監控: Prometheus + Grafana"],
        logicComment: "邏輯"
      }
  };

  const t = content[language];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="border-b-2 border-slate-200 dark:border-slate-700 pb-6 mb-10">
        <h2 className="text-3xl font-mono font-bold text-slate-800 dark:text-slate-100">
          <span className="text-blue-600 dark:text-blue-400">&gt;</span> {contentFocus.title}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          {t.projects.map((p, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded shadow-sm hover:border-blue-400 dark:hover:border-blue-400 transition-colors">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{p.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{p.desc}</p>
              <div className="flex gap-3 mb-4">
                {contentFocus.metadataPriority.map(meta => (
                  <span key={meta} className="text-xs font-mono bg-slate-100 dark:bg-slate-700 text-blue-600 dark:text-blue-300 px-2 py-1 rounded">
                     {meta === 'Stack' || meta === '技術堆疊' ? p.stack : (language === 'tw' ? '已優化' : 'Optimized')}
                  </span>
                ))}
              </div>
              {contentFocus.displayCodeBlocks && (
                <div className="bg-slate-900 p-3 rounded text-xs text-green-400 font-mono overflow-x-auto">
                  <code>
                    {`function optimize(x) {\n  return x * 2; // ${p.title} ${t.logicComment}\n}`}
                  </code>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6">
            <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">{t.archTitle}</h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm mb-4">
              {t.archDesc}
            </p>
            <ul className="list-disc list-inside text-sm text-blue-800 dark:text-blue-200 space-y-1 font-mono">
              {t.archList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="mt-8">
             <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-slate-800 font-mono">
                {contentFocus.primaryCTA}
             </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardDividedLayout;