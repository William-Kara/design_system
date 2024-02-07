import QfcSearchBar from './QfcSearchBar.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof QfcSearchBar> = {
  component: QfcSearchBar,
  title: 'Elements/SearchBar',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
