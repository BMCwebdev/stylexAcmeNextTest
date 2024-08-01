import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { Menu, MenuTrigger, MenuItem } from './Menu';
import { Button } from './Button'; // Adjust the import path to where your Button component is located

afterEach(() => {
  cleanup();
});

describe('Menu Integration Test', () => {
  it('renders the menu trigger button without crashing', () => {
    render(
      <MenuTrigger>
        <Button variant="icon">menuIcon</Button>
        <Menu>
          <MenuItem>Save</MenuItem>
          <MenuItem>Save as…</MenuItem>
          <MenuItem>Rename…</MenuItem>
          <MenuItem>Delete…</MenuItem>
        </Menu>
      </MenuTrigger>
    );
    expect(screen.getByText('menuIcon')).toBeInTheDocument();
  });

  it('opens the menu on button click', () => {
    render(
      <MenuTrigger>
        <Button variant="icon">menuIcon</Button>
        <Menu>
          <MenuItem>Save</MenuItem>
          <MenuItem>Save as…</MenuItem>
          <MenuItem>Rename…</MenuItem>
          <MenuItem>Delete…</MenuItem>
        </Menu>
      </MenuTrigger>
    );
    expect(screen.queryByText('Save')).not.toBeInTheDocument();
    expect(screen.queryByText('Save as…')).not.toBeInTheDocument();
    expect(screen.queryByText('Rename…')).not.toBeInTheDocument();
    expect(screen.queryByText('Delete…')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('menuIcon'));
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText('Save as…')).toBeInTheDocument();
    expect(screen.getByText('Rename…')).toBeInTheDocument();
    expect(screen.getByText('Delete…')).toBeInTheDocument();
  });

  it('triggers onAction callback when a menu item is clicked', () => {
    const onActionMock = vi.fn();
    render(
      <MenuTrigger>
        <Button variant="icon">menuIcon</Button>
        <Menu>
          <MenuItem onAction={onActionMock}>Save</MenuItem>
          <MenuItem onAction={onActionMock}>Save as…</MenuItem>
          <MenuItem onAction={onActionMock}>Rename…</MenuItem>
          <MenuItem onAction={onActionMock}>Delete…</MenuItem>
        </Menu>
      </MenuTrigger>
    );

    fireEvent.click(screen.getByText('menuIcon'));

    const saveItem = screen.getByText('Save');
    fireEvent.click(saveItem);
    expect(onActionMock).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('menuIcon'));

    const saveAsItem = screen.getByText('Save as…');
    fireEvent.click(saveAsItem);
    expect(onActionMock).toHaveBeenCalledTimes(2);
  });

  it('renders and interacts with menu items correctly', () => {
    render(
      <MenuTrigger>
        <Button variant="icon">menuIcon</Button>
        <Menu>
          <MenuItem>Save</MenuItem>
          <MenuItem>Save as…</MenuItem>
          <MenuItem>Rename…</MenuItem>
          <MenuItem>Delete…</MenuItem>
        </Menu>
      </MenuTrigger>
    );
    fireEvent.click(screen.getByText('menuIcon'));
    
    const saveItem = screen.getByText('Save');
    expect(saveItem).toBeInTheDocument();

    fireEvent.click(saveItem);
  });
});