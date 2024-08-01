import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader, StartContainer, EndContainer } from '../../components/PageHeader'; // Update the path if needed
import { ResponsiveWrapper } from '../../components/ResponsiveWrapper'; // Update the path if needed

const meta: Meta<typeof PageHeader> = {
  title: 'Page Layout/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`PageHeader\` component is used to create a header for your page. It requires both \`StartContainer\` and \`EndContainer\` as children. The component \`ResponsiveWrapper\` should be used to wrap any items you want to place into the header. You can use the \`hideBelow\` and \`showAbove\` props on \`ResponsiveWrapper\` to control when items are displayed based on the screen size.

## Usage

\`\`\`tsx

const App = () => (
  <PageHeader>
    <StartContainer>
      <ResponsiveWrapper hideBelow="sm">
        <span style={{ backgroundColor: '#007BFF', color: 'white', padding: '5px' }}>Start Item 1</span>
      </ResponsiveWrapper>
      <ResponsiveWrapper showAbove="md">
        <span style={{ backgroundColor: '#28A745', color: 'white', padding: '5px' }}>Start Item 2</span>
      </ResponsiveWrapper>
    </StartContainer>
    <EndContainer>
      <ResponsiveWrapper>
        <span style={{ backgroundColor: '#FFC107', color: 'white', padding: '5px' }}>End Item 1</span>
      </ResponsiveWrapper>
      <ResponsiveWrapper>
        <span style={{ backgroundColor: '#DC3545', color: 'white', padding: '5px' }}>End Item 2</span>
      </ResponsiveWrapper>
    </EndContainer>
  </PageHeader>
);
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: 'object',
      description: 'Content of the PageHeader, typically includes StartContainer and EndContainer with ResponsiveWrapper components',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <StartContainer>
          <ResponsiveWrapper>
            <span style={{ backgroundColor: '#007BFF', color: 'white', padding: '5px' }}>Start Item 1</span>
          </ResponsiveWrapper>
          <ResponsiveWrapper>
            <span style={{ backgroundColor: '#28A745', color: 'white', padding: '5px' }}>Start Item 2</span>
          </ResponsiveWrapper>
        </StartContainer>
        <EndContainer>
          <ResponsiveWrapper>
            <span style={{ backgroundColor: '#FFC107', color: 'white', padding: '5px' }}>End Item 1</span>
          </ResponsiveWrapper>
          <ResponsiveWrapper>
            <span style={{ backgroundColor: '#DC3545', color: 'white', padding: '5px' }}>End Item 2</span>
          </ResponsiveWrapper>
        </EndContainer>
      </>
    ),
  },
} satisfies Story;

export const WithStartAndEndContainer: Story = {
  render: () => (
    <PageHeader>
      <StartContainer>
        <ResponsiveWrapper>
          <span style={{ backgroundColor: '#007BFF', color: 'white', padding: '5px' }}>Start Item 1</span>
        </ResponsiveWrapper>
        <ResponsiveWrapper>
          <span style={{ backgroundColor: '#28A745', color: 'white', padding: '5px' }}>Start Item 2</span>
        </ResponsiveWrapper>
      </StartContainer>
      <EndContainer>
        <ResponsiveWrapper>
          <span style={{ backgroundColor: '#FFC107', color: 'white', padding: '5px' }}>End Item 1</span>
        </ResponsiveWrapper>
        <ResponsiveWrapper>
          <span style={{ backgroundColor: '#DC3545', color: 'white', padding: '5px' }}>End Item 2</span>
        </ResponsiveWrapper>
      </EndContainer>
    </PageHeader>
  ),
} satisfies Story;

export const HideBelowMedium: Story = {
  render: () => (
    <PageHeader>
      <StartContainer>
        <ResponsiveWrapper hideBelow="md">
          <span style={{ backgroundColor: '#007BFF', color: 'white', padding: '5px' }}>Hidden Below Medium</span>
        </ResponsiveWrapper>
      </StartContainer>
      <EndContainer>
        <ResponsiveWrapper>
          <span style={{ backgroundColor: '#DC3545', color: 'white', padding: '5px' }}>End Item</span>
        </ResponsiveWrapper>
      </EndContainer>
    </PageHeader>
  ),
} satisfies Story;

export const ShowAboveSmall: Story = {
  render: () => (
    <PageHeader>
      <StartContainer>
        <ResponsiveWrapper showAbove="sm">
          <span style={{ backgroundColor: '#28A745', color: 'white', padding: '5px' }}>Shown Above Small</span>
        </ResponsiveWrapper>
      </StartContainer>
      <EndContainer>
        <ResponsiveWrapper>
          <span style={{ backgroundColor: '#FFC107', color: 'white', padding: '5px' }}>End Item</span>
        </ResponsiveWrapper>
      </EndContainer>
    </PageHeader>
  ),
} satisfies Story;
