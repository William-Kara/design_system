import QfcCheckbox from './QfcCheckbox.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof QfcCheckbox> = {
  component: QfcCheckbox,
  title: 'Elements/Buttons/Checkbox',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      default: 'Checkbox',
    },
    value: {
      default: { test: 'test' },
    },
    modelValue: {
      default: [],
    },
    disabled: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
    },
    isLarge: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;
export const CheckboxStory: Story = {
  args: {
    label: 'Checkbox',
    modelValue: false,
    value: true,
  },
};

export const Disabled: Story = {
  args: {
    ...CheckboxStory,
    disabled: true,
  },
};
