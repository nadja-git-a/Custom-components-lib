import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: { options: ['text', 'contained', 'outlined'], control: { type: 'radio' } },
    size: { options: ['small', 'medium', 'large'], control: { type: 'radio' } },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  args: { variant: 'contained', size: 'medium', children: 'Button' },
};

export const Playground = {};
