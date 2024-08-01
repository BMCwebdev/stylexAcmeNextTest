import type { Meta, StoryObj } from '@storybook/react';
import { SideNavFooter, SideNavItems } from '../../components/SideNav'; // Adjust the path if necessary
import { PageLayoutProvider } from '../../components/PageLayoutProvider'; // Adjust the path if necessary

const meta: Meta<typeof SideNavFooter> = {
  title: 'Page Layout/SideNavFooter',
  component: SideNavFooter,
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

const footerItems: SideNavItems[] = [
  { icon: 'HelpCircle', label: 'Help Center', to: '/help' },
];

export const Default: Story = {
  args: {
    children: <SideNavItems navItems={footerItems} />,
  },
} satisfies Story;
