import { forwardRef, useContext, useCallback } from 'react';
import { PageLayoutContext } from './PageLayoutProvider';
import { ButtonContext } from 'react-aria-components';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

const maxLargeValue = 1023;

export const SideNavButton = forwardRef<HTMLButtonElement>((
  props,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  _ref
) => {
  // We are using an underscored `_ref` and disabling the ESLint warning for unused variables
  // because `forwardRef` requires a `ref` parameter to be in the function signature, even if it is not used directly.
  // In this component, we are utilizing `buttonRef` from `PageLayoutContext` instead of `_ref`.
  // This is because `buttonRef` needs to be accessed by multiple components (e.g., SideNav) for handling interactions
  // such as closing the navigation when clicking outside. Managing the ref at the context level ensures consistency
  // and allows other components to share the same ref.
  const { isNavOpen, setIsNavOpen, width, setFocusOnOpen, buttonRef } = useContext(PageLayoutContext);
  const buttonProps = { ...props };

  const handleClick = useCallback(() => {
    setFocusOnOpen(true);
    setIsNavOpen((prev) => !prev);
  }, [isNavOpen, setFocusOnOpen, setIsNavOpen]);

  if (width > maxLargeValue) {
    return null;
  }

  return (
    <ButtonContext.Provider value={{ ref: buttonRef }}>
      <Button
        {...buttonProps}
        aria-controls="main-navigation"
        aria-expanded={isNavOpen}
        aria-label={isNavOpen ? "Close navigation" : "Open navigation"}
        onPress={handleClick}
        variant="icon"
      >
        {isNavOpen ? <X /> : <Menu />}
      </Button>
    </ButtonContext.Provider>
  );
});
