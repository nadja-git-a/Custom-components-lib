import { render, screen } from '@testing-library/react';
import React from 'react';

import Button from './Button';

import '@testing-library/jest-dom';

describe('Button', () => {
  test('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  test('has default classes: root + contained + medium', () => {
    render(<Button>Default</Button>);
    const btn = screen.getByRole('button', { name: /default/i });
    expect(btn.className).toContain('root');
    expect(btn.className).toContain('contained');
    expect(btn.className).toContain('medium');
  });

  test('applies variant and size', () => {
    render(
      <Button variant="outlined" size="large">
        Styled
      </Button>,
    );
    const btn = screen.getByRole('button', { name: /styled/i });
    expect(btn.className).toContain('outlined');
    expect(btn.className).toContain('large');
  });
});
