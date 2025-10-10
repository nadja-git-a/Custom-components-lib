import { render, screen } from '@testing-library/react';
import React from 'react';

import Modal from './Modal';

import '@testing-library/jest-dom';

jest.mock('../Button/Button', () => ({
  __esModule: true,
  default: (
    props: React.ButtonHTMLAttributes<HTMLButtonElement> & { children?: React.ReactNode },
  ) => <button {...props} />,
}));

beforeAll(() => {
  if (!HTMLDialogElement.prototype.showModal) {
    HTMLDialogElement.prototype.showModal = jest.fn();
  }
  if (!HTMLDialogElement.prototype.close) {
    HTMLDialogElement.prototype.close = jest.fn();
  }
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Modal — main props', () => {
  test('calls showModal() when open=true and close() when open=false', () => {
    const { rerender } = render(
      <Modal open onClose={() => {}}>
        x
      </Modal>,
    );
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();

    rerender(
      <Modal open={false} onClose={() => {}}>
        x
      </Modal>,
    );
    expect(HTMLDialogElement.prototype.close).toHaveBeenCalled();
  });

  test('forwards ref to dialog element', () => {
    const ref = React.createRef<HTMLDialogElement>();
    render(
      <Modal open onClose={() => {}} ref={ref}>
        x
      </Modal>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDialogElement);
  });
});
