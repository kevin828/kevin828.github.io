import React, { useState } from 'react';
import Card from './Card';
import Button from '../atoms/Button';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  learnMoreLabel?: string;
  showLessLabel?: string;
  details?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  learnMoreLabel = "Learn More",
  showLessLabel = "Show Less",
  details 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Placeholder content if details are not explicitly provided
  const content = details || `Explore how our ${title} capabilities can drive efficiency and innovation in your organization. We specialize in tailored solutions that scale.`;

  return (
    <Card hoverEffect className="h-full group bg-gray-50 hover:bg-white dark:bg-slate-800 dark:hover:bg-slate-750 flex flex-col items-start transition-all duration-300">
      <div className="w-12 h-12 bg-brand-100 dark:bg-slate-900 text-brand-600 dark:text-brand-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{description}</p>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
        <p className="text-sm text-gray-500 dark:text-gray-300 border-t border-gray-200 dark:border-slate-700 pt-3">
          {content}
        </p>
      </div>

      <div className="mt-auto pt-2">
        <Button 
          variant="ghost" 
          size="sm" 
          className="pl-0 text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 hover:bg-transparent p-0"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? showLessLabel : learnMoreLabel} 
          <span className="ml-1 transition-transform duration-300 inline-block" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>↓</span>
        </Button>
      </div>
    </Card>
  );
};

export default FeatureCard;