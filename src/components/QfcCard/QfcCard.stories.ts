import Card from './QfcCard.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import videoFile from '../../public/timer-animation.mp4';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Modules/Card',
  argTypes: {
    size: {
      type: { name: 'string', required: false },
      defaultValue: 'fullwidth',
    },
    icon: {
      type: { name: 'string', required: true },
      defaultValue: 'visibility',
    },
    srcVideo: {
      type: { name: 'string', required: false },
    },
    title: {
      type: { name: 'string', required: false },
      defaultValue: 'Title',
    },
    content: {
      type: { name: 'string', required: false },
      defaultValue: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'fullwidth',
    title: 'Une plateforme accessible à tout moment',
    icon: 'explore',
    content:
      'Grâce à une plateforme accessible partout et à tout moment, vous pourrez retrouver vos formations en cours rapidement et reprendre là où vous en étiez.',
  },
};

export const Medium: Story = {
  args: {
    ...Primary.args,
    size: 'medium',
    icon: 'timer',
  },
};

export const VideoIcon: Story = {
  args: {
    srcVideo: videoFile,
    size: 'medium',
    title: 'Une plateforme accessible à tout moment',
    content:
      'Grâce à une plateforme accessible partout et à tout moment, vous pourrez retrouver vos formations en cours rapidement et reprendre là où vous en étiez.',
  },
};
