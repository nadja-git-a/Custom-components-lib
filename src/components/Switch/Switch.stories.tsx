import Switch from './Switch';

export default {
  title: 'UI/Switch',
  component: Switch,
  argsTypes: {
    checked: { options: [true, false], control: { type: 'radio' } },
    onChange: { action: 'changed' },
    disabled: { options: [true, false], control: { type: 'radio' } },
    className: { control: false },
  },
  args: {
    label: 'Accept terms',
    helperText: 'Helper text',
    disabled: false,
  },
};

export const Playground = {};
