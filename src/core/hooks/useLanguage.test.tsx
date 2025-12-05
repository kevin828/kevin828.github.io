import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { useLanguage, LanguageProvider } from './useLanguage';

// Fix: Declare jest and test globals
declare const jest: any;
declare const describe: any;
declare const beforeEach: any;
declare const it: any;
declare const expect: any;

describe('useLanguage', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <LanguageProvider>{children}</LanguageProvider>
  );

  it('should throw error if used outside of LanguageProvider', () => {
    // Suppress console.error for this specific test as React will complain
    const consoleError = console.error;
    console.error = jest.fn();

    expect(() => {
      renderHook(() => useLanguage());
    }).toThrow('useLanguage must be used within a LanguageProvider');

    console.error = consoleError;
  });

  it('should initialize with default language (en)', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.language).toBe('en');
  });

  it('should initialize with stored language if present', () => {
    window.localStorage.setItem('language', 'tw');
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.language).toBe('tw');
  });

  it('should toggle language', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    
    act(() => {
      result.current.toggleLanguage();
    });
    expect(result.current.language).toBe('tw');
    expect(window.localStorage.getItem('language')).toBe('tw');

    act(() => {
      result.current.toggleLanguage();
    });
    expect(result.current.language).toBe('en');
    expect(window.localStorage.getItem('language')).toBe('en');
  });
});