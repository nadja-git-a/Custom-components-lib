import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

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

  test('merges className with module classes', () => {
    render(<Button className="extra">Extra</Button>);
    const btn = screen.getByRole('button', { name: /extra/i });
    expect(btn.className).toContain('root');
    expect(btn.className).toContain('extra');
  });

  test('passes native props (disabled, type, aria-*)', () => {
    render(
      <Button type="button" disabled aria-label="do action">
        A11y
      </Button>,
    );
    const btn = screen.getByRole('button', { name: /do action/i });
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute('type', 'button');
  });

  test('calls onClick when not disabled', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Press</Button>);
    await user.click(screen.getByRole('button', { name: /press/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        Nope
      </Button>,
    );
    await user.click(screen.getByRole('button', { name: /nope/i }));
    expect(onClick).not.toHaveBeenCalled();
  });
});
