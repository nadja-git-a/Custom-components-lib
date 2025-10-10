import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Button from './Button';

import '@testing-library/jest-dom';

describe('Button props', () => {
  test('merges provided className with computed classes', () => {
    render(<Button className="extra-class">Merge</Button>);
    const btn = screen.getByRole('button', { name: /merge/i });
    expect(btn.className).toContain('root');
    expect(btn.className).toContain('contained');
    expect(btn.className).toContain('medium');
    expect(btn.className).toContain('extra-class');
  });

  test('spreads arbitrary DOM attributes (data-*, aria-*)', () => {
    render(
      <Button data-testid="btn" aria-label="Aria label">
        A11y
      </Button>,
    );
    const btn = screen.getByTestId('btn');
    expect(btn).toHaveAttribute('aria-label', 'Aria label');
  });

  test('applies provided type attribute', () => {
    render(<Button type="submit">Submit</Button>);
    const btn = screen.getByRole('button', { name: /submit/i });
    expect(btn).toHaveAttribute('type', 'submit');
  });

  test('handles onClick when enabled', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button', { name: /click/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>,
    );
    const btn = screen.getByRole('button', { name: /disabled/i });
    expect(btn).toBeDisabled();
    fireEvent.click(btn);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('forwards ref to the underlying button element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.tagName).toBe('BUTTON');
    const btn = screen.getByRole('button', { name: /ref/i });
    expect(ref.current).toBe(btn);
  });

  test.each([
    ['text' as const, 'small' as const],
    ['text' as const, 'large' as const],
    ['outlined' as const, 'small' as const],
    ['outlined' as const, 'large' as const],
    ['contained' as const, 'small' as const],
    ['contained' as const, 'large' as const],
  ])('applies classes for variant=%s and size=%s', (variant, size) => {
    render(
      <Button variant={variant} size={size}>
        Combo
      </Button>,
    );
    const btn = screen.getByRole('button', { name: /combo/i });
    expect(btn.className).toContain(variant);
    expect(btn.className).toContain(size);
    expect(btn.className).toContain('root');
  });
});
