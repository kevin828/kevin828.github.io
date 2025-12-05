import React from 'react';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import Select from '../components/atoms/Select';
import TextArea from '../components/atoms/TextArea';
import { useLanguage } from '../core/hooks/useLanguage';
import { translations } from '../core/data/translations';
import SectionHeading from '../components/molecules/SectionHeading';
import Card from '../components/molecules/Card';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section id="contact" className="py-20 bg-brand-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 md:p-12 shadow-xl border-none">
          <SectionHeading 
            title={t.title} 
            subtitle={t.subtitle} 
            className="mb-10"
          />
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <Input 
                  label={t.name}
                  placeholder="John Doe"
                  type="text"
                />
                <Input 
                  label={t.email}
                  placeholder="john@company.com"
                  type="email"
                />
            </div>
            
            <Select label={t.projectType}>
                <option>{t.types.corp}</option>
                <option>{t.types.saas}</option>
                <option>{t.types.ecom}</option>
                <option>{t.types.news}</option>
                <option>{t.types.creative}</option>
            </Select>

            <TextArea 
              label={t.message}
              rows={4}
              placeholder="..."
            />

            <Button size="lg" className="w-full">{t.submit}</Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;