import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react';
import { Pagination } from './Pagination';

// Reset all mocks and cleanup between tests
afterEach(() => {
  vi.resetAllMocks();
  cleanup();
});

describe('Pagination Component', () => {
  it('changes to the next page when Next button is clicked', async () => {
    const handleListChange = vi.fn();

    render(
      <Pagination
        onListChange={handleListChange}
        itemsPerPage={10}
        url="https://jsonplaceholder.typicode.com/posts"
      />
    );

    // Use findAllByText to get all matching elements
    const paginationTexts = await screen.findAllByText((content, element) => {
      const hasText = (node) => node && node.textContent.trim() === '1 of 10';
      return hasText(element) || Array.from(element.children).some(hasText);
    });

    // Assert that at least one of the matched elements is correct
    expect(paginationTexts.some(el => el.textContent.trim() === '1 of 10')).toBe(true);

    const nextButton = screen.getByRole('button', { name: /next/i });

    await act(async () => {
      fireEvent.click(nextButton);
    });

    await waitFor(() => {
      const nextPageTexts = screen.getAllByText((content, element) => {
        const hasText = (node) => node && node.textContent.trim() === '2 of 10';
        return hasText(element) || Array.from(element.children).some(hasText);
      });

      expect(nextPageTexts.some(el => el.textContent.trim() === '2 of 10')).toBe(true);
    });
  });

  it('changes to the previous page when Previous button is clicked', async () => {
    const handleListChange = vi.fn();

    render(
      <Pagination
        onListChange={handleListChange}
        itemsPerPage={10}
        url="https://jsonplaceholder.typicode.com/posts"
      />
    );

    // Use findAllByText to get all matching elements
    const initialPaginationTexts = await screen.findAllByText((content, element) => {
      const hasText = (node) => node && node.textContent.trim() === '1 of 10';
      return hasText(element) || Array.from(element.children).some(hasText);
    });

    // Assert that at least one of the matched elements is correct
    expect(initialPaginationTexts.some(el => el.textContent.trim() === '1 of 10')).toBe(true);

    const nextButton = screen.getByRole('button', { name: /next/i });

    await act(async () => {
      fireEvent.click(nextButton);
    });

    await waitFor(() => {
      const nextPageTexts = screen.getAllByText((content, element) => {
        const hasText = (node) => node && node.textContent.trim() === '2 of 10';
        return hasText(element) || Array.from(element.children).some(hasText);
      });

      expect(nextPageTexts.some(el => el.textContent.trim() === '2 of 10')).toBe(true);
    });

    const prevButton = screen.getByRole('button', { name: /previous/i });

    await act(async () => {
      fireEvent.click(prevButton);
    });

    await waitFor(() => {
      const prevPageTexts = screen.getAllByText((content, element) => {
        const hasText = (node) => node && node.textContent.trim() === '1 of 10';
        return hasText(element) || Array.from(element.children).some(hasText);
      });

      expect(prevPageTexts.some(el => el.textContent.trim() === '1 of 10')).toBe(true);
    });
  });

  it('disables Previous button on the first page', async () => {
    const handleListChange = vi.fn();

    render(
      <Pagination
        onListChange={handleListChange}
        itemsPerPage={10}
        url="https://jsonplaceholder.typicode.com/posts"
      />
    );

    // Use findAllByText to get all matching elements
    const initialPaginationTexts = await screen.findAllByText((content, element) => {
      const hasText = (node) => node && node.textContent.trim() === '1 of 10';
      return hasText(element) || Array.from(element.children).some(hasText);
    });

    // Assert that at least one of the matched elements is correct
    expect(initialPaginationTexts.some(el => el.textContent.trim() === '1 of 10')).toBe(true);

    const prevButton = screen.getByRole('button', { name: /previous/i });

    expect(prevButton).toBeDisabled();
  });

  it('disables Next button on the last page', async () => {
    const handleListChange = vi.fn();

    render(
      <Pagination
        onListChange={handleListChange}
        itemsPerPage={10}
        url="https://jsonplaceholder.typicode.com/posts"
      />
    );

    // Use findAllByText to get all matching elements
    const initialPaginationTexts = await screen.findAllByText((content, element) => {
      const hasText = (node) => node && node.textContent.trim() === '1 of 10';
      return hasText(element) || Array.from(element.children).some(hasText);
    });

    // Assert that at least one of the matched elements is correct
    expect(initialPaginationTexts.some(el => el.textContent.trim() === '1 of 10')).toBe(true);

    const nextButton = screen.getByRole('button', { name: /next/i });

    for (let i = 0; i < 9; i++) {
      await act(async () => {
        fireEvent.click(nextButton);
      });
    }

    await waitFor(() => {
      const lastPageTexts = screen.getAllByText((content, element) => {
        const hasText = (node) => node && node.textContent.trim() === '10 of 10';
        return hasText(element) || Array.from(element.children).some(hasText);
      });

      expect(lastPageTexts.some(el => el.textContent.trim() === '10 of 10')).toBe(true);
    });

    expect(nextButton).toBeDisabled();
  });
});
