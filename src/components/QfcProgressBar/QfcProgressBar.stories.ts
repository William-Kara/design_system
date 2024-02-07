import QfcProgressBar from './QfcProgressBar.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof QfcProgressBar> = {
  component: QfcProgressBar,
  title: 'Elements/ProgressBar',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: '#F5DE8D',
    value: 10,
    title: 'Lesson Progression',
  },
};

export const ProgressBar50: Story = {
  args: {
    color: '#ffc0cb',
    value: 50,
    title: 'Lesson Progression',
  },
};

export const ProgressBar100: Story = {
  args: {
    color: '#44A146',
    value: 100,
    title: 'Lesson Progression',
  },
};
