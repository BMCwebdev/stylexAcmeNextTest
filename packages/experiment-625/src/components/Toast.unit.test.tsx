import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { GlobalToastProvider, toastQueue } from './Toast';
import { act } from 'react';

describe('GlobalToastProvider Component', () => {
  let toastKeys = [];

  beforeEach(() => {
    cleanup();
    toastKeys = [];
  });

  afterEach(() => {
    act(() => {
      toastKeys.forEach(key => toastQueue.close(key));
      toastKeys = [];
    });
  });

  it('renders a toast with the correct title and description', () => {
    act(() => {
      const key = toastQueue.add({
        title: 'Test Toast Title',
        description: 'Test Toast Description',
        variant: 'info'
      });
      toastKeys.push(key);
    });

    render(<GlobalToastProvider />);

    const titleElement = screen.getByText((content, element) => {
      const hasText = (node) => node && node.textContent.trim() === 'Test Toast Title';
      return hasText(element) && element.tagName.toLowerCase() === 'span';
    });

    const descriptionElement = screen.getByText((content, element) => {
      const hasText = (node) => node && node.textContent.trim() === 'Test Toast Description';
      return hasText(element) && element.tagName.toLowerCase() === 'span';
    });

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders multiple toasts correctly', () => {
    act(() => {
      toastKeys.push(toastQueue.add({
        title: 'First Toast',
        description: 'First Description',
        variant: 'success'
      }));
      toastKeys.push(toastQueue.add({
        title: 'Second Toast',
        description: 'Second Description',
        variant: 'warning'
      }));
    });

    render(<GlobalToastProvider />);

    const firstTitleElement = screen.getByText((content, element) => {
      const hasText = (node) => node && node.textContent.trim() === 'First Toast';
      return hasText(element) && element.tagName.toLowerCase() === 'span';
    });

    const secondTitleElement = screen.getByText((content, element) => {
      const hasText = (node) => node && node.textContent.trim() === 'Second Toast';
      return hasText(element) && element.tagName.toLowerCase() === 'span';
    });

    const firstDescriptionElement = screen.getByText((content, element) => {
      const hasText = (node) => node && node.textContent.trim() === 'First Description';
      return hasText(element) && element.tagName.toLowerCase() === 'span';
    });

    const secondDescriptionElement = screen.getByText((content, element) => {
      const hasText = (node) => node && node.textContent.trim() === 'Second Description';
      return hasText(element) && element.tagName.toLowerCase() === 'span';
    });

    expect(firstTitleElement).toBeInTheDocument();
    expect(secondTitleElement).toBeInTheDocument();
    expect(firstDescriptionElement).toBeInTheDocument();
    expect(secondDescriptionElement).toBeInTheDocument();
  });

  // it('clears all toasts after closing', async () => {
  //   act(() => {
  //     toastKeys.push(toastQueue.add({
  //       title: 'First Toast',
  //       description: 'First Description',
  //       variant: 'success'
  //     }));
  //     toastKeys.push(toastQueue.add({
  //       title: 'Second Toast',
  //       description: 'Second Description',
  //       variant: 'warning'
  //     }));
  //   });

  //   render(<GlobalToastProvider />);

  //   // Close all toasts
  //   act(() => {
  //     toastKeys.forEach(key => toastQueue.close(key));
  //   });

  //   // Wait for animations to complete and check if any toasts are still visible
  //   await waitFor(() => {
  //     const firstTitleElements = screen.queryAllByText((content, element) => {
  //       const hasText = (node) => node && node.textContent.trim() === 'First Toast';
  //       return hasText(element) && element.tagName.toLowerCase() === 'span';
  //     });

  //     const secondTitleElements = screen.queryAllByText((content, element) => {
  //       const hasText = (node) => node && node.textContent.trim() === 'Second Toast';
  //       return hasText(element) && element.tagName.toLowerCase() === 'span';
  //     });

  //     const firstDescriptionElements = screen.queryAllByText((content, element) => {
  //       const hasText = (node) => node && node.textContent.trim() === 'First Description';
  //       return hasText(element) && element.tagName.toLowerCase() === 'span';
  //     });

  //     const secondDescriptionElements = screen.queryAllByText((content, element) => {
  //       const hasText = (node) => node && node.textContent.trim() === 'Second Description';
  //       return hasText(element) && element.tagName.toLowerCase() === 'span';
  //     });

  //     expect(firstTitleElements.length).toBe(0);
  //     expect(secondTitleElements.length).toBe(0);
  //     expect(firstDescriptionElements.length).toBe(0);
  //     expect(secondDescriptionElements.length).toBe(0);
  //   }, { timeout: 1500 }); // Ensure we wait long enough for animations to complete
  // });
});
