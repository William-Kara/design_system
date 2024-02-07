import QfcTextField from './QfcTextField.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof QfcTextField> = {
  component: QfcTextField,
  title: 'Elements/Inputs/TextField',
  argTypes: {
    type: {
      control: 'select',
      defaultValue: 'text',
      options: ['text', 'password', 'email', 'number'],
    },
    label: {
      type: { name: 'string', required: true },
      defaultValue: 'Label',
    },
    modelValue: {
      type: { name: 'string', required: true },
      defaultValue: '',
    },
    errorMessage: {
      type: { name: 'string', required: false },
    },
    maxLength: {
      type: { name: 'number', required: false },
    },
    min: {
      type: { name: 'number', required: false },
    },
    max: {
      type: { name: 'number', required: false },
    },
    step: {
      type: { name: 'number', required: false },
    },
    pattern: {
      type: { name: 'string', required: false },
    },
    isRequired: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
    },
    isDisabled: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
    },
    backgroundColor: {
      type: { name: 'string', required: false },
    },
  },
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#232323' }],
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    modelValue: '',
    type: 'text',
    label: 'Label',
    errorMessage: '',
    maxLength: 255,
    min: 0,
    max: 255,
    step: 1,
    pattern: '',
    isDisabled: false,
    isRequired: false,
    backgroundColor: '#232323',
  },
};

export const Error: Story = {
  args: {
    ...Primary.args,
    errorMessage: 'Error',
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    isDisabled: true,
  },
};

export const Password: Story = {
  args: {
    ...Primary.args,
    type: `password`,
  },
};

export const Required: Story = {
  args: {
    ...Primary.args,
    isRequired: true,
  },
};
