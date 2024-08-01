import {JSXElementConstructor, ReactNode, useState} from 'react';
import {DOMAttributes} from '@react-types/shared';
import {useFocusWithin} from 'react-aria';
import type {StyleXStyles} from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';

/**
 * This component is a fork of VisuallyHidden component and hook from React Aria.
 * We needed to fork it because the original component used inline styles, which
 * are not supported in Stitch in anticipation of CSP requirements.
 */

const styles = stylex.create({
  visuallyHiddenStyles: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
    whiteSpace: 'nowrap'
  }
});

export interface VisuallyHiddenProps extends DOMAttributes {
  /** The content to visually hide. */
  children?: ReactNode,

  /**
   * The element type for the container.
   * @default 'div'
   */
  elementType?: string | JSXElementConstructor<any>,

  /** Whether the element should become visible on focus, for example skip links. */
  isFocusable?: boolean,

  /** Custom styles to apply to the component */
  stitches?: StyleXStyles,
}

export interface VisuallyHiddenAria {
  visuallyHiddenProps: DOMAttributes,
  isFocused: boolean
}

/**
 * Provides props for an element that hides its children visually
 * but keeps content visible to assistive technology.
 */
export function useVisuallyHidden(
  props: VisuallyHiddenProps = {},
): VisuallyHiddenAria & { isFocused: boolean } {
  const { isFocusable } = props;

  const [isFocused, setFocused] = useState(false);
  const { focusWithinProps } = useFocusWithin({
    isDisabled: !isFocusable,
    onFocusWithinChange: (val) => setFocused(val),
  });

  return {
    visuallyHiddenProps: {
      ...focusWithinProps,
    },
    isFocused,
  };
}


/**
 * VisuallyHidden hides its children visually, while keeping content visible
 * to screen readers.
 */
export function VisuallyHidden(props: VisuallyHiddenProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {children, elementType: Element = 'div', isFocusable, stitches, ...otherProps} = props;
  const {visuallyHiddenProps, isFocused} = useVisuallyHidden(props);

  return (
    <Element
      {...otherProps}
      {...visuallyHiddenProps}
      {...stylex.props(
        !isFocused && styles.visuallyHiddenStyles,
        stitches && stitches
      )}
    >
      {children}
    </Element>
  );
}
