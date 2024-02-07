import QfcBanner from './QfcBanner.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof QfcBanner> = {
  component: QfcBanner,
  title: 'Elements/Banner',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const WithImage: Story = {
  args: {
    imgSrc: '/Q_logo.svg',
  },
};
