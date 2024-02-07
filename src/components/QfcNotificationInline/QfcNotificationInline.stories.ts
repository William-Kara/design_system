import NotificationInline from './QfcNotificationInline.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof NotificationInline> = {
  component: NotificationInline,
  title: 'Modules/Notifications/NotificationInline',
  argTypes: {
    timeAgo: String,
    read: Boolean,
    button: String,
    description: String,
    tag: String,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    timeAgo: '1 hour ago',
    read: false,
    button: 'Secondary button',
    description: 'Information requiring notification',
    tag: 'Tag filter',
  },
};
