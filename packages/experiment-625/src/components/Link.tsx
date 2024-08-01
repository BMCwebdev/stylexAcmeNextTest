import {
  Link as AriaLink,
  LinkProps as AriaLinkProps,
  LinkRenderProps,
} from 'react-aria-components';
import * as stylex from '@stylexjs/stylex';
import { colors, colorsText } from '@brianAcme/stitch-tokens/colors.stylex';
import { sizes } from '@brianAcme/stitch-tokens/sizes.stylex';
import { styleXFocusRing } from './utils';

const linkStyle = stylex.create({
  base: {
    textDecoration: 'underline',
    transition: 'all 0.2s ease-in-out',
    borderRadius: sizes.radius_sm,
  },
  disabled: {
    color: colorsText.default,
    cursor: 'default',
    textDecoration: 'none',
  },
});
const variants = stylex.create({
  primary: {
    color: colorsText.link,
    textDecoration: 'underline',
    textDecorationColor: colorsText.link,
    transition: 'color 0.3s, text-decoration-color 0.3s',
  },
  secondary: {
    color: colorsText.secondary,
    textDecoration: 'underline',
    textDecorationcolor: colorsText.secondary,
    transition: 'color 0.3s, text-decoration-color 0.3s',
  },
});
const hoveredVariants = stylex.create({
  primary: {
    color: colorsText.link_pressed,
    textDecorationColor: colorsText.link_pressed,
  },
  secondary: {
    color: colors.neutral_1100,
    textDecorationColor: colors.neutral_1100,
  }
});
type VariantType = 'primary' | 'secondary';
interface LinkProps extends AriaLinkProps {
  variant?: VariantType;
}

export function Link({variant = 'primary', ...props}: LinkProps) {
  const variantStyles = variants[variant];
  const hoveredStyles = hoveredVariants[variant];
  return (
    <AriaLink
      {...props}
      className={(renderProps: LinkRenderProps) => stylex.props(
        linkStyle.base,
        variantStyles,
        renderProps.isHovered && hoveredStyles,
        renderProps.isDisabled && linkStyle.disabled,
        renderProps.isFocusVisible && styleXFocusRing.base,
      ).className || ''}
    />
  );
}
