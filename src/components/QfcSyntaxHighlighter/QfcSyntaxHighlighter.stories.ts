import QfcBanner from './QfcSyntaxHighlighter.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof QfcBanner> = {
  component: QfcBanner,
  title: 'Elements/SyntaxHighlighter',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
