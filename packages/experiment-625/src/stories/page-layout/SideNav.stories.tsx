import React, { useState, useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SideNav } from '../../components/SideNav';
import { SideNavItems } from '../../components/SideNav';
import { SideNavFooter } from '../../components/SideNav';
import { PageLayoutContext, PageLayoutContextProps } from '../../components/PageLayoutProvider';
import { ButtonContext } from 'react-aria-components';

const meta: Meta = {
  title: 'Page Layout/SideNav',
  component: SideNav,
  decorators: [
    (Story) => {
      const [isNavOpen, setIsNavOpen] = useState(true);
      const [focusOnOpen, setFocusOnOpen] = useState(false);
      const contextValue = useMemo<PageLayoutContextProps>(() => ({
        isNavOpen,
        setIsNavOpen,
        width: 1080,
        focusOnOpen,
        setFocusOnOpen,
        buttonRef: { current: null },
      }), [isNavOpen, focusOnOpen]);

      return (
        <PageLayoutContext.Provider value={contextValue}>
          <ButtonContext.Provider value={{ ref: contextValue.buttonRef }}>
            <div style={{ minHeight: '300px' }}>
              <Story />
            </div>
          </ButtonContext.Provider>
        </PageLayoutContext.Provider>
      );
    },
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content of the side navigation',
    },
  },
} satisfies Meta<typeof SideNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <SideNavItems
        navItems={[
          { icon: 'Home', label: 'Home', to: '/', isActive: true },
          { icon: 'Gift', label: 'Gifts', to: '/gifts' },
          { icon: 'HelpCircle', label: 'Help', to: '/help', isNewWindow: true },
        ]}
      />
    ),
  },
} satisfies Story;

export const WithFooter: Story = {
  args: {
    children: (
      <>
        <SideNavItems
          navItems={[
            { icon: 'Home', label: 'Home', to: '/', isActive: true },
            { icon: 'Gift', label: 'Gifts', to: '/gifts' },
            { icon: 'HelpCircle', label: 'Help', to: '/help' },
          ]}
        />
        <SideNavFooter>
          <SideNavItems navItems={[{ icon: 'LogOut', label: 'Log Out', to: '/logout' }]} />
        </SideNavFooter>
      </>
    ),
  },
} satisfies Story;
