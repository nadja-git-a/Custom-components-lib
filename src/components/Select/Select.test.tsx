import { render, screen } from '@testing-library/react';
import React from 'react';

import Select from './Select';

import '@testing-library/jest-dom';

jest.mock('./Select.module.css', () => ({
  __esModule: true,
  default: { root: 'root' },
  root: 'root',
}));

describe('<Select />', () => {
  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Orange', value: 'orange' },
    { label: 'Banana', value: 3 },
  ];

  it('renders an <option> for each item in options', () => {
    render(<Select options={options} data-testid="select" />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Apple' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Orange' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Banana' })).toBeInTheDocument();
  });

  it('forwards standard props to the <select>', () => {
    render(
      <Select options={options} name="fruit" aria-label="Fruit Select" disabled data-foo="bar" />,
    );

    const select = screen.getByRole('combobox', { name: 'Fruit Select' });
    expect(select).toHaveAttribute('name', 'fruit');
    expect(select).toBeDisabled();
    expect(select).toHaveAttribute('data-foo', 'bar');
  });
});
