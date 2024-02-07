import Toggle from './QfcToggle.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Elements/Buttons/Toggle',
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    modelValue: {
      control: {
        type: 'boolean',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Checkbox',
    modelValue: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    ...Primary.args,
    modelValue: true,
  },
};

export const CheckedAndDisabled: Story = {
  args: {
    ...Primary.args,
    modelValue: true,
    disabled: true,
  },
};
