import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ChoiceTiles } from './ChoiceTiles';

describe('ChoiceTiles Component', () => {
  const items = [
    { id: 1, organization: 'Org A', match_percentage: '80%', close_date: '2024-06-01' },
    { id: 2, organization: 'Org B', match_percentage: '60%', close_date: '2024-07-01' },
  ];

  beforeEach(() => {
    render(<ChoiceTiles ariaLabel="Select Organization" items={items} />);
  });

  it('renders the ListBox with the correct aria-label', () => {
    const listBox = screen.getByRole('listbox', { name: 'Select Organization' });
    expect(listBox).toBeInTheDocument();
  });

  it('renders all items passed in props', () => {
    items.forEach(item => {
      expect(screen.getByText(item.organization)).toBeInTheDocument();
      expect(screen.getByText(item.close_date)).toBeInTheDocument();
      expect(screen.getByText(item.match_percentage)).toBeInTheDocument();
    });
  });
});

describe('ChoiceTiles Component with Disabled Items', () => {
  const items = [
    { id: 1, organization: 'Org A', match_percentage: '80%', close_date: '2024-06-01' },
    { id: 2, organization: 'Org B', match_percentage: '60%', close_date: '2024-07-01' },
  ];
  const disabledKeys = [2];

  beforeEach(() => {
    render(<ChoiceTiles ariaLabel="Select Organization" items={items} disabledKeys={disabledKeys} />);
  });

  it('renders the ListBox with the correct aria-label', () => {
    const listBox = screen.getByRole('listbox', { name: 'Select Organization' });
    expect(listBox).toBeInTheDocument();
  });

  it('renders all items passed in props', () => {
    items.forEach(item => {
      expect(screen.getByText(item.organization)).toBeInTheDocument();
      expect(screen.getByText(item.close_date)).toBeInTheDocument();
      expect(screen.getByText(item.match_percentage)).toBeInTheDocument();
    });
  });

  it('renders the disabled items with the correct aria-disabled attribute', () => {
    const disabledItem = screen.getByText('Org B').closest('[role="option"]');
    expect(disabledItem).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders the enabled items without the aria-disabled attribute', () => {
    const enabledItem = screen.getByText('Org A').closest('[role="option"]');
    expect(enabledItem).not.toHaveAttribute('aria-disabled');
  });
});
