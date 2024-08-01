import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Columns, Column } from '../layout/Columns'; // Adjust the import based on the actual file name

describe('Columns Component', () => {
  it('renders without crashing', () => {
    render(
      <Columns>
        <div>Child</div>
      </Columns>
    );
    expect(screen.getByText('Child')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(
      <Columns>
        <div>Child 1</div>
        <div>Child 2</div>
      </Columns>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('supports custom component types', () => {
    render(
      <Columns as="section">
        <section>Custom component</section>
      </Columns>
    );
    expect(screen.getByText('Custom component').parentNode?.tagName).toBe('SECTION');
  });

  it('handles no children without errors', () => {
    const { container } = render(<Columns />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it('renders children based on context for collapsing and reversing', () => {
    render(
      <Columns collapseBelow="md" reverseBelow="sm">
        <Column>
          <div>Child 1</div>
        </Column>
        <Column>
          <div>Child 2</div>
        </Column>
      </Columns>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });
});

describe('Column Component', () => {
  it('renders without crashing', () => {
    render(
      <Column>
        <div>Child</div>
      </Column>
    );
    expect(screen.getByText('Child')).toBeInTheDocument();
  });

  it('renders single child correctly', () => {
    render(
      <Column>
        <div>Single Child</div>
      </Column>
    );
    expect(screen.getByText('Single Child')).toBeInTheDocument();
  });

  it('reacts to context from Columns', () => {
    render(
      <Columns collapseBelow="sm">
        <Column>
          <div>Context-dependent child</div>
        </Column>
      </Columns>
    );
    expect(screen.getByText('Context-dependent child')).toBeInTheDocument();
  });

  it('handles custom component types', () => {
    render(
      <Column as="article">
        <article>Custom column component</article>
      </Column>
    );
    expect(screen.getByText('Custom column component').parentNode?.tagName).toBe('ARTICLE');
  });

  it('renders without children when none are provided', () => {
    const { container } = render(<Column />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
