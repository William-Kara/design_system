import Tag from './QfcTag.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Elements/Tag',
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Étiquette',
  },
};
