import NotificationBox from './QfcNotificationBox.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof NotificationBox> = {
  component: NotificationBox,
  title: 'Modules/Notifications/NotificationBox',
  argTypes: {
    type: {
      options: ['success', 'danger', 'warning', 'info', 'none'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'success',
  },
};
