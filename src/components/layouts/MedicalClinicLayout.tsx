import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import Badge from '../atoms/Badge';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const MedicalClinicLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
      en: {
          badges: ["HIPAA Compliant", "24/7 Support"],
          desc: "Compassionate care powered by advanced medical technology. Your health is our priority.",
          quick: "Quick Appointment",
          noAcc: "No account required.",
          meet: "Meet Our Specialists",
          view: "View Profile",
          doctors: [
              { name: "Dr. Emily Chen", role: "Cardiologist" },
              { name: "Dr. James Wilson", role: "Pediatrician" },
              { name: "Dr. Sarah Patel", role: "Neurologist" }
          ]
      },
      tw: {
          badges: ["符合 HIPAA 標準", "24/7 支援"],
          desc: "以先進醫療科技提供充滿關懷的照護。您的健康是我們的首要任務。",
          quick: "快速預約",
          noAcc: "無需註冊",
          meet: "認識我們的專家",
          view: "查看簡介",
          doctors: [
              { name: "Dr. Emily Chen", role: "心臟科" },
              { name: "Dr. James Wilson", role: "小兒科" },
              { name: "Dr. Sarah Patel", role: "神經科" }
          ]
      }
  }[language];

  const doctors = [
      { img: "https://picsum.photos/100/100?random=dr1" },
      { img: "https://picsum.photos/100/100?random=dr2" },
      { img: "https://picsum.photos/100/100?random=dr3" }
  ].map((d, i) => ({ ...d, ...t.doctors[i] }));

  return (
    <div className="bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300">
      <div className="bg-teal-50 dark:bg-teal-900/20 py-12 px-6 border-b border-teal-100 dark:border-teal-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <Badge variant="success" className="bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-300 border-none shadow-sm">{t.badges[0]}</Badge>
                    <Badge variant="info" className="bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-300 border-none shadow-sm">{t.badges[1]}</Badge>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{contentFocus.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-lg">{t.desc}</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border-t-4 border-teal-500 w-full md:w-auto min-w-[300px]">
                <h3 className="font-bold text-lg mb-4 text-center">{t.quick}</h3>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white mb-2">
                    {contentFocus.primaryCTA}
                </Button>
                <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-2">{t.noAcc}</p>
            </div>
        </div>
      </div>

      {contentFocus.showCredentials && (
        <div className="max-w-6xl mx-auto py-16 px-6">
            <h3 className="text-center font-bold text-2xl mb-12 text-gray-800 dark:text-gray-100">{t.meet}</h3>
            <div className="grid md:grid-cols-3 gap-8">
                {doctors.map((dr, i) => (
                    <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow bg-white dark:bg-slate-800">
                        <img src={dr.img} alt={dr.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-teal-100 dark:border-teal-900" />
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white">{dr.name}</h4>
                        <p className="text-teal-600 dark:text-teal-400 font-medium text-sm mb-4">{dr.role}</p>
                        <div className="flex justify-center gap-2 mb-4">
                             <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                             <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                             <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full text-teal-600 border-teal-200 hover:bg-teal-50 dark:text-teal-400 dark:border-teal-800 dark:hover:bg-teal-900/30">{t.view}</Button>
                    </div>
                ))}
            </div>
        </div>
      )}
    </div>
  );
};

export default MedicalClinicLayout;