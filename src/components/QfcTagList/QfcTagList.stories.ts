import TagList from './QfcTagList.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof TagList> = {
  component: TagList,
  title: 'Modules/TagList',
  argTypes: {
    tagList: {
      defaultValue: ['tag1', 'tag2', 'tag3'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tagList: ['tag1', 'tag2', 'tag3'],
  },
};
