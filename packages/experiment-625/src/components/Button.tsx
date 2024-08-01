import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
  ButtonRenderProps,
} from 'react-aria-components';
import * as stylex from '@stylexjs/stylex';

import { colorsAlpha, colorsBackground, colorsBorder, colorsIcon, colorsShadow, colorsSymantic, colorsText } from '@brianAcme/stitch-tokens/colors.stylex';
import { sizes } from '@brianAcme/stitch-tokens/sizes.stylex';
import { fonts } from '@brianAcme/stitch-tokens/fonts.stylex';
import { styleXFocusRing } from './utils';

export interface ButtonProps extends RACButtonProps {
  variant?: 'default' | 'primary' | 'secondary' | 'destructive' | 'icon';
}

const buttonStyle = stylex.create({
  base: {
    alignContent: 'center',
    // we should have rgba tokens
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: sizes.radius_sm,
    borderWidth: sizes.border_sm,
    color: colorsText.default,
    cursor: 'default',
    display: 'flex',
    fontSize: fonts.size_200,
    fontWeight: fonts.weight_600,
    gap: sizes.spacing_100,
    justifyContent: 'center',
    lineHeight: fonts.line_height_100,
    outline: 'none',
    padding: `${sizes.spacing_100} ${sizes.spacing_200}`,
    textAlign: 'center',
    // these should be tokens too
    transitionDuration: '150ms',
    transitionProperty:
      'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
});
const variants = stylex.create({
  default: {
    backgroundColor: colorsBackground.neutral,
    boxShadow: `
      inset 0 0 0 ${sizes.border_sm} ${colorsBorder.default},
      ${colorsShadow.raised_lowest}
    `,
    color: colorsText.default,
  },
  destructive: {
    backgroundColor: colorsBackground.critical,
    color: colorsText.inverse,
  },
  icon: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: sizes.radius_full,
    borderWidth: 0,
    color: colorsIcon.default,
    height: sizes.spacing_500,
    padding: 0,
    width: sizes.spacing_500,
  },
  primary: {
    backgroundColor: colorsSymantic.primary,
    color: colorsText.inverse,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderColor: colorsBorder.primary,
    borderWidth: sizes.border_md,
    // there should be a colorsText that has primary
    color: colorsSymantic.primary,
  },
});
const disabled = stylex.create({
  base: {
    backgroundColor: colorsBackground.disabled,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: sizes.border_sm,
    color: colorsText.disabled,
  },
});
const hoveredVariants = stylex.create({
  default: {
    backgroundColor: colorsBackground.neutral_hovered,
    boxShadow: `inset 0 0 0 ${sizes.border_sm} ${colorsBorder.default}`,
  },
  destructive: {
    backgroundColor: colorsBackground.critical_hovered,
  },
  icon: {
    backgroundColor: colorsBackground.neutral_hovered,
  },
  primary: {
    backgroundColor: colorsBackground.primary_hovered,
  },
  secondary: {
    backgroundColor: colorsAlpha.neutral_100,
  },
});
const pressedVariants = stylex.create({
  default: {
    backgroundColor: colorsBackground.neutral_pressed,
    boxShadow: `
      inset 0 0 0 ${sizes.border_sm} ${colorsBorder.default},
      inset 0 2px 1px 0px ${colorsShadow.default}
    `,
  },
  destructive: {
    backgroundColor: colorsBackground.critical_pressed,
  },
  icon: {
    backgroundColor: colorsBackground.neutral_pressed,
  },
  primary: {
    backgroundColor: colorsBackground.primary_pressed,
  },
  secondary: {
    backgroundColor: colorsAlpha.neutral_200,
  },
});

export function Button({ variant = 'default', ...props}: ButtonProps) {
  const variantStyles = variants[variant];
  const hoveredStyles = hoveredVariants[variant];  
  const pressedStyles = pressedVariants[variant];
  return (
    <RACButton
      {...props}
      className={(renderProps: ButtonRenderProps) => stylex.props(
        buttonStyle.base,
        variantStyles,
        renderProps.isHovered && hoveredStyles,
        renderProps.isPressed && pressedStyles,
        props.isDisabled && disabled.base,
        renderProps.isFocusVisible && styleXFocusRing.base,
      ).className || ''}
    />
  );
}
