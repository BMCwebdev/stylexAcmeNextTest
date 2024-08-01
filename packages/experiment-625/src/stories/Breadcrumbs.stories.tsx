import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Controls } from '@storybook/blocks';
import { Breadcrumb, Breadcrumbs } from '../components/Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
};
export default meta;

<Controls />

export const Example: StoryObj<typeof Breadcrumbs> = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <Breadcrumb href="#">Home</Breadcrumb>
      <Breadcrumb href="#">React Aria</Breadcrumb>
      <Breadcrumb>Breadcrumbs</Breadcrumb>
    </Breadcrumbs>
  ),
  args: {
    isDisabled: false,
  },
};

export const DynamicExample: StoryObj<typeof Breadcrumbs> = {
  render: (args) => {
    const breadcrumbs = [
      { id: 1, label: 'Home', href: '#home' },
      { id: 2, label: 'Trendy', href: '#trendy' },
      { id: 3, label: 'March 2022 Assets' }
    ];

    return (
      <Breadcrumbs {...args} items={breadcrumbs} />
    );
  },
  args: {
    isDisabled: false,
  },
};
