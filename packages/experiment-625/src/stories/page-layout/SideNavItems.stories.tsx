import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SideNavItems, SideNavItem } from '../../components/SideNav'; // Adjust the path if necessary
import { PageLayoutProvider } from '../../components/PageLayoutProvider'; // Adjust the path if necessary

const meta: Meta<typeof SideNavItems> = {
  title: 'Page Layout/SideNavItems',
  component: SideNavItems,
  decorators: [
    (Story) => (
      <PageLayoutProvider>
        <Story />
      </PageLayoutProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

const navItems: SideNavItem[] = [
  { icon: 'Home', label: 'Home', to: '/', isActive: true },
  { icon: 'Gift', label: 'Gifts', to: '/gifts' },
  { icon: 'HelpCircle', label: 'Help', to: '/help' },
  { icon: 'LogOut', label: 'Logout', to: '/logout' },
];

export const Default: Story = {
  args: {
    navItems,
  },
} satisfies Story;
