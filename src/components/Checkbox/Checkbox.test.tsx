import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Checkbox from './Checkbox';

import '@testing-library/jest-dom';

describe('Checkbox', () => {
  test('renders with label text', () => {
    render(<Checkbox>Accept terms</Checkbox>);

    const checkbox = screen.getByRole('checkbox', { name: /accept terms/i });
    expect(checkbox).toBeInTheDocument();
  });

  test('toggles checked state on click', async () => {
    const user = userEvent.setup();
    render(<Checkbox>Click me</Checkbox>);

    const checkbox = screen.getByRole('checkbox', { name: /click me/i }) as HTMLInputElement;

    expect(checkbox.checked).toBe(false);
    await user.click(checkbox);
    expect(checkbox.checked).toBe(true);
    await user.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });
});
