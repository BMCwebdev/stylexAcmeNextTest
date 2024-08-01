import { useEffect, useState, useRef } from 'react';
import { useAsyncList, AsyncListData } from '@react-stately/data';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from './Button';
import { Text } from './Text';
import { InlineStack } from './layout/InlineStack';
import { colorsIcon } from '@brianAcme/stitch-tokens/colors.stylex';

interface PaginationProps {
  itemsPerPage: number;
  onListChange: (list: AsyncListData<any>) => void;
  url: string;
}

interface PaginationUIProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  onListChange,
  url,
}) => {
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const currentPageRef = useRef<number>(1);

  useEffect(() => {
    const fetchTotalCount = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Failed to fetch total count');
        }
        const data = await res.json();
        setTotalPages(Math.ceil(data.length / itemsPerPage));
      } catch (error) {
        console.error('Error fetching total count:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTotalCount();
  }, [itemsPerPage, url]);

  const list = useAsyncList<any>({
    async load({ signal }) {
      const page = currentPageRef.current;
      const res = await fetch(
        `${url}?_page=${page}&_limit=${itemsPerPage}`,
        { signal },
      );
      if (!res.ok) {
        throw new Error('Failed to fetch page data');
      }
      const json = await res.json();
      return {
        items: json,
      };
    },
  });

  useEffect(() => {
    onListChange(list);
  }, [list, onListChange]);

  const handlePageChange = async (page: number) => {
    if (page !== currentPageRef.current) {
      currentPageRef.current = page;
      await list.reload();
    }
  };

  return (
    <div>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <PaginationUI
          currentPage={currentPageRef.current}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

const PaginationUI: React.FC<PaginationUIProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;
  const iconPrevColor = isPrevDisabled
    ? colorsIcon.disabled
    : colorsIcon.default;
  const iconNextColor = isNextDisabled
    ? colorsIcon.disabled
    : colorsIcon.default;
  return (
    <InlineStack horizontalAlign="safeCenter" verticalAlign="center" gap="300">
      <Button
        aria-label="Previous"
        onPress={() => onPageChange(currentPage - 1)}
        isDisabled={isPrevDisabled}
        variant="icon"
      >
        <ChevronLeft size={14} color={iconPrevColor} />
      </Button>
      <Text elementType="span" size="large">
        <InlineStack
          horizontalAlign="safeCenter"
          verticalAlign="center"
          gap="100"
        >
          {currentPage} <span>of</span> {totalPages}
        </InlineStack>
      </Text>
      <Button
        aria-label="Next"
        onPress={() => onPageChange(currentPage + 1)}
        isDisabled={isNextDisabled}
        variant="icon"
      >
        <ChevronRight size={14} color={iconNextColor} />
      </Button>
    </InlineStack>
  );
};
