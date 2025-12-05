import React, { useState } from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const FullBleedCarouselLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  const t = {
    en: {
        alt: "Art piece",
        iso: "ISO 400 • f/1.8"
    },
    tw: {
        alt: "藝術作品",
        iso: "ISO 400 • f/1.8"
    }
  }[language];

  const slides = [
    'https://picsum.photos/1920/1080?random=101',
    'https://picsum.photos/1920/1080?random=102',
    'https://picsum.photos/1920/1080?random=103'
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[80vh] bg-black text-white overflow-hidden group">
      {/* Background Image Layer */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
        >
            <img src={slide} alt={`${t.alt} ${index + 1}`} className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
      ))}

      {/* Content Layer */}
      <div className="absolute bottom-0 left-0 p-12 w-full md:w-2/3 lg:w-1/2 z-10">
        <h2 className="text-5xl md:text-7xl font-serif font-light mb-6 tracking-wide text-white">
          {contentFocus.title}
        </h2>
        <div className="flex gap-8 mb-8 text-sm tracking-widest text-gray-300 border-l border-gray-500 pl-4">
           {contentFocus.metadataPriority.map(meta => (
             <div key={meta} className="flex flex-col">
               <span className="font-bold text-white">{meta}</span>
               <span className="text-xs text-gray-400">{t.iso}</span>
             </div>
           ))}
        </div>
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-colors rounded-none px-8 py-3 uppercase tracking-widest text-xs">
          {contentFocus.primaryCTA}
        </Button>
      </div>

      {/* Controls */}
      <div className="absolute right-8 bottom-8 flex gap-4 z-20">
        <button onClick={prevSlide} className="w-12 h-12 border border-gray-600 hover:border-white text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">←</button>
        <button onClick={nextSlide} className="w-12 h-12 border border-gray-600 hover:border-white text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">→</button>
      </div>
    </div>
  );
};

export default FullBleedCarouselLayout;