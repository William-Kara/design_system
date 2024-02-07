import QfcSeparator from './QfcSeparator.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof QfcSeparator> = {
  component: QfcSeparator,
  title: 'Elements/Separator',
  argTypes: {
    thickness: {
      control: {
        type: 'text',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Icon: Story = {
  args: {
    thickness: '2px',
  },
};
