import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Controls } from '@storybook/blocks';
import { GlobalToastProvider, toastQueue } from '../components/Toast';
import { Button } from '../components/Button';

// TODO - Story is creating a GlobalToastProvider for each story Example. Even when using a decorator to render, it still does this. Need to find a way to only render one GlobalToastProvider for all stories. For now it works.
const meta: Meta<typeof GlobalToastProvider> = {
  component: GlobalToastProvider,
  title: 'Toast',
};
export default meta;

<Controls />

const Template = (args: { title: string; description: string; variant: "info" | "success" | "warning" | "critical" }) => (
  <div style={{ padding: '40px' }}>
    <Button
      onPress={() =>
        toastQueue.add({
          title: args.title,
          description: args.description,
          variant: args.variant,
        })
      }
    >
      Show {args.variant.charAt(0).toUpperCase() + args.variant.slice(1)} Toast
    </Button>
    <GlobalToastProvider />
  </div>
);

export const Example: StoryObj<typeof GlobalToastProvider> = {
  render: (args) => <Template {...args} />,
  args: {
    title: 'Default Title',
    description: 'Default description for the toast.',
    variant: 'info',
  },
};

export const InfoToast: StoryObj<typeof GlobalToastProvider> = {
  render: (args) => <Template {...args} />,
  args: {
    title: 'Info',
    description: 'This is an info toast.',
    variant: 'info',
  },
};

export const SuccessToast: StoryObj<typeof GlobalToastProvider> = {
  render: (args) => <Template {...args} />,
  args: {
    title: 'Success!',
    description: 'This is a success toast.',
    variant: 'success',
  },
};

export const WarningToast: StoryObj<typeof GlobalToastProvider> = {
  render: (args) => <Template {...args} />,
  args: {
    title: 'Warning!',
    description: 'This is a warning toast.',
    variant: 'warning',
  },
};

export const CriticalToast: StoryObj<typeof GlobalToastProvider> = {
  render: (args) => <Template {...args} />,
  args: {
    title: 'Critical Error',
    description: 'This is a critical error toast.',
    variant: 'critical',
  },
};

export const NoDescriptionToast: StoryObj<typeof GlobalToastProvider> = {
  render: (args) => <Template {...args} />,
  args: {
    title: 'No Description',
    variant: 'critical',
  },
};