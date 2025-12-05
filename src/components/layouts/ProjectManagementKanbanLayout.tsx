import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import Badge from '../atoms/Badge';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const ProjectManagementKanbanLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
      en: {
          desc: "Streamline your workflow with visual project management.",
          login: "Log In",
          todo: "To Do",
          prog: "In Progress",
          done: "Done",
          task1: "Refactor Authentication Middleware",
          task2: "Update Documentation",
          task3: "Design System Audit",
          task4: "Q3 Planning",
          task5: "Onboard New Hires",
          add: "+ Add Card",
          scale: "Scales with your team",
          small: "Small Team",
          biz: "Business",
          perUser: "/user"
      },
      tw: {
          desc: "透過視覺化專案管理簡化工作流程。",
          login: "登入",
          todo: "待辦",
          prog: "進行中",
          done: "完成",
          task1: "重構認證中介軟體",
          task2: "更新文件",
          task3: "設計系統審核",
          task4: "Q3 規劃",
          task5: "新員工入職",
          add: "+ 新增卡片",
          scale: "隨團隊擴展",
          small: "小型團隊",
          biz: "企業",
          perUser: "/使用者"
      }
  }[language];

  return (
    <div className="bg-yellow-50 dark:bg-slate-900 text-gray-900 dark:text-white font-sans p-4 md:p-8 min-h-[800px] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
                 <h2 className="text-3xl font-bold mb-2">{contentFocus.title}</h2>
                 <p className="text-gray-600 dark:text-gray-400">{t.desc}</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-2">
                <Button className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700">{t.login}</Button>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">{contentFocus.primaryCTA}</Button>
            </div>
        </div>

        {contentFocus.showKanban && (
            <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-8">
                {/* Column 1 */}
                <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-xl min-w-[300px] shadow-sm">
                    <div className="flex justify-between items-center mb-4 text-gray-600 dark:text-gray-400 font-bold text-sm uppercase">
                        <span>{t.todo}</span>
                        <Badge variant="neutral" size="sm">3</Badge>
                    </div>
                    <div className="space-y-3">
                        <div className="bg-white dark:bg-slate-700 p-4 rounded shadow-sm border border-gray-200 dark:border-slate-600 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow">
                            <div className="flex gap-2 mb-2">
                                <Badge variant="danger" size="sm">HIGH</Badge>
                                <Badge variant="info" size="sm">DEV</Badge>
                            </div>
                            <p className="font-medium text-sm text-gray-900 dark:text-white">{t.task1}</p>
                        </div>
                        <div className="bg-white dark:bg-slate-700 p-4 rounded shadow-sm border border-gray-200 dark:border-slate-600 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow">
                            <p className="font-medium text-sm text-gray-900 dark:text-white">{t.task2}</p>
                             <div className="mt-2 flex -space-x-1">
                                <div className="w-6 h-6 rounded-full bg-green-200 dark:bg-green-800 border border-white dark:border-slate-700"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 text-gray-400 dark:text-gray-500 text-sm hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">{t.add}</div>
                </div>

                {/* Column 2 */}
                 <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-xl min-w-[300px] shadow-sm">
                    <div className="flex justify-between items-center mb-4 text-gray-600 dark:text-gray-400 font-bold text-sm uppercase">
                        <span>{t.prog}</span>
                        <Badge variant="neutral" size="sm">1</Badge>
                    </div>
                    <div className="space-y-3">
                         <div className="bg-white dark:bg-slate-700 p-4 rounded shadow-sm border border-gray-200 dark:border-slate-600 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow border-l-4 border-yellow-400 dark:border-yellow-600">
                            <p className="font-medium text-sm text-gray-900 dark:text-white">{t.task3}</p>
                            <div className="mt-3 h-1 w-full bg-gray-100 dark:bg-slate-600 rounded overflow-hidden">
                                <div className="h-full w-2/3 bg-yellow-400 dark:bg-yellow-600"></div>
                            </div>
                        </div>
                    </div>
                </div>

                 {/* Column 3 */}
                 <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-xl min-w-[300px] shadow-sm">
                    <div className="flex justify-between items-center mb-4 text-gray-600 dark:text-gray-400 font-bold text-sm uppercase">
                        <span>{t.done}</span>
                        <Badge variant="neutral" size="sm">5</Badge>
                    </div>
                     <div className="space-y-3 opacity-60">
                         <div className="bg-white dark:bg-slate-700 p-4 rounded shadow-sm border border-gray-200 dark:border-slate-600">
                             <p className="font-medium text-sm line-through text-gray-900 dark:text-white">{t.task4}</p>
                         </div>
                         <div className="bg-white dark:bg-slate-700 p-4 rounded shadow-sm border border-gray-200 dark:border-slate-600">
                             <p className="font-medium text-sm line-through text-gray-900 dark:text-white">{t.task5}</p>
                         </div>
                     </div>
                </div>
            </div>
        )}

        {/* Team Pricing Snippet */}
        <div className="mt-12 text-center bg-white dark:bg-slate-800 p-8 rounded-xl border border-gray-200 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{t.scale}</h3>
            <div className="flex justify-center gap-8 text-left max-w-lg mx-auto">
                <div>
                    <span className="block text-gray-500 dark:text-gray-400 text-sm">{t.small}</span>
                    <span className="block text-2xl font-bold text-gray-900 dark:text-white">$10<span className="text-sm font-normal">{t.perUser}</span></span>
                </div>
                 <div className="border-l border-gray-200 dark:border-slate-700 pl-8">
                    <span className="block text-gray-500 dark:text-gray-400 text-sm">{t.biz}</span>
                    <span className="block text-2xl font-bold text-gray-900 dark:text-white">$25<span className="text-sm font-normal">{t.perUser}</span></span>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectManagementKanbanLayout;