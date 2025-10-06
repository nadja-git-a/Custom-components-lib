import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import TextField from './TextField';

import '@testing-library/jest-dom';

describe('TextField', () => {
  test('renders input and helper text', () => {
    render(<TextField helperText="Helper" aria-label="Field" />);
    const input = screen.getByRole('textbox', { name: /field/i });
    expect(input).toBeInTheDocument();
    expect(screen.getByText('Helper')).toBeInTheDocument();
  });

  test('applies error state: class, aria-invalid and helper "Error"', () => {
    render(<TextField error helperText="ignored" aria-label="Email" />);
    const input = screen.getByRole('textbox', { name: /email/i });
    expect(input.className).toContain('error');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  test('calls onChange when typing', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(<TextField helperText="H" aria-label="Type" onChange={onChange} />);
    await user.type(screen.getByRole('textbox', { name: /type/i }), 'abc');
    expect(onChange).toHaveBeenCalled();
  });
});
