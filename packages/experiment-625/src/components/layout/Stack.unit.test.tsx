// Stack.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Stack } from './Stack';

describe('Stack', () => {


  test('renders correctly and matches snapshot', () => {
    const { asFragment } = render(
      <Stack>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Stack>
    );

    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    expect(screen.getByText('Child 3')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});