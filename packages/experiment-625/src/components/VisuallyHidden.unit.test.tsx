import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { VisuallyHidden } from './VisuallyHidden';

describe('VisuallyHidden', () => {
  it('should render without crashing', () => {
    const { container } = render(<VisuallyHidden>Hidden Content</VisuallyHidden>);
    expect(container).toBeDefined();
  });

  it('should apply given props to the AriaVisuallyHidden component', () => {
    const { getByText } = render(<VisuallyHidden aria-label="hidden">Hidden Content</VisuallyHidden>);
    const element = getByText('Hidden Content');
    expect(element).toHaveAttribute('aria-label', 'hidden');
  });

  // Assuming we know the CSS styles are applied by AriaVisuallyHidden
  it('should be visually hidden', () => {
    const { getByText } = render(<VisuallyHidden>Hidden Content</VisuallyHidden>);
    const element = getByText('Hidden Content');
    expect(element).toHaveStyle('border: 0');
    expect(element).toHaveStyle('clip: rect(0 0 0 0)');
    expect(element).toHaveStyle('clipPath: inset(50%)');
    expect(element).toHaveStyle('height: 1px');
    expect(element).toHaveStyle('margin: -1px');
    expect(element).toHaveStyle('overflow: hidden');
    expect(element).toHaveStyle('padding: 0');
    expect(element).toHaveStyle('position: absolute');
    expect(element).toHaveStyle('width: 1px');
    expect(element).toHaveStyle('whiteSpace: nowrap');
  });
});
