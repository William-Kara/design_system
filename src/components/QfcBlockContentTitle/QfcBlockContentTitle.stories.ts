import BlockImgTitle from './QfcBlockContentTitle.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import videoFile from '../../public/accueil-animation.mp4';

const meta: Meta<typeof BlockImgTitle> = {
  component: BlockImgTitle,
  title: 'Prototypes/BlockContentTitle',
  parameters: {},
  argTypes: {
    title: {
      type: 'string',
    },
    paragraph: {
      type: 'string',
    },
    buttonLabel: {
      type: 'string',
    },
    src: {
      type: 'string',
    },
    alt: {
      type: 'string',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

const video = {
  src: videoFile,
};

export const Primary: Story = {
  args: {
    title: 'Nous construisons votre nouvelle plateforme de e-learning.',
    paragraph:
      'Vous souhaitez acquérir de nouvelles compétences ou simplement vous perfectionner sur un sujet en particulier ?',
    tagList: ['Cybersécurité', 'Développement', 'Design'],
    buttonLabel: 'Découvrez notre pédagogie',
    src: video.src,
    alt: 'video presentation',
  },
};
