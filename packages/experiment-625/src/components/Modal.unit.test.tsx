import { describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', async () => {
  test('renders heading correctly', async () => {
    render(
      <Modal isOpen={true} headingText="Test Heading">
        Test Content
      </Modal>,
    );
    const headingElement = screen.getByText('Test Heading');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders content correctly', async () => {
    render(
      <Modal isOpen={true} headingText="Test Heading">
        Test Content
      </Modal>,
    );
    const contentElement = screen.getByText('Test Content');
    expect(contentElement).toBeInTheDocument();
  });

  test('closes the modal when the close button is clicked', async () => {
    const setIsOpen = vi.fn();
    render(
      <Modal isOpen={true} setIsOpen={setIsOpen} headingText="Test Heading">
        Test Content
      </Modal>,
    );
    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);
    expect(setIsOpen).toHaveBeenCalledWith(false);
  });
});
