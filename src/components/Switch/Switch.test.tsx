import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Switch from './Switch';

import '@testing-library/jest-dom';

describe('Switch — main props', () => {
  test('renders input[type=checkbox] and label text', () => {
    render(<Switch label="Wi-Fi" />);
    const checkbox = screen.getByRole('checkbox', { name: /wi-fi/i });
    expect(checkbox).toBeInTheDocument();
  });

  test('applies checked and disabled props', () => {
    render(<Switch checked disabled onChange={() => {}} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    expect(checkbox).toBeDisabled();
  });

  test('calls onChange when clicked (controlled)', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<Switch checked={false} onChange={handleChange} label="Switch" />);
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('renders helperText when provided', () => {
    render(<Switch helperText="Help info" />);
    expect(screen.getByText('Help info')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(<Switch className="extra-class" label="Network" />);
    const label = screen.getByText('Network').closest('label');
    expect(label?.className).toContain('extra-class');
  });

  test('forwards ref to input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Switch ref={ref} label="Ref test" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
