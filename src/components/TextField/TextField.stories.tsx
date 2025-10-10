import type { Meta, StoryObj } from '@storybook/react';

import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'UI/TextField',
  component: TextField,
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    type: {
      options: ['text', 'email', 'password', 'number', 'search'],
      control: { type: 'select' },
    },
    placeholder: { control: 'text' },
    onChange: { action: 'change' },
    onFocus: { action: 'focus' },
    onBlur: { action: 'blur' },
    variant: { options: ['text', 'contained', 'outlined'], control: { type: 'radio' } },
  },
  args: {
    label: 'Accept terms',
    helperText: 'Helper text',
    error: false,
    disabled: false,
    type: 'text',
    placeholder: 'Enter text',
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Playground: Story = {};
