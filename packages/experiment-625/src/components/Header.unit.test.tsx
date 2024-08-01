import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header Component', () => {
  it('renders children correctly', () => {
    render(<Header>Test Header</Header>);
    expect(screen.getByText('Test Header')).toBeInTheDocument();
  });

  it('forwards ref to the AriaHeader component', () => {
    const ref = React.createRef();
    render(<Header ref={ref}>Header with Ref</Header>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('passes props to the AriaHeader component', () => {
    render(<Header id="header-id" className="header-class">Header with Props</Header>);
    const headerElement = screen.getByText('Header with Props');
    expect(headerElement).toHaveAttribute('id', 'header-id');
    expect(headerElement).toHaveClass('header-class');
  });

  it('applies custom HTML attributes correctly', () => {
    render(<Header aria-label="custom header">Header with Aria Label</Header>);
    const headerElement = screen.getByText('Header with Aria Label');
    expect(headerElement).toHaveAttribute('aria-label', 'custom header');
  });
});