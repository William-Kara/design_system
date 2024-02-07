import BackToTop from './QfcBackToTop.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof BackToTop> = {
  component: BackToTop,
  title: 'Elements/BackToTop',
  argTypes: {},
  decorators: [
    () => ({
      template: '<div style="height: 100em;"><h1>Scroll down to see the button</h2> <story/></div>',
    }),
  ],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
