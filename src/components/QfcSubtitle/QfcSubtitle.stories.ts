import Subtitle from './QfcSubtitle.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Subtitle> = {
  component: Subtitle,
  title: 'Elements/Heading/Subtitle',
  argTypes: {
    level: {
      control: {
        type: ['number'],
      },
    },
    text: {
      control: {
        type: 'text',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Subtitle1: Story = {
  args: {
    text: 'Subtitle 1',
    visualLevel: 1,
  },
};

export const Subtitle2: Story = {
  args: {
    text: 'Subtitle 2',
    visualLevel: 2,
  },
};

export const Subtitle3: Story = {
  args: {
    text: 'Subtitle 3',
    visualLevel: 3,
  },
};

export const Subtitle4: Story = {
  args: {
    text: 'Subtitle 4',
    visualLevel: 4,
  },
};
