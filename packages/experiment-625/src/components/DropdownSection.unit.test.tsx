import React from 'react';
import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { DropdownSection } from './DropdownSection';
import { ListBox } from './ListBox';
import { Header } from './Header';

afterEach(() => {
  cleanup();
});

describe('DropdownSection Component', () => {
  it('renders without crashing', () => {
    render(
      <ListBox>
        <DropdownSection>
          <Header>Content</Header>
        </DropdownSection>
      </ListBox>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders the title when provided', () => {
    render(
      <ListBox>
        <DropdownSection title="Test Title">
        </DropdownSection>
      </ListBox>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  // don't want to rely on hashed var names
  // it('applies xBleed styles when xBleed prop is true', () => {
  //   const { container } = render(
  //     <ListBox>
  //       <DropdownSection xBleed>
  //         <Header>Content</Header>
  //       </DropdownSection>
  //     </ListBox>
  //   );
  //   expect(container.querySelector('section')).toHaveStyle({'padding': 'var(--x5kiuus) 0'});
  // });

  // it('renders children correctly', () => {
  //   render(
  //     <ListBox>
  //       <DropdownSection>
  //         <Header>Child Content</Header>
  //       </DropdownSection>
  //     </ListBox>
  //   );
  //   expect(screen.getByText('Child Content')).toBeInTheDocument();
  // });
});