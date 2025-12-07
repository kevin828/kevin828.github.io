import { useState, useCallback } from 'react';
import { portfolioThemesEN, portfolioThemesTW } from '../data/portfolioData';
import { ecommerceThemesEN, ecommerceThemesTW } from '../data/ecommerceData';
import { corporateThemesEN, corporateThemesTW } from '../data/corporateData';
import { contentNewsThemesEN, contentNewsThemesTW } from '../data/contentNewsData';
import { softwareLandingThemesEN, softwareLandingThemesTW } from '../data/softwareLandingData';
import { ISubThemeDetail } from '../types/Theme';
import { useLanguage } from './useLanguage';

export type ThemeCategory = 'Portfolio' | 'E-Commerce' | 'Corporate' | 'Content/News' | 'Software/SaaS';

export const CATEGORIES: ThemeCategory[] = ['Portfolio', 'E-Commerce', 'Corporate', 'Content/News', 'Software/SaaS'];

// Static helper to get themes without hook state
export const getThemesByCategory = (cat: ThemeCategory, lang: 'en' | 'tw') => {
  if (lang === 'tw') {
    switch (cat) {
      case 'Portfolio': return portfolioThemesTW;
      case 'E-Commerce': return ecommerceThemesTW;
      case 'Corporate': return corporateThemesTW;
      case 'Content/News': return contentNewsThemesTW;
      case 'Software/SaaS': return softwareLandingThemesTW;
      default: return portfolioThemesTW;
    }
  } else {
    switch (cat) {
      case 'Portfolio': return portfolioThemesEN;
      case 'E-Commerce': return ecommerceThemesEN;
      case 'Corporate': return corporateThemesEN;
      case 'Content/News': return contentNewsThemesEN;
      case 'Software/SaaS': return softwareLandingThemesEN;
      default: return portfolioThemesEN;
    }
  }
};

export const useThemeSwitcher = () => {
  const [category, setCategory] = useState<ThemeCategory>('Portfolio');
  const [activeSubThemeId, setActiveSubThemeId] = useState<string>('VisualDesigner');
  const { language } = useLanguage();

  const availableThemes = getThemesByCategory(category, language);

  // Find the active theme object from the current dataset based on ID
  // If ID doesn't exist (e.g. during a switch or error), default to the first one available
  const activeSubTheme = availableThemes.find(t => t.id === activeSubThemeId) || availableThemes[0];

  const switchCategory = useCallback((newCategory: ThemeCategory) => {
    setCategory(newCategory);

    // Explicitly reset the active sub-theme ID to the first item of the new category.
    // We use the EN dataset for ID reference as IDs are consistent across languages.
    let firstThemeId = '';
    const themes = getThemesByCategory(newCategory, 'en');
    firstThemeId = themes[0].id;

    setActiveSubThemeId(firstThemeId);
  }, []);

  const switchSubTheme = useCallback((id: string) => {
    setActiveSubThemeId(id);
  }, []);

  return {
    category,
    switchCategory,
    activeSubTheme,
    availableThemes,
    switchSubTheme
  };
};