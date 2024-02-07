import QfcNav from './QfcNav.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof QfcNav> = {
  component: QfcNav,
  title: 'Elements/Nav',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    centerNavItems: [
      { label: 'Title 1', to: '/' },
      { label: 'Title 2', to: '/' },
      { label: 'Title 3', to: '/' },
      { label: 'Title 4', to: '/' },
    ],
  },
};
