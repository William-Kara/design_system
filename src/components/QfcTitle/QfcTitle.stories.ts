import Title from './QfcTitle.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Title> = {
  component: Title,
  title: 'Elements/Heading/Title',
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

export const H1: Story = {
  args: {
    text: 'Title 1',
    level: 1,
    visualLevel: 1,
  },
};

export const H2: Story = {
  args: {
    text: 'Title 2',
    level: 2,
    visualLevel: 2,
  },
};

export const H3: Story = {
  args: {
    text: 'Title 3',
    level: 3,
    visualLevel: 3,
  },
};
