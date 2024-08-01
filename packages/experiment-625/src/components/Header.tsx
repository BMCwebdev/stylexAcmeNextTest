import { forwardRef, HTMLAttributes } from 'react';
import { Header as AriaHeader } from 'react-aria-components';

type CustomHeaderProps = HTMLAttributes<HTMLElement>;

export const Header = forwardRef<HTMLElement, CustomHeaderProps>(({ children, ...props }, ref) => {
  return (
    <AriaHeader {...props} ref={ref}>
      {children}
    </AriaHeader>
  );
});
