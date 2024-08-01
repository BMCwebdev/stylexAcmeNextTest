import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InlineFeedback } from './InlineFeedback';

describe('InlineFeedback Component', () => {
  it('renders the correct icon and message for success type', () => {
    render(<InlineFeedback type="success" message="Success message" />);
    expect(screen.getByText('Success message')).toBeInTheDocument();
    const icon = screen.getByTestId('inline-feedback-icon');
    expect(icon).toHaveClass('lucide-check-circle');
  });

  it('renders the correct icon and message for warning type', () => {
    render(<InlineFeedback type="warning" message="Warning message" />);
    expect(screen.getByText('Warning message')).toBeInTheDocument();
    const icon = screen.getByTestId('inline-feedback-icon');
    expect(icon).toHaveClass('lucide-alert-triangle');
  });

  it('renders the correct icon and message for critical type', () => {
    render(<InlineFeedback type="critical" message="Critical message" />);
    expect(screen.getByText('Critical message')).toBeInTheDocument();
    const icon = screen.getByTestId('inline-feedback-icon');
    expect(icon).toHaveClass('lucide-alert-octagon');
  });

  it('renders the correct icon and message for info type', () => {
    render(<InlineFeedback type="info" message="Info message" />);
    expect(screen.getByText('Info message')).toBeInTheDocument();
    const icon = screen.getByTestId('inline-feedback-icon');
    expect(icon).toHaveClass('lucide-info');
  });

  it('renders the correct icon and message for tip type', () => {
    render(<InlineFeedback type="tip" message="Tip message" />);
    expect(screen.getByText('Tip message')).toBeInTheDocument();
    const icon = screen.getByTestId('inline-feedback-icon');
    expect(icon).toHaveClass('lucide-help-circle');
  });
});
