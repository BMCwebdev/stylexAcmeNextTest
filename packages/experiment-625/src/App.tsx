// import { useState } from 'react';

// import { Button } from './components/Button';
// import { Text } from './components/Text';
// import { ChoiceTiles } from './components/ChoiceTiles';

// import { Popover } from './components/Popover';
import { DropdownSection } from './components/DropdownSection';
import { Avatar } from './components/Avatar';

import { Button } from "./components/Button";
import { Menu, MenuItem, MenuTrigger } from "./components/Menu";
import { Header } from "./components/Header";
import { Separator } from './components/Separator';

import * as stylex from '@stylexjs/stylex';

const avatarBG = stylex.create({
  base: {
    backgroundColor: 'steelblue'
  }
});

function App() {
  const items = [
    {id: 1, name: 'New'},
    {id: 2, name: 'Open'},
    {id: 3, name: 'Close'},
    {id: 4, name: 'Save'},
    {id: 5, name: 'Duplicate'},
    {id: 6, name: 'Rename'},
    {id: 7, name: 'Move'}
  ];
  return (
    <>
      <Avatar src='https://loremflickr.com/320/240' size='lg' fallback="B" altText='Brian' stitches={avatarBG.base} />
      <Avatar size='sm' fallback="B" altText='Brian' stitches={avatarBG.base} />
      <Avatar size='md' fallback="D" altText='Brian' stitches={avatarBG.base} />
      <MenuTrigger>
        <Button variant="icon"
        >
          menuIcon
        </Button>
        <Menu>
          <DropdownSection>
            <Header>
              <div className="avatar">S</div>
              <div className="name">Susan Jones</div>
              <div className="email">sjones@pawschicago.org</div>
            </Header>
          </DropdownSection>
          <Separator />
          <DropdownSection xBleed={true}>
            <MenuItem>Account settings</MenuItem>
            <MenuItem>Create team</MenuItem>
            <MenuItem>Command menu</MenuItem>
            <MenuItem>Log out</MenuItem>
          </DropdownSection>
          <Separator />
          <DropdownSection items={items}>
            {item => <MenuItem key={item.id}>{item.name}</MenuItem>}
          </DropdownSection>
          <Separator />
          <MenuItem>Save</MenuItem>
          <MenuItem>Save as…</MenuItem>
          <MenuItem>Rename…</MenuItem>
          <MenuItem>Delete…</MenuItem>
        </Menu>
      </MenuTrigger>
      <MenuTrigger>
        <Button aria-label="Menu">☰</Button>
        <Menu>
          <DropdownSection>
            <Header>
              <div className="avatar">S</div>
              <div className="name">Susan Jones</div>
              <div className="email">sjones@pawschicago.org</div>
            </Header>
            <MenuItem onAction={() => alert('open')}>Open</MenuItem>
          </DropdownSection>
          <DropdownSection xBleed={true}>
            <MenuItem onAction={() => alert('open')}>Open</MenuItem>
            <MenuItem onAction={() => alert('rename')}>Rename…</MenuItem>
            <MenuItem onAction={() => alert('duplicate')}>Duplicate</MenuItem>
            <MenuItem onAction={() => alert('share')}>Share…</MenuItem>
            <MenuItem onAction={() => alert('delete')}>Delete…</MenuItem>
          </DropdownSection>
        </Menu>
      </MenuTrigger>
    </>
  );
}

export default App;
