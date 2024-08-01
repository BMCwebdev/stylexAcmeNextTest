import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Tiles } from './Tiles';

describe('Tiles Component', () => {
  it('renders without crashing', () => {
    render(
      <Tiles>
        <div>Child 1</div>
      </Tiles>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
  });

  it('renders the correct number of children', () => {
    render(
      <Tiles>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Tiles>
    );
    const children = screen.getAllByText(/Child/); // Gets all elements that match the text "Child"
    expect(children.length).toBe(3);
  });
});

