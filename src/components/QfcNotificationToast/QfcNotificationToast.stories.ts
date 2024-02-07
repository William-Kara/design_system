import NotificationToast from './QfcNotificationToast.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof NotificationToast> = {
  component: NotificationToast,
  title: 'Modules/Notifications/NotificationToast',
  argTypes: {
    type: {
      options: ['success', 'danger', 'warning', 'info'],
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    inline: {
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'info',
    title: 'Title exemple',
    description: 'Lorem exemple',
    inline: true,
  },
};

export const WithLongText: Story = {
  args: {
    ...Primary.args,
    title: 'Title exemple with long text',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget lacinia lacinia, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc. Donec euismod, nisl eget lacinia lacinia, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc.',
  },
};
