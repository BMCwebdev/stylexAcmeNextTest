import React from 'react';
import { Columns, Column } from '../components/layout/Columns';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Layout/Columns',
  component: Columns,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The Columns component creates a responsive and flexible column layout with customizable behaviors for different viewport sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    collapseBelow: {
      control: 'select',
      options: ['sm', 'md', undefined],
      description: 'Determines the breakpoint at which columns should collapse into a single column stack. For now you should use either `reverseBelow` or `collapseBelow`, not both.',
    },
    reverseBelow: {
      control: 'select',
      options: ['sm', 'md', undefined],
      description: 'Determines the breakpoint at which columns should reverse their order and stack. For now you should use either `reverseBelow` or `collapseBelow`, not both.',
    },
    space: {
      control: 'select',
      options: ['0', '25', '50', '100', '200', '300', '400', '500'],
      description: 'Sets the gap between columns.',
    },
  },
  args: {
    space: '50',
    collapseBelow: undefined,
    reverseBelow: undefined,
    children: [
      <Column width="1/3">
        <div style={{ backgroundColor: 'lightblue', padding: '10px', height: 'auto' }}>Column 1/3</div>
      </Column>,
      <Column width="2/3">
        <div style={{ backgroundColor: 'lightgreen', padding: '10px', height: 'auto' }}>Column 2/3</div>
      </Column>
    ],
  },
};

const Template = (args) => <Columns {...args} />;

export const Default: StoryFn = (args) => (
  <>
    <Columns {...args}>
      <Column width="content">
        <div style={{ backgroundColor: '#E6E6FA', padding: '10px', height: 'auto', width: '100%' }}>Content</div>
      </Column>
      <Column width="auto">
        <div style={{ backgroundColor: '#D8BFD8', padding: '10px', height: 'auto', width: '100%' }}>Fluid Width</div>
      </Column>
    </Columns>
    <Columns {...args}>
      <Column width="1/5">
        <div style={{ backgroundColor: 'lightblue', padding: '10px', height: 'auto', width: '100%' }}>1/5 Width</div>
      </Column>
      <Column width="auto">
        <div style={{ backgroundColor: 'lightgreen', padding: '10px', height: 'auto', width: '100%' }}>Fluid Width</div>
      </Column>
    </Columns>
    <Columns {...args}>
      <Column width="1/4">
        <div style={{ backgroundColor: 'lightcoral', padding: '10px', height: 'auto', width: '100%' }}>1/4 Width</div>
      </Column>
      <Column width="auto">
        <div style={{ backgroundColor: 'lightyellow', padding: '10px', height: 'auto', width: '100%' }}>Fluid Width</div>
      </Column>
    </Columns>
    <Columns {...args}>
      <Column width="1/3">
        <div style={{ backgroundColor: 'lightgrey', padding: '10px', height: 'auto', width: '100%' }}>1/3 Width</div>
      </Column>
      <Column width="auto">
        <div style={{ backgroundColor: 'lavender', padding: '10px', height: 'auto', width: '100%' }}>Fluid Width</div>
      </Column>
    </Columns>
    <Columns {...args}>
      <Column width="2/5">
        <div style={{ backgroundColor: 'mintcream', padding: '10px', height: 'auto', width: '100%' }}>2/5 Width</div>
      </Column>
      <Column width="auto">
        <div style={{ backgroundColor: 'azure', padding: '10px', height: 'auto', width: '100%' }}>Fluid Width</div>
      </Column>
    </Columns>
    <Columns {...args}>
      <Column width="1/2">
        <div style={{ backgroundColor: 'beige', padding: '10px', height: 'auto', width: '100%' }}>1/2 Width</div>
      </Column>
      <Column width="auto">
        <div style={{ backgroundColor: 'honeydew', padding: '10px', height: 'auto', width: '100%' }}>Fluid Width</div>
      </Column>
    </Columns>
    <Columns {...args}>
      <Column width="3/5">
        <div style={{ backgroundColor: 'peachpuff', padding: '10px', height: 'auto', width: '100%' }}>3/5 Width</div>
      </Column>
      <Column width="auto">
        <div style={{ backgroundColor: 'powderblue', padding: '10px', height: 'auto', width: '100%' }}>Fluid Width</div>
      </Column>
    </Columns>
    <Columns {...args}>
      <Column width="2/3">
        <div style={{ backgroundColor: 'moccasin', padding: '10px', height: 'auto', width: '100%' }}>2/3 Width</div>
      </Column>
      <Column width="auto">
        <div style={{ backgroundColor: 'mistyrose', padding: '10px', height: 'auto', width: '100%' }}>Fluid Width</div>
      </Column>
    </Columns>
    <Columns {...args}>
      <Column width="3/4">
        <div style={{ backgroundColor: 'seashell', padding: '10px', height: 'auto', width: '100%' }}>3/4 Width</div>
      </Column>
      <Column width="auto">
        <div style={{ backgroundColor: 'palegreen', padding: '10px', height: 'auto', width: '100%' }}>Fluid Width</div>
      </Column>
    </Columns>
    <Columns {...args}>
      <Column width="4/5">
        <div style={{ backgroundColor: 'khaki', padding: '10px', height: 'auto', width: '100%' }}>4/5 Width</div>
      </Column>
      <Column width="auto">
        <div style={{ backgroundColor: 'salmon', padding: '10px', height: 'auto', width: '100%' }}>Fluid Width</div>
      </Column>
    </Columns>
  </>
);

export const CollapsedAtMedium = Template.bind({});
CollapsedAtMedium.args = {
  collapseBelow: 'md'
};

export const ReversedAtMedium = Template.bind({});
ReversedAtMedium.args = {
  reverseBelow: 'md'
};

export const CustomGaps = Template.bind({});
CustomGaps.args = {
  space: '200'
};

export const AsSpan = Template.bind({});
AsSpan.args = {
  as: 'span',
  children: [
    <Column width="1/4" as='span'>
      <div style={{ backgroundColor: 'lavender', padding: '10px', height: 'auto' }}>1/4 Width</div>
    </Column>,
    <Column width="3/4" as='span'>
      <div style={{ backgroundColor: 'peachpuff', padding: '10px', height: 'auto' }}>3/4 Width</div>
    </Column>
  ],
};

export const MixedWidthsAndReverse = Template.bind({});
MixedWidthsAndReverse.args = {
  reverseBelow: 'md',
  children: [
    <Column width="1/4">
      <div style={{ backgroundColor: 'lavender', padding: '10px', height: 'auto' }}>1/4 Width</div>
    </Column>,
    <Column width="3/4">
      <div style={{ backgroundColor: 'peachpuff', padding: '10px', height: 'auto' }}>3/4 Width</div>
    </Column>
  ],
};

export const NestedColumnsCollapse: StoryFn = () => (
<Columns space="0" collapseBelow='sm'>
  <Column width="1/2">
    <Columns space="25">
      <Column width="1/2">
        <div style={{ backgroundColor: 'cyan', padding: '10px', height: 'auto' }}>Nested 1/2</div>
      </Column>
      <Column width="1/2">
        <div style={{ backgroundColor: 'magenta', padding: '10px', height: 'auto' }}>Nested 1/2</div>
      </Column>
    </Columns>
  </Column>
  <Column width="1/2">
    <div style={{ backgroundColor: 'yellow', padding: '10px', height: 'auto' }}>1/2 Width</div>
  </Column>
</Columns>
);
