import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TextField } from './TextField';

describe('TextField', async () => {
  test('renders inner components correctly', async () => {
    render(
      <TextField
        label="Test Label"
        value="Test Value"
        description="Test Desc"
        errorMessage="Test Error msg"
        isInvalid={true}
      />,
    );
    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByDisplayValue('Test Value');
    expect(inputElement).toBeInTheDocument();

    const descElement = screen.getByText('Test Desc');
    expect(descElement).toBeInTheDocument();

    const errorElement = screen.getByText('Test Error msg');
    expect(errorElement).toBeInTheDocument();
  });

  test('renders multiline as textarea', async () => {
    render(
      <TextField
        label="Test Label"
        value="Test Value"
        description="Test Desc"
        multiLine={true}
      />,
    );
    const textAreaElement = screen.getByText('Test Value');
    expect(textAreaElement).toBeInTheDocument();
    expect(textAreaElement.nodeName).toBe('TEXTAREA');
  });
});
