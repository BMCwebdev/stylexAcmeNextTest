import React from 'react';
import { Button } from '../components/Button';
import { Cat } from 'lucide-react';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'destructive', 'icon'],
    },
  },
  args: {
    isDisabled: false,
    children: 'Button',
  },
};

export const Default = {
  args: {
    variant: 'default',
  },
};

export const Primary = {
  args: {
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive = {
  args: {
    variant: 'destructive',
  },
};

export const WithIcon = () => (
  <>
    <p>This story shows the <code>Button</code> component with an icon inside. The <code>Cat</code> icon from <code>lucide-react</code> is used. We do not have offical icon implementation, so for now while developing, just copy this pattern (size and color). There is no disabled version as of yet.</p>
    <br />
    <br />
    <Button variant="icon">
      <Cat color="#1a191b" size={16} />
    </Button>
  </>
);
