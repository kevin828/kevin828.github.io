import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

// Fix: Declare jest and test globals
declare const jest: any;
declare const describe: any;
declare const it: any;
declare const expect: any;

describe('Input Component', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('renders a label when provided', () => {
    render(<Input label="Username" id="username" />);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('renders error message when error prop is provided', () => {
    render(<Input error="Invalid input" />);
    expect(screen.getByText('Invalid input')).toBeInTheDocument();
  });

  it('applies error styles when error prop is present', () => {
    render(<Input error="Error" placeholder="Error Input" />);
    const input = screen.getByPlaceholderText('Error Input');
    expect(input).toHaveClass('border-red-500');
  });

  it('handles user input', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} placeholder="Type here" />);
    
    const input = screen.getByPlaceholderText('Type here');
    fireEvent.change(input, { target: { value: 'Hello' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('Hello');
  });

  it('accepts custom class names', () => {
    render(<Input className="custom-input-class" placeholder="Custom" />);
    expect(screen.getByPlaceholderText('Custom')).toHaveClass('custom-input-class');
  });
});