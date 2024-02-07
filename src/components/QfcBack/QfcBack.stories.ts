import QfcBack from './QfcBack.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof QfcBack> = {
  component: QfcBack,
  title: 'Elements/Back',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
