import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Box } from './Box';

describe('Box', async () => {
  test('renders a basic box', async () => {
    const { container } = render(<Box>Box content</Box>);
    expect(screen.getByText('Box content')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('renders a box with a border', async () => {
    const { container } = render(<Box border>Box content</Box>);
    expect(screen.getByText('Box content')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('renders a box with a border, radius, and large padding', async () => {
    const { container } = render(
      <Box border radius="medium" padding="large">
        Box content
      </Box>,
    );
    expect(container).toMatchSnapshot();
  });
  test('renders a box with a colored variant', async () => {
    const { container } = render(
      <Box border variant="blue">
        Box content
      </Box>,
    );
    expect(container).toMatchSnapshot();
  });
});
