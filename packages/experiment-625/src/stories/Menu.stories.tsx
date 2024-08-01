import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuButton, MenuItem, MenuTrigger, SubMenuTrigger } from '../components/Menu';
import { DropdownSection } from '../components/DropdownSection';
import { Header } from '../components/Header';
import { Text } from '../components/Text';
import { Separator } from '../components/Separator';
import { Menu as MenuIcon } from 'lucide-react'

const meta: Meta = {
  title: 'Menu',
  component: Menu,
  subcomponents: { MenuItem, MenuTrigger, SubMenuTrigger },
  argTypes: {
    placement: {
      control: 'text',
      description: 'Placement of the menu',
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

interface Item {
  id: number;
  name: string;
}

const items: Item[] = [
  { id: 1, name: 'New' },
  { id: 2, name: 'Open' },
  { id: 3, name: 'Close' },
  { id: 4, name: 'Save' },
  { id: 5, name: 'Duplicate' },
  { id: 6, name: 'Rename' },
  { id: 7, name: 'Move' }
];

export const Default: Story = {
  args: {
    placement: 'bottom',
  },
  render: (args) => (
    <MenuTrigger>
      <MenuButton aria-label="Menu"><MenuIcon /></MenuButton>
      <Menu placement={args.placement}>
        <DropdownSection>
          <Header>
            <Text elementType="h6">Header Text</Text>
          </Header>
        </DropdownSection>
        <DropdownSection aria-label='items' xBleed={true}>
          <MenuItem onAction={() => alert('open')}>Open</MenuItem>
          <MenuItem onAction={() => alert('rename')}>Rename…</MenuItem>
          <MenuItem onAction={() => alert('duplicate')}>Duplicate</MenuItem>
          <MenuItem onAction={() => alert('share')}>Share…</MenuItem>
          <MenuItem onAction={() => alert('delete')}>Delete…</MenuItem>
        </DropdownSection>
      </Menu>
    </MenuTrigger>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a basic menu with static items and simple actions using the `MenuItem` component. The `Header` and `DropdownSection` components are used to group and style the menu items.',
      },
    },
  },
} satisfies Story;

export const WithSections: Story = {
  args: {
    placement: 'bottom',
  },
  render: (args) => (
    <MenuTrigger>
      <MenuButton aria-label="Menu"><MenuIcon /></MenuButton>
      <Menu placement={args.placement}>
        <DropdownSection>
          <Header>
            <Text elementType='h6'>Section Header</Text>
          </Header>
        </DropdownSection>
        <Separator />
        <DropdownSection aria-label='2nd section' xBleed={true}>
          <MenuItem>Account settings</MenuItem>
          <MenuItem>Create team</MenuItem>
          <MenuItem>Command menu</MenuItem>
          <MenuItem>Log out</MenuItem>
        </DropdownSection>
        <Separator />
        <DropdownSection aria-label='3rd section' items={items} xBleed={true}>
          {item => <MenuItem key={item.id}>{item.name}</MenuItem>}
        </DropdownSection>
        <Separator />
        <MenuItem>Save</MenuItem>
        <MenuItem>Save as…</MenuItem>
        <MenuItem>Rename…</MenuItem>
        <MenuItem>Delete…</MenuItem>
      </Menu>
    </MenuTrigger>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a menu with multiple sections, separated by `Separator` components. The `DropdownSection` and `Header` components provide context and grouping for the menu items. This example includes both static and dynamic collections of menu items.',
      },
    },
  },
} satisfies Story;

export const WithSubMenu: Story = {
  args: {
    placement: 'bottom',
  },
  render: (args) => (
    <MenuTrigger>
      <MenuButton aria-label="Menu"><MenuIcon /></MenuButton>
      <Menu placement={args.placement}>
        <DropdownSection aria-label='section' xBleed={true}>
          <MenuItem>Option 1</MenuItem>
          <SubMenuTrigger>
            <MenuItem>Submenu</MenuItem>
            <Menu placement="right">
              <MenuItem>Sub Option 1</MenuItem>
              <MenuItem>Sub Option 2</MenuItem>
              <MenuItem>Sub Option 3</MenuItem>
            </Menu>
          </SubMenuTrigger>
          <MenuItem>Option 2</MenuItem>
        </DropdownSection>
      </Menu>
    </MenuTrigger>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a menu with a submenu. The `SubMenuTrigger` component is used to create a nested menu that appears to the right of the main menu. This allows for hierarchical navigation within the menu.',
      },
    },
  },
} satisfies Story;


export const DynamicCollections: Story = {
  args: {
    placement: 'bottom',
    items: items,
  },
  render: (args) => (
    <MenuTrigger>
      <MenuButton aria-label="Menu"><MenuIcon /></MenuButton>
      <Menu placement={args.placement}>
        <DropdownSection aria-label='section' items={args.items} xBleed={true}>
          {item => <MenuItem key={item.id}>{item.name}</MenuItem>}
        </DropdownSection>
      </Menu>
    </MenuTrigger>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a menu with dynamic collections of items. The `items` prop is used to pass an iterable list of options to the `Menu`. Each item accepts an `id` prop, which is used by the `onAction` prop to identify the selected item.',
      },
    },
  },
} satisfies Story;