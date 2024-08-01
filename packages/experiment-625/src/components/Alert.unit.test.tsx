import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Alert, variantPicker } from './Alert';

describe('Alert', async () => {
  test('renders a success alert', async () => {
    render(
      <Alert type="success" title="Success" message="here is the message." />,
    );
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Success' }),
    ).toBeInTheDocument();
    expect(screen.getByText('here is the message.')).toBeInTheDocument();
  });
  test('renders an error alert', async () => {
    render(<Alert type="error" title="Error" message="here is the message." />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Error' })).toBeInTheDocument();
    expect(screen.getByText('here is the message.')).toBeInTheDocument();
  });
  test('renders a warning alert', async () => {
    render(
      <Alert type="warning" title="Warning" message="here is the message." />,
    );
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Warning' }),
    ).toBeInTheDocument();
    expect(screen.getByText('here is the message.')).toBeInTheDocument();
  });
  test('renders an info alert', async () => {
    render(
      <Alert
        type="info"
        title="Informational Message Title"
        message="here is the message."
      />,
    );
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Informational Message Title' }),
    ).toBeInTheDocument();
    expect(screen.getByText('here is the message.')).toBeInTheDocument();
  });
});

describe('variantPicker', () => {
  test('returns "blue" for "info"', () => {
    expect(variantPicker('info')).toBe('blue');
  });

  test('returns "red" for "error"', () => {
    expect(variantPicker('error')).toBe('red');
  });

  test('returns "green" for "success"', () => {
    expect(variantPicker('success')).toBe('green');
  });

  test('returns "yellow" for "warning"', () => {
    expect(variantPicker('warning')).toBe('yellow');
  });

  test('returns "blue" for unknown type', () => {
    expect(variantPicker('unknown')).toBe('blue');
  });
});
