import CardSlider from './QfcCardSlider.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import videoFile from '../../public/timer-animation.mp4';

const meta: Meta<typeof CardSlider> = {
  component: CardSlider,
  title: 'Modules/CardSlider',
  argTypes: {
    cards: {
      defaultValue: [],
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    cards: [
      {
        title: 'Une plateforme accessible à tout moment',
        srcVideo: videoFile,
        icon: 'timer',
        size: 'medium',
        content:
          'Grâce à une plateforme accessible partout et à tout moment, vous pourrez retrouver vos formations en cours rapidement et reprendre là où vous en étiez.',
      },
      {
        title: 'Des parcours adaptés à vos besoins',
        icon: 'explorer',
        size: 'medium',
        content:
          'Nous vous offrirons une expérience d’apprentissage sur-mesure avec des parcours de formation adaptés à vos besoins. Chaque module sera pensé de telle manière à ce que vous ayez uniquement accès à l’essentiel.',
      },
      {
        title: 'De la théorie et surtout de la mise en pratique',
        icon: 'explorer',
        size: 'medium',
        content:
          'Parce que la théorie ça se pratique, nous avons décider de vous proposer de nombreux exercices par module et ainsi de vous faire gagner en confiance. ',
      },
    ],
  },
};
