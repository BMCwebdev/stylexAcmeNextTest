import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../components/Avatar";
import type { AvatarProps } from "../components/Avatar";

const meta = {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    src: { control: 'text' },
    fallback: { control: 'text' },
  },
  args: {
    size: 'lg',
    src: 'https://picsum.photos/100',
    fallback: 'A',
  },
  parameters: {
    controls: {
      include: ['size', 'src', 'fallback', 'stitches', 'altText'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<AvatarProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const WithFallback: Story = {
  args: {
    src: '',
    fallback: 'H',
  },
};
