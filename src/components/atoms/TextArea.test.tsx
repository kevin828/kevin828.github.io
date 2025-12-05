import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextArea from './TextArea';

// Fix: Declare jest and test globals
declare const jest: any;
declare const describe: any;
declare const it: any;
declare const expect: any;

describe('TextArea Component', () => {
  it('renders correctly', () => {
    render(<TextArea placeholder="Enter description" />);
    expect(screen.getByPlaceholderText('Enter description')).toBeInTheDocument();
  });

  it('renders a label when provided', () => {
    render(<TextArea label="Comments" />);
    expect(screen.getByText('Comments')).toBeInTheDocument();
  });

  it('renders error message when error prop is provided', () => {
    render(<TextArea error="Message required" />);
    expect(screen.getByText('Message required')).toBeInTheDocument();
  });

  it('applies error styles when error prop is present', () => {
    render(<TextArea error="Error" placeholder="Error Text" />);
    const textarea = screen.getByPlaceholderText('Error Text');
    expect(textarea).toHaveClass('border-red-500');
  });

  it('handles user input', () => {
    const handleChange = jest.fn();
    render(<TextArea onChange={handleChange} placeholder="Type here" />);
    
    const textarea = screen.getByPlaceholderText('Type here');
    fireEvent.change(textarea, { target: { value: 'Long text content' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(textarea).toHaveValue('Long text content');
  });
});