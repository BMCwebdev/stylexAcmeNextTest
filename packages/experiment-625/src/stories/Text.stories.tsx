import React from 'react';
import { Text } from '../components/Text';

export default {
  title: 'Text',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The `Text` component is used to render text with various styles such as size, color, and alignment.',
      },
    },
    controls: {
      include: ['children', 'size', 'color', 'textAlign', 'elementType'],
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'xlarge'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'inverse', 'secondary', 'disabled'],
    },
    textAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify', 'inherit'],
    },
    elementType: {
      control: { type: 'select' },
      options: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    looksLike: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    visuallyHidden: {
      control: 'boolean',
    },
    weight: {
      control: { type: 'select' },
      options: ['300', '400', '500', '600', '700'],
    },
  },
  tags: ['autodocs'],
};

// Basic text usage
export const Basic = {
  args: {
    children: 'Basic Text',
    size: 'large',
  },
};

// Customizing size, color, and alignment
export const Styled = {
  args: {
    children: 'Styled Text',
    size: 'large',
    color: 'secondary',
    textAlign: 'center',
  },
};

// Heading example
export const Heading = {
  args: {
    children: 'Heading Text',
    elementType: 'h2',
    looksLike: 'h1',
  },
};

// Inverse color mode
export const Inverse = (args) => (
  <div style={{ backgroundColor: 'black' }}>
    <Text {...args} />
  </div>
);
Inverse.args = {
  children: 'Inverse Mode',
  color: 'inverse',
};

// Disabled state
export const Disabled = {
  args: {
    children: 'Disabled Text',
    color: 'disabled',
  },
};
