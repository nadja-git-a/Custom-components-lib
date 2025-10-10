import { render, screen } from '@testing-library/react';
import React from 'react';

import TextField from './TextField';

import '@testing-library/jest-dom';

describe('TextField — main props', () => {
  test('renders input and label text', () => {
    render(<TextField label="Email" />);
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
  });

  test('renders helperText when provided', () => {
    render(<TextField helperText="Enter your email" />);
    expect(screen.getByText('Enter your email')).toBeInTheDocument();
  });

  test('applies error styles and aria-invalid when error=true', () => {
    render(<TextField error label="Error field" helperText="Error message" />);
    const input = screen.getByRole('textbox', { name: /error field/i });
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input.className).toMatch(/error/);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  test('applies variant class', () => {
    render(<TextField variant="contained" label="Variant" />);
    const input = screen.getByRole('textbox', { name: /variant/i });
    expect(input.className).toContain('contained');
  });

  test('disables input when disabled=true', () => {
    render(<TextField disabled label="Disabled field" />);
    const input = screen.getByRole('textbox', { name: /disabled field/i });
    expect(input).toBeDisabled();
  });

  test('applies custom className', () => {
    render(<TextField className="extra" label="Custom" />);
    const input = screen.getByRole('textbox', { name: /custom/i });
    expect(input.className).toContain('extra');
  });

  test('forwards ref to input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<TextField ref={ref} label="Ref field" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
