import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Modal from './Modal';

import '@testing-library/jest-dom';

jest.mock('../Button/Button', () => ({
  __esModule: true,
  default: (
    props: React.ButtonHTMLAttributes<HTMLButtonElement> & { children?: React.ReactNode },
  ) => <button {...props} />,
}));

describe('<Modal />', () => {
  test('renders <dialog> and children when open', () => {
    render(
      <Modal open onClose={jest.fn()}>
        <p>Content</p>
      </Modal>,
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('clicking Close calls onClose', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();

    render(
      <Modal open onClose={onClose}>
        body
      </Modal>,
    );

    await user.click(screen.getByRole('button', { name: /close/i }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
