import { InlineStack } from '../components/layout/InlineStack';
import { Button } from '../components/Button';
import React, { FC, ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}
const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div style={{width: '400px', height: '200px', border: 'solid grey 2px'}}>{children}</div>
  )
}

export default {
  title: 'Layout/InlineStack',
  component: InlineStack,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The stories for this component are wrapped with a styled wrapper (the grey border box) so you can visualize how alignment works.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    verticalAlign: {
      control: 'select',
      options: [
        'normal',
        'start',
        'center',
        'end',
        'flexStart',
        'flexEnd',
        'left',
        'right',
        'spaceBetween',
        'spaceAround',
        'spaceEvenly',
        'stretch',
        'safeCenter',
        'unsafeCenter',
        'inherit',
        'initial',
        'revert',
        'revertLayer',
        'unset',
      ],
      description:
        'Controls the vertical alignment of children within the InlineStack. Pairs well with `fullHeight` prop set to `true`.',
    },
    horizontalAlign: {
      control: 'select',
      options: [
        'baseline',
        'center',
        'end',
        'firstBaseline',
        'flexEnd',
        'flexStart',
        'inherit',
        'initial',
        'lastBaseline',
        'normal',
        'revert',
        'revertLayer',
        'safeCenter',
        'selfEnd',
        'selfStart',
        'start',
        'stretch',
        'unsafeCenter',
        'unset',
      ],
      description:
        'Controls the horizontal alignment of children within the InlineStack.',
    },
    gap: {
      control: 'select',
      options: ['0', '25', '50', '100', '200', '300', '400', '500'],
      description: 'Sets the gap between the children in the InlineStack.',
    },
    columnGap: {
      control: 'select',
      options: ['0', '25', '50', '100', '200', '300', '400', '500'],
      description:
        'Sets the column gap between the children in the InlineStack.',
    },
    rowGap: {
      control: 'select',
      options: ['0', '25', '50', '100', '200', '300', '400', '500'],
      description: 'Sets the row gap between the children in the InlineStack.',
    },
    fullHeight: {
      control: 'boolean',
      description:
        'If set to true, the InlineStack will expand to use full height of its container.',
    },
    as: {
      control: 'select',
      options: ['div', 'span'],
      description:
        'Defines the HTML element or React component that InlineStack should render as.',
    },
  },
  args: {
    verticalAlign: 'start',
    horizontalAlign: 'start',
    space: '50',
    fullHeight: true,
    as: 'div',
    children: [
      <Button key="1" children="Button 1" />,
      <Button key="2" children="Button 2" />,
      <Button key="3" children="Button3" />,
    ],
  },
};

export const Default = {};

export const WithVerticalAlignment = {
  args: {
    verticalAlign: 'center', // JustifyContent aligns vertically for flex, but naming might be confusing.
    children: [
      <Button key="1">Button 1</Button>,
      <Button key="2">Button 2</Button>,
      <Button key="3">Button 3</Button>,
    ],
  },
};

export const WithHorizontalAlignment = {
  args: {
    horizontalAlign: 'center', // AlignItems aligns horizontally for flex.
    children: [
      <Button key="1">Button 1</Button>,
      <Button key="2">Button 2</Button>,
      <Button key="3">Button 3</Button>,
    ],
  },
};

export const WithCustomGap = {
  args: {
    gap: '100', // Updated from space to gap.
    children: [
      <Button key="1">Button 1</Button>,
      <Button key="2">Button 2</Button>,
      <Button key="3">Button 3</Button>,
    ],
  },
};

export const WithColumnAndRowGap = {
  args: {
    gap: '50', // Default gap if both columnGap and rowGap are not specified.
    columnGap: '100', // Specific gap for columns.
    rowGap: '200', // Specific gap for rows.
    children: [
      <Button key="1">Button 1</Button>,
      <Button key="2">Button 2</Button>,
      <Button key="3">Button 3</Button>,
    ],
  },
};

export const FullHeight = {
  args: {
    fullHeight: true,
    children: [
      <Button key="1">Button 1</Button>,
      <Button key="2">Button 2</Button>,
      <Button key="3">Button 3</Button>,
    ],
  },
};

export const AsSpan = {
  args: {
    as: 'span',
    children: [
      <Button key="1">Button 1</Button>,
      <Button key="2">Button 2</Button>,
      <Button key="3">Button 3</Button>,
    ],
  },
};
