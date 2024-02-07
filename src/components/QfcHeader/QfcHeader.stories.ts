import QfcHeader from './QfcHeader.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof QfcHeader> = {
  component: QfcHeader,
  title: 'Modules/Headers/Header',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    centerNavItems: [
      { label: 'Title 1', to: '/' },
      { label: 'Title 2', to: '/' },
      { label: 'Title 3', to: '/' },
    ],
    rightNavItems: [{ label: 'Link', to: 'https://test', isExternal: true }],
  },
};
