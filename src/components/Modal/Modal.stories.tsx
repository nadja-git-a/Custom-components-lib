import Modal from './Modal';

export default {
  title: 'UI/Modal',
  component: Modal,
  argsTypes: {
    open: { options: [true, false] },
    onClose: { action: 'changed' },
    children: { option: [] },
  },
  args: {
    open: true,
    children: ' This is a modal window! ',
  },
};

export const Playground = {};
