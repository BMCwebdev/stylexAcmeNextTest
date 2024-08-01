import {
  OverlayArrow,
  Popover as AriaPopover,
  PopoverProps as AriaPopoverProps,
} from 'react-aria-components';
import React from 'react';
import * as stylex from '@stylexjs/stylex';

import { colorsElevation, colorsShadow } from "@brianAcme/stitch-tokens/colors.stylex";
import { sizes } from "@brianAcme/stitch-tokens/sizes.stylex";

export interface PopoverProps extends Omit<AriaPopoverProps, 'children'> {
  showArrow?: boolean;
  children: React.ReactNode;
}

const slideIn = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(-10px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
});
const slideOut = stylex.keyframes({
  from: { opacity: 1, transform: 'translateY(0)' },
  to: { opacity: 0, transform: 'translateY(-10px)' },
});
const fadeIn = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});
const fadeOut = stylex.keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const popoverStyle = stylex.create({
  base: {
    backgroundColor:  colorsElevation.raised_medium,
    borderRadius: sizes.border_md,
    boxShadow: colorsShadow.raised_medium,
    animationName: {
      ':is([data-entering])': `${fadeIn}, ${slideIn}`,
      ':is([data-exiting])': `${fadeOut}, ${slideOut}`,
    },
    animationDuration: {
      ':is([data-entering])': '0.2s',
      ':is([data-exiting])': '0.15s',
    },
    animationTimingFunction: {
      ':is([data-entering])': 'ease-out',
      ':is([data-exiting])': 'ease-in',
    },
    animationFillMode: {
      ':is([data-entering])': 'forwards',
      ':is([data-exiting])': 'forwards',
    },
  },
  arrowStyles: {
    display: 'block',
    fill: colorsElevation.raised_medium,
    strokeWidth: '1px',
    stroke: 'rgba(0, 0, 0, 0.1)',
  }
});

const placementStyles = stylex.create({
  base: {
    transform: {
      default: 'initial',
      ':is([placement="bottom"]) > svg': 'rotate(180deg)',
      ':is([placement="left"]) > svg': 'rotate(-90deg)',
      ':is([placement="right"]) > svg': 'rotate(90deg)',
      ':is([placement="top"]) > svg': 'rotate(0deg)',
    }
  }
});

export function Popover({
  children,
  showArrow,
  ...props
}: PopoverProps) {
  return (
    <AriaPopover
      offset={showArrow ? 12 : 8}
      {...props}
      {...stylex.props(popoverStyle.base)}
    >
      {showArrow && (
        <OverlayArrow {...stylex.props(placementStyles.base)}>
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            {...stylex.props(popoverStyle.arrowStyles)}
          >
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      )}
      {children}
    </AriaPopover>
  );
}
