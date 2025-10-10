import Select from './Select';

export default {
  title: 'UI/Select',
  component: Select,
  argTypes: {
    disabled: { control: 'boolean' },
    className: { control: false },
    variant: { options: ['text', 'contained', 'outlined'], control: { type: 'radio' } },
  },
  args: {
    label: 'Accept terms',
    helperText: 'Helper text',
    options: [
      { label: 'pink', value: 'color-pink' },
      { label: 'blue', value: 'color-blue' },
      { label: 'green', value: 'color-green' },
    ],
  },
};

export const Playground = {};
