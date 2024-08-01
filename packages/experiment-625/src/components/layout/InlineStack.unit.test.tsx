// Stack.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { InlineStack } from './InlineStack';

describe('InlineStack', () => {


  test('renders correctly and matches snapshot', () => {
    const { asFragment } = render(
      <InlineStack>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </InlineStack>
    );

    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    expect(screen.getByText('Child 3')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});