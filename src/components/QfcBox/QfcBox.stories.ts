import Box from './QfcBox.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Box> = {
  component: Box,
  title: 'Elements/Box',
  argTypes: {
    size: {
      type: { name: 'string', required: false },
      defaultValue: 'fullwidth',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'fullwidth',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};
