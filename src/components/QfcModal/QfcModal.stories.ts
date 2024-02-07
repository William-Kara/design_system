import Modal from './QfcModal.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Modules/Modal',
  argTypes: {
    img: {
      type: { name: 'string', required: false },
      defaultValue: '/logo.svg',
    },
    title: {
      type: { name: 'string', required: false },
      defaultValue: 'Félicitations, vous êtes inscrit pour devenir testeur !',
    },
    content: {
      type: { name: 'string', required: false },
      defaultValue:
        'Nous vous remercions pour votre inscription. Vous serez informés par e-mail de la démarche à suivre pour tester nos formations et notre plateforme dans les mois à suivre.',
    },
    isOpen: {
      type: { name: 'boolean', required: true },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
  },
};
