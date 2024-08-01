import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '../components/Separator';

const meta = {
  component: Separator,
  decorators: [
    (Story) => (
      <div style={{ height: '300px', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A separator component to divide content horizontally or vertically.',
      },
    },
  },
  tags: ['autodocs'], // This enables automatic documentation
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
} satisfies Story;

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
} satisfies Story;
