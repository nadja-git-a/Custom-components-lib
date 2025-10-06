import Checkbox from './Checkbox';

export default {
  title: 'UI/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
  args: {
    children: 'Accept terms',
  },
};

export const Playground = {};
