import React from 'react';
import Button from '../atoms/Button';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  onButtonClick?: () => void;
  index?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  period, 
  features, 
  buttonText, 
  isPopular = false,
  onButtonClick,
  index = 0
}) => {
  return (
    <div 
      className={`relative flex flex-col h-full rounded-2xl transition-all duration-300 group hover:-translate-y-2 ${
        isPopular 
          ? 'bg-white dark:bg-slate-800 border-2 border-transparent bg-clip-padding relative shadow-2xl shadow-brand-500/10 dark:shadow-brand-500/20 scale-100 md:scale-105 z-10 hover:shadow-brand-500/30' 
          : 'bg-white/40 dark:bg-slate-900/40 border border-gray-200/50 dark:border-slate-700/50 hover:border-brand-200 dark:hover:border-brand-800 hover:bg-white/80 dark:hover:bg-slate-800/80 hover:shadow-xl'
      } backdrop-blur-sm p-8`}
      style={{ 
        animationDelay: `${index * 100}ms`
      }}
    >
        {/* Gradient Border for Popular Card - Switched from purple mix to pure brand gradient */}
        {isPopular && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 -z-10 m-[-2px]"></div>
        )}

        {isPopular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-widest border border-white/20">
                Most Popular
            </div>
        )}
        
        <div className="mb-8 border-b border-gray-200 dark:border-white/5 pb-8">
            <h3 className={`text-lg font-medium mb-3 transition-colors duration-300 ${
                isPopular 
                ? 'text-brand-600 dark:text-brand-300' 
                : 'text-gray-500 dark:text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400'
            }`}>{title}</h3>
            <div className="flex items-baseline gap-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                <span className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">{price}</span>
                <span className="text-sm font-medium text-gray-500 dark:text-slate-500 uppercase tracking-wide">{period}</span>
            </div>
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 group/item">
                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${isPopular ? 'bg-brand-100 dark:bg-brand-500/20 text-brand-600 dark:text-brand-300 group-hover/item:bg-brand-600 group-hover/item:text-white' : 'bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-500 group-hover/item:text-gray-700 dark:group-hover/item:text-slate-300'}`}>
                         <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">{feature}</span>
                </li>
            ))}
        </ul>
        
        <Button 
            variant={isPopular ? 'primary' : 'outline'} 
            className={`w-full py-4 rounded-xl transition-all active:scale-95 text-sm font-bold tracking-wide ${
                isPopular 
                ? 'shadow-lg shadow-brand-500/25 bg-brand-600 hover:bg-brand-700 border-none hover:shadow-brand-500/40 hover:brightness-110 text-white' 
                : 'border-gray-300 dark:border-slate-600 text-gray-600 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-700 dark:hover:text-brand-300 hover:border-brand-200 dark:hover:border-brand-800'
            }`}
            onClick={onButtonClick}
        >
            {buttonText}
        </Button>
    </div>
  );
};

export default PricingCard;