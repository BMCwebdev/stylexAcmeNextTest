import React from 'react';
import type { Meta } from '@storybook/react';
import { InlineFeedback } from '../components/InlineFeedback';

export default {
  title: 'Components/InlineFeedback',
  component: InlineFeedback,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'warning', 'critical', 'info', 'tip', undefined],
      },
    },
    message: {
      control: 'text',
    },
  },
} as Meta<typeof InlineFeedback>;

export const Default = {
  args: {
    type: 'success',
    message: 'Success message',
  },
};

export const Validation = () => (
  <div>
    <InlineFeedback message="Success message" type="success" />
    <InlineFeedback message="Warning message" type="warning" />
    <InlineFeedback message="Critical message" type="critical" />
    <InlineFeedback message="Info message" type="info" />
    <InlineFeedback message="Tip message" type="tip" />
  </div>
);
