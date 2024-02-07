import QfcTextArea from './QfcTextArea.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof QfcTextArea> = {
  component: QfcTextArea,
  title: 'Elements/Inputs/TextArea',
  argTypes: {
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
    minLength: {
      type: { name: 'number', required: false },
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
};
export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    modelValue: '',
    label: 'Label',
    errorMessage: '',
    maxLength: 255,
    minLength: 0,
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

export const Required: Story = {
  args: {
    ...Primary.args,
    isRequired: true,
  },
};
