import Checkbox from './Checkbox';

export default {
  title: 'UI/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
  args: {
    label: 'Accept terms',
    helperText: 'Helper text',
  },
};

export const Playground = {};
