import { renderHook, act } from '@testing-library/react';
import { useThemeSwitcher } from './useThemeSwitcher';
import { useLanguage } from './useLanguage';

// Fix: Declare jest and test globals to avoid TS errors
declare const jest: any;
declare const describe: any;
declare const beforeEach: any;
declare const it: any;
declare const expect: any;

// Mock the dependency
jest.mock('./useLanguage', () => ({
  useLanguage: jest.fn(),
}));

describe('useThemeSwitcher', () => {
  beforeEach(() => {
    // Default mock implementation
    // Fix: Cast to any instead of jest.Mock
    (useLanguage as any).mockReturnValue({ language: 'en' });
    jest.clearAllMocks();
  });

  it('should initialize with default category (Portfolio) and first theme', () => {
    const { result } = renderHook(() => useThemeSwitcher());

    expect(result.current.category).toBe('Portfolio');
    expect(result.current.activeSubTheme.id).toBe('VisualDesigner');
    expect(result.current.availableThemes.length).toBeGreaterThan(0);
  });

  it('should switch categories and reset to the default theme of that category', () => {
    const { result } = renderHook(() => useThemeSwitcher());

    // Switch to E-Commerce
    act(() => {
      result.current.switchCategory('E-Commerce');
    });

    expect(result.current.category).toBe('E-Commerce');
    // First theme of E-Commerce is FashionLuxury
    expect(result.current.activeSubTheme.id).toBe('FashionLuxury');
    
    // Switch to Corporate
    act(() => {
        result.current.switchCategory('Corporate');
    });

    expect(result.current.category).toBe('Corporate');
    // First theme of Corporate is LawAccountingFirm
    expect(result.current.activeSubTheme.id).toBe('LawAccountingFirm');
  });

  it('should switch sub-themes within the same category', () => {
    const { result } = renderHook(() => useThemeSwitcher());

    // Initially VisualDesigner
    expect(result.current.activeSubTheme.id).toBe('VisualDesigner');

    // Switch to SoftwareEngineer
    act(() => {
      result.current.switchSubTheme('SoftwareEngineer');
    });

    expect(result.current.activeSubTheme.id).toBe('SoftwareEngineer');
  });

  it('should return the correct list of available themes for the active category', () => {
    const { result } = renderHook(() => useThemeSwitcher());

    // Check Portfolio themes
    const portfolioThemeIds = result.current.availableThemes.map(t => t.id);
    expect(portfolioThemeIds).toContain('VisualDesigner');
    expect(portfolioThemeIds).toContain('UXUIDesigner');
    expect(portfolioThemeIds).not.toContain('FashionLuxury');

    // Switch Category
    act(() => {
        result.current.switchCategory('E-Commerce');
    });

    // Check E-Commerce themes
    const ecommerceThemeIds = result.current.availableThemes.map(t => t.id);
    expect(ecommerceThemeIds).toContain('FashionLuxury');
    expect(ecommerceThemeIds).toContain('TechElectronics');
    expect(ecommerceThemeIds).not.toContain('VisualDesigner');
  });
  
  it('should load Traditional Chinese themes when language is tw', () => {
    // Fix: Cast to any instead of jest.Mock
    (useLanguage as any).mockReturnValue({ language: 'tw' });
    const { result } = renderHook(() => useThemeSwitcher());

    // Check for TW content in Portfolio
    const themeName = result.current.activeSubTheme.name;
    // Assuming 'Visual Designer' maps to '視覺設計師' in TW data
    expect(themeName).toBe('視覺設計師'); 
  });
});