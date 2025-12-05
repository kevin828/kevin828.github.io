import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScrollToTopButton from './ScrollToTopButton';

// Declare globals for TypeScript environment
declare const global: any;
declare const jest: any;
declare const describe: any;
declare const it: any;
declare const expect: any;

describe('ScrollToTopButton Component', () => {
  it('renders but is initially invisible', () => {
    render(<ScrollToTopButton />);
    const button = screen.getByRole('button', { name: /scroll to top/i });
    expect(button).toBeInTheDocument();
    // Check for opacity-0 class which handles visibility
    expect(button).toHaveClass('opacity-0');
  });

  it('becomes visible after scrolling down', () => {
    render(<ScrollToTopButton />);
    const button = screen.getByRole('button', { name: /scroll to top/i });

    act(() => {
      // Mock window scroll
      global.window.scrollY = 400;
      global.window.dispatchEvent(new Event('scroll'));
    });

    expect(button).toHaveClass('opacity-100');
  });

  it('scrolls to top when clicked', () => {
    // Mock scrollTo
    global.window.scrollTo = jest.fn();

    render(<ScrollToTopButton />);
    const button = screen.getByRole('button', { name: /scroll to top/i });

    // Make visible first
    act(() => {
      global.window.scrollY = 400;
      global.window.dispatchEvent(new Event('scroll'));
    });

    fireEvent.click(button);

    expect(global.window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});