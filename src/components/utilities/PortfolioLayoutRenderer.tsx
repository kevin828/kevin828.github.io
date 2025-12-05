import React, { useMemo } from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';

// Import Portfolio layouts
import WaterfallGridLayout from '../layouts/WaterfallGridLayout';
import StandardDividedLayout from '../layouts/StandardDividedLayout';
import LongPageLandingLayout from '../layouts/LongPageLandingLayout';
import FullBleedCarouselLayout from '../layouts/FullBleedCarouselLayout';
import StructuredCaseStudyLayout from '../layouts/StructuredCaseStudyLayout';

// Import E-Commerce layouts
import EditorialMagazineLayout from '../layouts/EditorialMagazineLayout';
import TechElectronicsLayout from '../layouts/TechElectronicsLayout';
import SubscriptionLandingLayout from '../layouts/SubscriptionLandingLayout';
import FoodGroceryLayout from '../layouts/FoodGroceryLayout';
import DigitalProductLayout from '../layouts/DigitalProductLayout';

// Import Corporate layouts
import StrictProfessionalLayout from '../layouts/StrictProfessionalLayout';
import IndustrialModularLayout from '../layouts/IndustrialModularLayout';
import NonProfitImpactLayout from '../layouts/NonProfitImpactLayout';
import RestaurantVisualLayout from '../layouts/RestaurantVisualLayout';
import MedicalClinicLayout from '../layouts/MedicalClinicLayout';

// Import Content/News layouts
import ThreeColumnReviewLayout from '../layouts/ThreeColumnReviewLayout';
import StructuredRecipeLayout from '../layouts/StructuredRecipeLayout';
import TravelVisualStoryLayout from '../layouts/TravelVisualStoryLayout';
import GossipDenseGridLayout from '../layouts/GossipDenseGridLayout';
import AcademicMinimalLayout from '../layouts/AcademicMinimalLayout';

// Import Software/SaaS layouts
import FreemiumSinglePageLayout from '../layouts/FreemiumSinglePageLayout';
import EnterpriseSalesLayout from '../layouts/EnterpriseSalesLayout';
import MobileAppVerticalLayout from '../layouts/MobileAppVerticalLayout';
import ProjectManagementKanbanLayout from '../layouts/ProjectManagementKanbanLayout';
import FintechDataLayout from '../layouts/FintechDataLayout';

interface RendererProps {
  theme: ISubThemeDetail;
}

const PortfolioLayoutRenderer: React.FC<RendererProps> = ({ theme }) => {
  // Map string names from JSON to actual React Components
  const LayoutComponent = useMemo(() => {
    switch (theme.layoutComponent) {
      // Portfolio Themes
      case 'WaterfallGridLayout':
        return WaterfallGridLayout;
      case 'StandardDividedLayout':
        return StandardDividedLayout;
      case 'LongPageLandingLayout':
        return LongPageLandingLayout;
      case 'FullBleedCarouselLayout':
        return FullBleedCarouselLayout;
      case 'StructuredCaseStudyLayout':
        return StructuredCaseStudyLayout;
      
      // E-Commerce Themes
      case 'EditorialMagazineLayout':
        return EditorialMagazineLayout;
      case 'TechElectronicsLayout':
        return TechElectronicsLayout;
      case 'SubscriptionLandingLayout':
        return SubscriptionLandingLayout;
      case 'FoodGroceryLayout':
        return FoodGroceryLayout;
      case 'DigitalProductLayout':
        return DigitalProductLayout;

      // Corporate Themes
      case 'StrictProfessionalLayout':
        return StrictProfessionalLayout;
      case 'IndustrialModularLayout':
        return IndustrialModularLayout;
      case 'NonProfitImpactLayout':
        return NonProfitImpactLayout;
      case 'RestaurantVisualLayout':
        return RestaurantVisualLayout;
      case 'MedicalClinicLayout':
        return MedicalClinicLayout;

      // Content/News Themes
      case 'ThreeColumnReviewLayout':
        return ThreeColumnReviewLayout;
      case 'StructuredRecipeLayout':
        return StructuredRecipeLayout;
      case 'TravelVisualStoryLayout':
        return TravelVisualStoryLayout;
      case 'GossipDenseGridLayout':
        return GossipDenseGridLayout;
      case 'AcademicMinimalLayout':
        return AcademicMinimalLayout;

      // Software/SaaS Themes
      case 'FreemiumSinglePageLayout':
        return FreemiumSinglePageLayout;
      case 'EnterpriseSalesLayout':
        return EnterpriseSalesLayout;
      case 'MobileAppVerticalLayout':
        return MobileAppVerticalLayout;
      case 'ProjectManagementKanbanLayout':
        return ProjectManagementKanbanLayout;
      case 'FintechDataLayout':
        return FintechDataLayout;

      default:
        console.warn(`Layout ${theme.layoutComponent} not found, falling back to basic display.`);
        return () => <div className="p-10 text-center text-red-500">Layout Component Not Found</div>;
    }
  }, [theme.layoutComponent]);

  return (
    <div className={`w-full transition-all duration-500 ease-in-out ${theme.styleClasses}`}>
      <LayoutComponent theme={theme} />
    </div>
  );
};

export default PortfolioLayoutRenderer;