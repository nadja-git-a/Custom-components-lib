import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Checkbox from './Checkbox';

import '@testing-library/jest-dom';

describe('Checkbox — main props', () => {
  test('renders checkbox with label', () => {
    render(<Checkbox label="Agree" />);
    const input = screen.getByRole('checkbox', { name: /agree/i });
    expect(input).toBeInTheDocument();
  });

  test('works with checked (controlled) + onChange', async () => {
    const onChange = jest.fn();
    const user = userEvent.setup();
    render(<Checkbox checked onChange={onChange} label="Controlled" />);
    const input = screen.getByRole('checkbox', { name: /controlled/i }) as HTMLInputElement;

    expect(input.checked).toBe(true);
    await user.click(input);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(input.checked).toBe(true);
  });

  test('disabled — cannot be clicked and shows helperText', async () => {
    const onChange = jest.fn();
    const user = userEvent.setup();
    render(<Checkbox disabled onChange={onChange} label="Disabled" helperText="Not available" />);
    const input = screen.getByRole('checkbox', { name: /disabled/i });
    expect(input).toBeDisabled();
    await user.click(input);
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByText('Not available')).toHaveAttribute('data-disabled', 'true');
  });

  test('error — adds aria-invalid and shows helperText', () => {
    render(<Checkbox error helperText="Error message" label="Error" />);
    const input = screen.getByRole('checkbox', { name: /error/i });
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  test('ref points to input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Checkbox ref={ref} label="Ref test" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  test('uses provided id and has type="checkbox"', () => {
    render(<Checkbox id="my-id" label="ID test" />);
    const input = screen.getByRole('checkbox', { name: /id test/i });
    expect(input).toHaveAttribute('id', 'my-id');
    expect(input).toHaveAttribute('type', 'checkbox');
  });
});
