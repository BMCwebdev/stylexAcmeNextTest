import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Spinner } from './Spinner';

describe('Spinner', async () => {
  test('renders a basic spinner', async () => {
    const { container } = render(<Spinner></Spinner>);
    expect(screen.getByText('Loading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('renders a spinner with custom message', async () => {
    const { container } = render(<Spinner message="something else" />);
    expect(screen.getByText('something else')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
