import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState, useMemo } from 'react';
import { SideNavButton } from '../../components/SideNavButton'; // Assuming the file name is SideNavButton.tsx
import { PageLayoutContext } from '../../components/PageLayoutProvider';
import { ButtonContext } from 'react-aria-components';

const meta = {
  component: SideNavButton,
  title: 'Page Layout/SideNavButton',
  decorators: [
    (Story) => {
      const [isNavOpen, setIsNavOpen] = useState(false);
      const [focusOnOpen, setFocusOnOpen] = useState(false);
      const contextValue = useMemo(() => ({
        isNavOpen,
        setIsNavOpen,
        width: 800,
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
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
SideNavButton component is built specifically to use in conjunction with the PageLayoutProvider component. It is used to toggle the visibility of the side navigation menu. PageLayoutProvider will take care of all functionality of the SideNavButton component. All you need to do is add it to your JSX.

If you are using a SideNav component, you should add this component to your PageHeader (either in a StartContainer or EndContainer, depending on your desiered UI) to toggle the visibility of the side navigation menu from the Header.

You do not need to add this to the SideNav component itself, as it is already included in the SideNav component by default.
        `,
      },
    },
  },
} satisfies Meta<typeof SideNavButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
} satisfies Story;
