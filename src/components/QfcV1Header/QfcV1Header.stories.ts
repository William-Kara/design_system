import V1Header from './QfcV1Header.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import Sidebar from '../QfcSidebar/QfcSidebar.vue';
import { Primary as SidebarPrimary } from '../QfcSidebar/QfcSidebar.stories';

const meta: Meta<typeof V1Header> = {
  component: V1Header,
  title: 'Modules/Headers/Header(v1)',
  argTypes: {
    isSidebarOpen: {
      control: { type: 'boolean', required: false },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isSidebarOpen: false,
    userMenu: {
      name: 'John Doe',
      links: [
        { link: '/#', title: 'Paramètre du compte' },
        { link: '/#', title: 'Profil' },
        { link: '/#', title: 'Déconnexion' },
      ],
      avatar: '/avatar.svg',
    },
    notificationButton: {
      to: '/',
      isActive: true,
      isNotification: true,
    },
  },
};

export const HeaderAndSidebar: Story = {
  render: (args) => ({
    components: { V1Header, Sidebar },
    setup() {
      return { args };
    },
    template: '<V1Header v-bind="args"></V1Header><Sidebar v-bind="args"/>',
  }),
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    ...Primary.args,
    ...SidebarPrimary.args,
    isOpen: false,
    isSidebarOpen: false,
  },
};
