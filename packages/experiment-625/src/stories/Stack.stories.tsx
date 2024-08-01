import React, { FC, ReactNode } from 'react';
import { Stack } from '../components/layout/Stack';
import { Button } from '../components/Button';

interface WrapperProps {
  children: ReactNode;
}
const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div style={{ width: '200px', height: '200px', border: 'solid grey 2px' }}>
      {children}
    </div>
  );
};

export default {
  title: 'Layout/Stack',
  component: Stack,
  decorators: [(Story) => <Wrapper><Story /></Wrapper>],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "By default, the horizontal alignment is set to 'stretch', making all rows full width. To align items differently, use the `horizontalAlign` prop, which applies the corresponding `justify-items` CSS property. Depending on other styling rules and content size, the items' width may shrink to fit their content. For a combination of both behaviors, you can set the `horizontalAlign` prop (or leave it at the default 'stretch') and apply `justify-self` to the individual child elements. The stories for this component are wrapped with a styled wrapper (the grey border box) so you can visualize how alignment works.",
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    verticalAlign: {
      control: 'select',
      options: ['normal', 'start', 'center', 'end', 'flexStart', 'flexEnd', 'baseline', 'firstBaseline', 'lastBaseline', 'spaceBetween', 'spaceAround', 'spaceEvenly', 'stretch', 'safeCenter', 'unsafeCenter', 'inherit', 'initial', 'revert', 'revertLayer', 'unset'],
      description: 'Aligns the children vertically within the Stack. Pairs well with `fullHeight` prop set to `true`.',
    },
    horizontalAlign: {
      control: 'select',
      options: ['normal', 'stretch', 'center', 'start', 'end', 'flexStart', 'flexEnd', 'selfStart', 'selfEnd', 'left', 'right', 'baseline', 'firstBaseline', 'lastBaseline', 'safeCenter', 'unsafeCenter', 'inherit', 'initial', 'revert', 'revertLayer', 'unset'],
      description: 'Aligns the children horizontally within the Stack.',
    },
    space: {
      control: 'select',
      options: ['0', '25', '50', '100', '200', '300', '400', '500'],
      description: 'Sets the spacing between children in the Stack.',
    },
    fullHeight: {
      control: 'boolean',
      description: 'If set to true, the Stack will expand to use full height of its container.',
    },
    as: {
      control: 'select',
      options: ['div', 'span'],
      description: 'Defines the HTML element or React component that Stack should render as.',
    },
  },
  args: {
    verticalAlign: 'start',
    space: '50',
    fullHeight: true,
    as: 'div',
    children: [
      <Button key="1" children="Button 1" />,
      <Button key="2" children="Button 2" />,
      <Button key="3" children="Button 3" />,
    ],
  },
};

export const Default = {};

export const WithVerticalAlignment = {
  args: {
    verticalAlign: 'center',
    children: [
      <Button key="1" children="Button 1" />,
      <Button key="2" children="Button 2" />,
      <Button key="3" children="Button 3" />,
    ],
  },
};

export const WithHorizontalAlignment = {
  args: {
    horizontalAlign: 'center',
    children: [
      <Button key="1" children="Button 1" />,
      <Button key="2" children="Button 2.." />,
      <Button key="3" children="Button 3...." />,
    ],
  },
};

export const WithCustomSpacing = {
  args: {
    space: '100',
    children: [
      <Button key="1" children="Button 1" />,
      <Button key="2" children="Button 2" />,
      <Button key="3" children="Button 3" />,
    ],
  },
};

export const FullHeight = {
  args: {
    fullHeight: true,
    children: [
      <Button key="1" children="Button 1" />,
      <Button key="2" children="Button 2" />,
      <Button key="3" children="Button 3" />,
    ],
  },
};

export const AsSpanWithHorizontalAlignStart = {
  args: {
    as: 'span',
    horizontalAlign: 'start',
    children: [
      <Button key="1" children="Button 1" />,
      <Button key="2" children="Button 2" />,
      <Button key="3" children="Button 3" />,
    ],
  },
};
