import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from './Select';

// Fix: Declare jest and test globals
declare const jest: any;
declare const describe: any;
declare const it: any;
declare const expect: any;

describe('Select Component', () => {
  it('renders correctly with options', () => {
    render(
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(2);
  });

  it('renders a label when provided', () => {
    render(<Select label="Choose Category" />);
    expect(screen.getByText('Choose Category')).toBeInTheDocument();
  });

  it('renders error message when error prop is provided', () => {
    render(<Select error="Selection required" />);
    expect(screen.getByText('Selection required')).toBeInTheDocument();
  });

  it('handles value changes', () => {
    const handleChange = jest.fn();
    render(
      <Select onChange={handleChange} data-testid="select">
        <option value="a">A</option>
        <option value="b">B</option>
      </Select>
    );
    
    const select = screen.getByTestId('select');
    fireEvent.change(select, { target: { value: 'b' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(select).toHaveValue('b');
  });
});