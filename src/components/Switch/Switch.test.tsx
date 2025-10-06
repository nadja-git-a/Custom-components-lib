import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Switch from './Switch';

import '@testing-library/jest-dom';

describe('<Switch />', () => {
  test('renders checkbox input and children label', () => {
    render(
      <Switch checked={false} onChange={() => {}}>
        Toggle me
      </Switch>,
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(screen.getByText('Toggle me')).toBeInTheDocument();
  });

  test('respects checked and disabled props', () => {
    render(<Switch checked disabled onChange={() => {}} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    expect(checkbox).toBeDisabled();
  });

  test('calls onChange when toggled', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <Switch checked={false} onChange={handleChange}>
        Switch
      </Switch>,
    );
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
