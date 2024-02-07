import QfcButton from './QfcButton.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof QfcButton> = {
  component: QfcButton,
  title: 'Elements/Buttons/Button',
  argTypes: {
    label: {
      type: { name: 'string', required: true },
      defaultValue: 'Label',
    },
    icon: {
      type: { name: 'string', required: false },
      defaultValue: '',
    },
    secondary: {
      type: { name: 'boolean', required: false },
    },
    isDisabled: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    isDisabled: false,
    secondary: false,
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    ...Primary.args,
    icon: 'star',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    isDisabled: true,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: 'Secondary Button',
    secondary: true,
    size: 'medium',
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    ...Secondary.args,
    icon: 'star',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    ...Secondary.args,
    isDisabled: true,
    size: 'small',
  },
};
