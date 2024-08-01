import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Breadcrumbs, Breadcrumb } from './Breadcrumbs';

describe('Breadcrumbs Component', () => {
  it('correctly renders breadcrumb links with appropriate attributes', () => {
    render(
      <Breadcrumbs>
        <Breadcrumb href="/home">Home</Breadcrumb>
        <Breadcrumb href="/about">About</Breadcrumb>
      </Breadcrumbs>
    );
    const homeLink = screen.getByText('Home').closest('a');
    const aboutLink = screen.getByText('About').closest('a');

    expect(homeLink).toHaveAttribute('href', '/home');
    expect(aboutLink).toHaveAttribute('href', '/about');
  });

  it('renders dynamic breadcrumb items', () => {
    const breadcrumbs = [
      { id: 1, label: 'Home', href: '#home' },
      { id: 2, label: 'Trendy', href: '#trendy' },
      { id: 3, label: 'March 2022 Assets' }
    ];

    render(
      <Breadcrumbs items={breadcrumbs} />
    );

    const homeLink = screen.getByText('Home').closest('a');
    const trendyLink = screen.getByText('Trendy').closest('a');
    const marchAssetsText = screen.getByText('March 2022 Assets');

    expect(homeLink).toHaveAttribute('href', '#home');
    expect(trendyLink).toHaveAttribute('href', '#trendy');
    expect(marchAssetsText).toBeInTheDocument();
    expect(marchAssetsText).not.toHaveAttribute('href');
  });
});
