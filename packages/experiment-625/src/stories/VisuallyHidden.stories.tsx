import type { Meta, StoryObj } from '@storybook/react';
import { VisuallyHidden } from '../components/VisuallyHidden';

const meta = {
  component: VisuallyHidden,
  title: 'VisuallyHidden',
  parameters: {
    controls: { exclude: /^(?!children$|elementType$|isFocusable$|stitches$)/ },
    docs: {
      description: {
        component: 'VisuallyHidden is a utility component that can be used to hide its children visually, while keeping them visible to screen readers and other assistive technology. It accepts a `stitches` prop for custom StyleX styles object.',
      },
    },
  },
  argTypes: {
    children: { control: 'text', description: 'The content to visually hide.' },
    elementType: { control: 'text', description: 'The element type for the container.', defaultValue: 'div' },
    isFocusable: { control: 'boolean', description: 'Whether the element should become visible on focus.' },
    stitches: { control: 'object', description: 'Custom styles to apply to the component.' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VisuallyHidden>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: 'Hidden content',
    elementType: 'div',
    isFocusable: false,
  },
} satisfies Story;

export const Focusable = {
  args: {
    children: 'Focusable hidden content',
    elementType: 'span',
    isFocusable: true,
  },
} satisfies Story;

export const WithCustomStyles = {
  args: {
    children: 'Hidden content with custom styles',
    elementType: 'div',
    isFocusable: false,
    stitches: {
      backgroundColor: 'lightgrey',
      padding: '10px',
    },
  },
} satisfies Story;
