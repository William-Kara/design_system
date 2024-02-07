import Link from './QfcLink.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Elements/Link',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    href: {
      control: {
        type: 'text',
      },
    },
    isExternalLink: {
      control: {
        type: 'boolean',
      },
    },
    underline: {
      control: {
        type: 'boolean',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Link',
    href: 'https://www.qongzi.com',
    isExternalLink: false,
    underline: false,
  },
};

export const Icon: Story = {
  args: {
    label: 'Link',
    href: 'https://www.qongzi.com',
    isExternalLink: false,
    iconSrc: '/image-q.svg',
    underline: false,
  },
};

export const Inline: Story = {
  args: {
    label: 'Link',
    href: 'https://www.qongzi.com',
    isExternalLink: false,
    underline: true,
  },
};
