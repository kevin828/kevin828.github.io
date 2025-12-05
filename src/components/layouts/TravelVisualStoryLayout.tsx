import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const TravelVisualStoryLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
      en: {
          guide: "The Ultimate Guide",
          intro: "\"We traveled 4,000 miles across the rugged coastline to find the hidden gems that tourists often miss. Here is what we discovered.\"",
          cove: "Hidden Cove",
          coveDesc: "Accessible only by a narrow trail, this cove offers crystal clear waters and untouched sands. Best visited at sunrise.",
          read: "Read Full Guide",
          peak: "The Peak",
          peakDesc: "A challenging 4-hour hike rewards you with a panoramic view that stretches for miles. Don't forget your camera.",
          map: "View Trail Map",
          openMap: "Open Interactive Map"
      },
      tw: {
          guide: "終極指南",
          intro: "「我們沿著崎嶇的海岸線行駛了4000英里，尋找遊客經常錯過的隱藏寶石。這是我們的發現。」",
          cove: "隱秘海灣",
          coveDesc: "只能通過狹窄的小徑到達，這個海灣提供水晶般清澈的海水和未受破壞的沙灘。最適合日出時造訪。",
          read: "閱讀完整指南",
          peak: "山頂",
          peakDesc: "具有挑戰性的4小時徒步，獎勵你的是綿延數英里的全景視野。別忘了帶相機。",
          map: "查看步道地圖",
          openMap: "開啟互動地圖"
      }
  }[language];

  return (
    <div className="bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-white font-serif transition-colors duration-300">
      {/* Immersive Hero */}
      <div className="h-screen max-h-[700px] relative overflow-hidden">
          <img src="https://picsum.photos/1920/1080?random=travel" alt="Landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-50 via-transparent to-transparent dark:from-blue-900"></div>
          <div className="absolute bottom-20 left-0 w-full text-center px-4">
              <span className="text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.5em] text-sm font-sans mb-4 block font-bold">{t.guide}</span>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg text-blue-900 dark:text-white">{contentFocus.title}</h2>
              <div className="w-24 h-1 bg-cyan-500 dark:bg-cyan-400 mx-auto"></div>
          </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
          <p className="text-xl md:text-2xl leading-relaxed text-blue-800 dark:text-blue-100 text-center mb-16 font-light">
              {t.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1">
                  <h3 className="text-3xl font-bold mb-4 text-cyan-700 dark:text-cyan-200">{t.cove}</h3>
                  <p className="text-blue-700 dark:text-blue-200 leading-relaxed mb-6">
                      {t.coveDesc}
                  </p>
                  <Button variant="outline" className="border-cyan-600 text-cyan-700 hover:bg-cyan-100 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-900">{t.read}</Button>
              </div>
              <div className="order-1 md:order-2 h-80 rounded-lg overflow-hidden shadow-2xl shadow-blue-200 dark:shadow-cyan-900/50 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img src="https://picsum.photos/600/600?random=cove" alt="Cove" className="w-full h-full object-cover" />
              </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="h-80 rounded-lg overflow-hidden shadow-2xl shadow-blue-200 dark:shadow-cyan-900/50 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img src="https://picsum.photos/600/600?random=mountain" alt="Mountain" className="w-full h-full object-cover" />
              </div>
              <div>
                  <h3 className="text-3xl font-bold mb-4 text-cyan-700 dark:text-cyan-200">{t.peak}</h3>
                  <p className="text-blue-700 dark:text-blue-200 leading-relaxed mb-6">
                      {t.peakDesc}
                  </p>
                  <Button variant="outline" className="border-cyan-600 text-cyan-700 hover:bg-cyan-100 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-900">{t.map}</Button>
              </div>
          </div>

          {contentFocus.showMapEmbeds && (
              <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded-xl shadow-inner">
                  <div className="bg-blue-200 dark:bg-blue-950 h-96 w-full rounded flex items-center justify-center relative overflow-hidden group">
                       <img src="https://picsum.photos/1000/500?random=map" alt="Map" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all" />
                       <div className="absolute inset-0 flex items-center justify-center">
                           <Button className="bg-white text-blue-900 font-bold hover:bg-gray-100 shadow-lg">
                               {t.openMap}
                           </Button>
                       </div>
                  </div>
              </div>
          )}

          <div className="text-center mt-16">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white px-12 rounded-full font-sans tracking-wide shadow-lg">
                  {contentFocus.primaryCTA}
              </Button>
          </div>
      </div>
    </div>
  );
};

export default TravelVisualStoryLayout;