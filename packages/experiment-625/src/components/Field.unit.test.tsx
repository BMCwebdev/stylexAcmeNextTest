import { describe, expect, test  } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Description, Input, Label } from './Field';

describe('Field components', async () => {
  test('renders required label', async () => {
    render(
      <Label required={true}>Test Label</Label>,
    );
    const textFieldElement = screen.getByText('Test Label');
    expect(textFieldElement).toBeInTheDocument();

    const requiredElement = screen.getByText('*');
    expect(requiredElement).toBeInTheDocument();
  });

  test('renders optional label', async () => {
    render(
      <Label required={false}>Test Label</Label>,
    );
    const textFieldElement = screen.getByText('Test Label');
    expect(textFieldElement).toBeInTheDocument();

    const requiredElement = screen.queryByText('*');
    expect(requiredElement).toBeNull();
  });

  test('renders description', async () => {
    const { container } = render(
      <Description />,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders standard text input', async () => {
    const { container } = render(
      <Input value="test input value" />,
    );
    expect(container).toMatchSnapshot();
  });
});
