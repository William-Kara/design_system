import QfcFooterForm from './QfcFooterForm.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof QfcFooterForm> = {
  component: QfcFooterForm,
  title: 'Modules/FooterForm',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    firstLinks: {
      links: [
        {
          label: 'Mentions légales',
          to: '/',
          isExternalLink: false,
          isButton: false,
        },
      ],
    },
    secondLinks: {
      links: [
        {
          label: 'Politique de confidentialité',
          to: '/',
          isExternalLink: false,
          isButton: false,
        },
      ],
    },
    thirdLinks: {
      links: [
        {
          label: 'Gestion des cookies',
          to: '/',
          isExternalLink: false,
          isButton: false,
        },
      ],
    },
  },
};
