import React from 'react';
import { useLanguage } from '../core/hooks/useLanguage';
import { translations } from '../core/data/translations';
import SectionHeading from '../components/molecules/SectionHeading';
import FeatureCard from '../components/molecules/FeatureCard';

const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].services;

  const services = [
    {
      title: t.service1Title,
      desc: t.service1Desc,
      details: t.service1Details,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      )
    },
    {
      title: t.service2Title,
      desc: t.service2Desc,
      details: t.service2Details,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
      )
    },
    {
      title: t.service3Title,
      desc: t.service3Desc,
      details: t.service3Details,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={t.title} 
          subtitle={t.subtitle} 
        />
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <FeatureCard 
              key={i}
              title={s.title}
              description={s.desc}
              details={s.details}
              icon={s.icon}
              learnMoreLabel={t.learnMore}
              showLessLabel={t.showLess}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;