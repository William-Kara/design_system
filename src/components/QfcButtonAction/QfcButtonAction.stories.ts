import ButtonAction from './QfcButtonAction.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ButtonAction> = {
  component: ButtonAction,
  title: 'Elements/ButtonAction',
  argTypes: {
    icon: { control: 'text', required: true },
    label: { control: 'text', required: true },
    to: { control: 'text' },
    isNotification: { control: 'boolean' },
    isActive: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Share: Story = {
  args: {
    icon: 'share',
    label: 'share',
    to: '#',
    isNotification: false,
    isActive: false,
  },
};
export const Back: Story = {
  args: {
    icon: 'arrow_back',
    label: 'back',
    to: '/docs/elements-buttonaction--docs',
    isNotification: false,
    isActive: false,
  },
};
export const Notifications: Story = {
  args: {
    icon: 'notifications',
    label: 'notifications',
    to: '',
    isNotification: true,
    isActive: false,
  },
};
