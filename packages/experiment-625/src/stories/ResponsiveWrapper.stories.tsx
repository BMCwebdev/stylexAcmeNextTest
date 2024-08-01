import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ResponsiveWrapper } from '../components/ResponsiveWrapper';

const meta: Meta<typeof ResponsiveWrapper> = {
  title: 'ResponsiveWrapper',
  component: ResponsiveWrapper,
  tags: ['autodocs'],
  argTypes: {
    hideAbove: {
      control: 'select',
      description: 'Hide the element above the specified breakpoint',
    },
    hideBelow: {
      control: 'select',
      description: 'Hide the element below the specified breakpoint',
    },
    showAbove: {
      control: 'select',
      description: 'Show the element above the specified breakpoint',
    },
    showBelow: {
      control: 'select',
      description: 'Show the element below the specified breakpoint',
    },
    children: {
      description: 'Content of the ResponsiveWrapper',
    },
    stitches: {
      description: 'Custom stylex style object to apply to the component',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The \`ResponsiveWrapper\` component is used to conditionally render its children based on the provided media query props which map to the Stitch breakpoints.

### Props
- \`hideAbove\`: Hides the element above the specified breakpoint.
- \`hideBelow\`: Hides the element below the specified breakpoint.
- \`showAbove\`: Shows the element above the specified breakpoint.
- \`showBelow\`: Shows the element below the specified breakpoint.
- \`children\`: The content to render within the wrapper.

### Example Usage

\`\`\`jsx
<ResponsiveWrapper hideAbove="sm">
  <span>Hidden Above Small</span>
</ResponsiveWrapper>
<ResponsiveWrapper hideBelow="md">
  <span>Hidden Below Medium</span>
</ResponsiveWrapper>
<ResponsiveWrapper showAbove="lg">
  <span>Shown Above Large</span>
</ResponsiveWrapper>
<ResponsiveWrapper showBelow="md">
  <span>Shown Below Medium</span>
</ResponsiveWrapper>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HideAboveLarge: Story = {
  args: {
    hideAbove: 'lg',
    children: 'This text is hidden above large breakpoints',
  },
} satisfies Story;

export const HideBelowMedium: Story = {
  args: {
    hideBelow: 'md',
    children: 'This text is hidden below medium breakpoints',
  },
} satisfies Story;

export const ShowAboveLarge: Story = {
  args: {
    showAbove: 'lg',
    children: 'This text is shown above large breakpoints',
  },
} satisfies Story;

export const ShowBelowMedium: Story = {
  args: {
    showBelow: 'md',
    children: 'This text is shown below medium breakpoints',
  },
} satisfies Story;

export const CombinedExample: Story = {
  args: {
    children: (
      <>
        <ResponsiveWrapper hideAbove="sm">
          <span style={{ backgroundColor: '#007BFF', color: 'white', padding: '5px' }}>Hidden Above Small</span>
        </ResponsiveWrapper>
        <ResponsiveWrapper hideBelow="md">
          <span style={{ backgroundColor: '#28A745', color: 'white', padding: '5px' }}>Hidden Below Medium</span>
        </ResponsiveWrapper>
        <ResponsiveWrapper showAbove="lg">
          <span style={{ backgroundColor: '#FFC107', color: 'white', padding: '5px' }}>Shown Above Large</span>
        </ResponsiveWrapper>
        <ResponsiveWrapper showBelow="md">
          <span style={{ backgroundColor: '#DC3545', color: 'white', padding: '5px' }}>Shown Below Medium</span>
        </ResponsiveWrapper>
      </>
    ),
  },
} satisfies Story;
