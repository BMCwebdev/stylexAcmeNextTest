"use client";

import * as React from "react";
import {
  composeRenderProps,
  Button as RACButton,
  ButtonProps as RACButtonProps,
  Menu as AriaMenu,
  MenuTrigger as AriaMenuTrigger,
  MenuItem as AriaMenuItem,
  SubmenuTrigger as AriaSubmenuTrigger,
  type MenuItemProps as AriaMenuItemProps,
  type SubmenuTriggerProps as AriaSubmenuTriggerProps,
  type MenuProps as AriaMenuProps,
  type MenuTriggerProps as AriaMenuTriggerProps,
} from "react-aria-components";
import { styleXFocusRing } from './utils';

import * as stylex from '@stylexjs/stylex';
import { Check, ChevronRight } from 'lucide-react';


import { Keyboard } from "./Keyboard";
import { Popover, type PopoverProps } from "./Popover";
import { Text } from "./Text";

import { sizes } from "@brianAcme/stitch-tokens/sizes.stylex";
import { colorsBackground } from "@brianAcme/stitch-tokens/colors.stylex";

const menuStyles = stylex.create({
  base: {
    outline: 'none',
    overflow: 'auto',
    maxHeight: 'inherit',
  }
});

const menuItemStyles = stylex.create({
  base: {
    backgroundColor: 'transparent',
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    padding: `${sizes.spacing_100} ${sizes.spacing_300}`,
    outline: 'none',
    transition: 'background-color 0.2s',
    minWidth: '320px',
  },
  hovered: {
    backgroundColor: colorsBackground.neutral_hovered,
  },
  pressed: {
    backgroundColor: colorsBackground.neutral_pressed,
  },
  focus: {
    backgroundColor: colorsBackground.neutral_hovered,
  },
  disabled: {
    pointerEvents: 'none',
    color: colorsBackground.disabled,
  },
  checkboxWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes.spacing_500,
  },
  checkbox: {
    height: sizes.spacing_500,
    width: sizes.spacing_500,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  wrapperText: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  wrapperIcon: {
    width: '1rem',
    height: '1rem',
  }
});
const menuButtonStyles = stylex.create({
  base: {
    alignContent: 'center',
    backgroundColor: colorsBackground.neutral,
    border: 'none',
    borderRadius: sizes.radius_full,
    cursor: 'default',
    display: 'flex',
    justifyContent: 'center',
    padding: sizes.spacing_50,
    transitionDuration: '150ms',
    transitionProperty:
      'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  disabled: {
    backgroundColor: colorsBackground.disabled,
  },
  hovered: {
    backgroundColor: colorsBackground.neutral_hovered,
  },
  pressed: {
    backgroundColor: colorsBackground.neutral_pressed,
  },
});

// type MenuTriggerProps = AriaMenuTriggerProps;
export interface MenuTriggerProps extends AriaMenuTriggerProps {}

export function MenuTrigger(props: MenuTriggerProps) {
  return <AriaMenuTrigger {...props} />;
}

// type SubMenuTriggerProps = AriaSubmenuTriggerProps;
export interface SubMenuTriggerProps extends AriaSubmenuTriggerProps {}

export function SubMenuTrigger(props: SubMenuTriggerProps) {
  return <AriaSubmenuTrigger {...props} />;
}

export interface MenuProps<T> extends AriaMenuProps<T> {
  placement?: PopoverProps['placement']
}

export function Menu<T extends object>(props: MenuProps<T>) {
  return (
    <Popover placement={props.placement}>
      <AriaMenu
        {...stylex.props(menuStyles.base)}
        {...props}
      />
    </Popover>
  );
}

export interface MenuButtonProps extends RACButtonProps {}
export function MenuButton({ ...props}: MenuButtonProps) {
  return (
    <RACButton
      {...props}
      className={(composeRenderProps) => stylex.props(
        menuButtonStyles.base,
        composeRenderProps.isHovered && menuButtonStyles.hovered,
        composeRenderProps.isPressed && menuButtonStyles.pressed,
        props.isDisabled && menuButtonStyles.disabled,
        composeRenderProps.isFocusVisible && styleXFocusRing.base,
      ).className || ''}
    />
  );
}

export interface MenuItemProps<T> extends AriaMenuItemProps<T> {
  description?: string;
  label?: string;
  prefix?: React.ReactNode;
  shortcut?: string;
  suffix?: React.ReactNode;
}
export function MenuItem<T extends object>({
  description,
  label,
  prefix,
  shortcut,
  suffix,
  ...props
}: MenuItemProps<T>) {
  return (
    <AriaMenuItem
      {...props}
      className={( composeRenderProps) => stylex.props(
        menuItemStyles.base,
        props.isDisabled && menuItemStyles.disabled,
        composeRenderProps.isFocused && menuItemStyles.focus,
        composeRenderProps.isFocusVisible && styleXFocusRing.base,
      ).className || ''}
    >
      {composeRenderProps(
        props.children,
        (children, { selectionMode, isSelected, hasSubmenu }) => (
          <>
            {selectionMode !== 'none' && (
              <span {...stylex.props(menuItemStyles.checkboxWrapper)}>
                {isSelected && (
                  <Check
                    aria-hidden
                    {...stylex.props(menuItemStyles.checkbox)}
                  />
                )}
              </span>
            )}
            {/* The intention is to implement icon library here in Prefix and Suffix */}
            {prefix}
            <span {...stylex.props(menuItemStyles.wrapper)}>
              <span {...stylex.props(menuItemStyles.wrapperText)}>
                {label && <Text weight="500" color="default">{label}</Text>}
                {description && <Text size="medium" weight="400" color="secondary" >{description}</Text>}
                {children}
              </span>
              {suffix}
              {shortcut && <Keyboard>{shortcut}</Keyboard>}
              {hasSubmenu && (
                <ChevronRight
                  aria-hidden
                  {...stylex.props(menuItemStyles.wrapperIcon)}
                />
              )}
            </span>
          </>
        ),
      )}
    </AriaMenuItem>
  );
}
