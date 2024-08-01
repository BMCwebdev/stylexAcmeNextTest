import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Link } from './Link';

describe('Link Component', () => {
  test('renders with default data attributes', async () => {
    render(<Link href="#">Test Link</Link>);
  });

  test('renders disabled state correctly', async () => {
    render(<Link isDisabled href="#">Disabled Link</Link>);
    const link = screen.getByText('Disabled Link');
    expect(link).toHaveAttribute('data-disabled', 'true');
  });
});
