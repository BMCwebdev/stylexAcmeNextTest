import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PageFooter } from '../../components/PageFooter';

const meta = {
  title: 'Page Layout/PageFooter',
  component: PageFooter,
  argTypes: {
    children: {
      control: 'text',
      description: 'Content to be rendered inside the footer',
    },
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The `PageFooter` component is used to render a footer section in the page layout. It accepts `children` as a prop to display any content within the footer.',
      },
    },
  },
} satisfies Meta<typeof PageFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: 'Default footer content',
  },
} satisfies Story;

export const WithCustomContent = {
  args: {
    children: (
      <>
        <span>© 2024 Bonterra</span>
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
      </>
    ),
  },
} satisfies Story;
