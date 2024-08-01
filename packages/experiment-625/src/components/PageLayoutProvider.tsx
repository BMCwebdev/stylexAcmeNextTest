import React, { ReactNode, createContext, useState, useEffect, useCallback, useRef } from 'react';
import { VisuallyHidden } from './VisuallyHidden';
import * as stylex from '@stylexjs/stylex';

const MINLARGE = '@media (min-width: 1024px)';
const maxLargeValue = 1023;

const styles = stylex.create({
  isolator: {
    isolation: 'isolate',
  },
  layout: {
    display: 'grid',
    gridTemplateAreas: {
      default: `
        'page-header page-header'
        'main-container main-container'
        'page-footer page-footer'
      `,
      [MINLARGE]: `
        'page-header page-header'
        'side-nav main-container'
        'side-nav page-footer'
      `
    },
    gridTemplateColumns: {
      default: '1fr',
      [MINLARGE]: '280px 1fr',
    },
    gridTemplateRows: 'auto 1fr auto',
    height: '100vh',
  },
  visuallyHiddenContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '1rem',
    backgroundColor: 'white',
    zIndex: 100,
  }
});

interface PageLayoutProviderProps {
  children: ReactNode;
}

export interface PageLayoutContextProps {
  buttonRef: React.RefObject<HTMLButtonElement>;
  focusOnOpen: boolean;
  setFocusOnOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  width: number;
}

export const PageLayoutContext = createContext<PageLayoutContextProps>({
  buttonRef: { current: null },
  focusOnOpen: false,
  setFocusOnOpen: () => {},
  isNavOpen: false,
  setIsNavOpen: () => {},
  width: 0,
});

// Custom useViewportSize hook. Originally we were using this hook from @react-aria/utils:
// import { useViewportSize } from '@react-aria/utils';
// However, there were hydration issues where the hook would return the wrong size on the client. We will want to investigate this further, as this hook is more performant than the custom hook, and helpful on iOS (especially when keyboard slides up). 
const useViewportSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
};

export const PageLayoutProvider: React.FC<PageLayoutProviderProps> = ({ children }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [focusOnOpen, setFocusOnOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { width } = useViewportSize();
  // All mounted state was added to support the custom useViewportSize hook.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (width > maxLargeValue) {
        setIsNavOpen(true);
        setFocusOnOpen(false);
      } else if (width <= maxLargeValue && !focusOnOpen) {
        setIsNavOpen(false);
      }
    }
  }, [focusOnOpen, width, mounted]);

  const handleSetIsNavOpen: React.Dispatch<React.SetStateAction<boolean>> = useCallback(
    (value) => {
      setIsNavOpen((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        return newValue;
      });
    },
    []
  );

  if (!mounted) {
    return null;
  }

  return (
    <PageLayoutContext.Provider
      value={{
        buttonRef,
        focusOnOpen,
        setFocusOnOpen,
        isNavOpen,
        setIsNavOpen: handleSetIsNavOpen,
        width,
      }}
    >
      <div {...stylex.props(styles.isolator, styles.layout)}>
        <SkipToContent />
        {children}
      </div>
    </PageLayoutContext.Provider>
  );
};

function SkipToContent() {
  return (
    <VisuallyHidden isFocusable stitches={styles.visuallyHiddenContainer}>
      <a href="#stitch-main-container">Skip to main content</a>
    </VisuallyHidden>
  );
}
