import { renderHook, act } from '@testing-library/react';
import { useDarkMode } from './useDarkMode';

// Fix: Declare jest and test globals
declare const jest: any;
declare const describe: any;
declare const beforeAll: any;
declare const beforeEach: any;
declare const afterEach: any;
declare const it: any;
declare const expect: any;

describe('useDarkMode', () => {
  let originalLocalStorage: Storage;

  beforeAll(() => {
    // Mock matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  beforeEach(() => {
    // Clear localStorage and document classList before each test
    originalLocalStorage = window.localStorage;
    window.localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with "light" by default if no preference is stored', () => {
    const { result } = renderHook(() => useDarkMode());
    expect(result.current.theme).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should initialize with "dark" if localStorage has "dark"', () => {
    window.localStorage.setItem('theme', 'dark');
    const { result } = renderHook(() => useDarkMode());
    expect(result.current.theme).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should toggle theme from light to dark', () => {
    const { result } = renderHook(() => useDarkMode());
    
    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should toggle theme from dark to light', () => {
    window.localStorage.setItem('theme', 'dark');
    const { result } = renderHook(() => useDarkMode());

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should respect system preference if localStorage is empty', () => {
    // Mock system preference to dark
    // Fix: Cast to any instead of jest.Mock
    (window.matchMedia as any).mockImplementation(query => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));

    const { result } = renderHook(() => useDarkMode());
    expect(result.current.theme).toBe('dark');
  });
});