import QfcFooter from './QfcFooter.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof QfcFooter> = {
  component: QfcFooter,
  title: 'Modules/Footer',
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
        {
          label: 'Politique de confidentialité',
          to: '/',
          isExternalLink: false,
          isButton: false,
        },
        {
          label: 'Gestion des cookies',
          to: '/',
          isExternalLink: false,
          isButton: false,
        },
      ],
    },
    secondLinks: {
      title: 'Réseaux sociaux',
      text: 'Suivez-nous pour ne rien manquer !',
      links: [
        {
          to: '/',
          iconSrc: '/twitter.svg',
          isButton: false,
        },
        {
          to: '/',
          iconSrc: '/linkedin.svg',
          isButton: false,
        },
      ],
    },
    thirdLinks: {
      title: 'Contact',
      text: 'Vous avez une question ?',
      links: [
        {
          label: 'Contactez-nous',
          to: '/',
          isButton: true,
        },
      ],
    },
  },
};
