import Sidebar from './QfcSidebar.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'Modules/Sidebar',
  argTypes: {
    items: {
      control: 'array',
      required: true,
      table: {
        type: {
          summary: 'Array<{ icon: string, label: string, to: string }>',
          detail: `
            {
              icon: string;
              label: string;
              to: string;
            }[]
          `,
        },
      },
    },
    isOpen: { control: 'boolean', required: true },
    screenId: {
      control: 'text',
      required: false,
      description: 'The ID of the main screen element.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      {
        icon: 'space_dashboard',
        label: 'Dashboard',
        to: '/',
      },
      {
        icon: 'people',
        label: 'FAQ/Communauté Discord',
        to: '/',
      },
      {
        icon: 'settings',
        label: 'Settings',
        to: '/',
      },
    ],
    isOpen: true,
    screenId: 'storybook-root',
  },
};
