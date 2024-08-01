import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text Component', () => {
  it('renders basic text content', () => {
    render(<Text>Basic Text</Text>);
    expect(screen.getByText('Basic Text')).toBeInTheDocument();
  });

  it('renders different heading levels', () => {
    render(<Text elementType="h1">Heading 1</Text>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Heading 1');
  });

  it('applies custom styles correctly', () => {
    render(
      <Text size="large" color="secondary" textAlign="center">
        Custom Styled Text
      </Text>
    );
    const textElement = screen.getByText('Custom Styled Text');
    expect(textElement).toHaveStyle({
      'text-align': 'center',
    });
  });

  it('renders disabled text', () => {
    render(<Text color="disabled">Disabled Text</Text>);
    const textElement = screen.getByText('Disabled Text');
    expect(textElement).toHaveClass('Text__textStyles.default');
  });
});
