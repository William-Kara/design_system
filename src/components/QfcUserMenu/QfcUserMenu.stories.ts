import QfcUserMenu from './QfcUserMenu.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof QfcUserMenu> = {
  component: QfcUserMenu,
  title: 'Elements/UserMenu',
  argTypes: {
    links: {
      defaultValue: [],
      required: true,
    },
    name: { control: 'text', required: true },
    avatar: { control: 'text', required: true },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    links: [
      {
        link: '#',
        title: 'Paramètre du compte',
      },
      {
        link: '#',
        title: 'Formule',
      },
      {
        link: '#',
        title: 'Se déconnecter',
      },
    ],
    name: 'John Doe',
    avatar: '/avatar.svg',
  },
};
