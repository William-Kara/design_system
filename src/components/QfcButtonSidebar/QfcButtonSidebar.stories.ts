import ButtonSidebar from './QfcButtonSidebar.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ButtonSidebar> = {
  component: ButtonSidebar,
  title: 'Elements/ButtonSidebar',
  argTypes: {
    icon: { control: 'text', required: true },
    label: { control: 'text', required: true },
    to: { control: 'text', required: true },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: 'space_dashboard',
    label: 'Dashboard',
    to: '/',
  },
};
