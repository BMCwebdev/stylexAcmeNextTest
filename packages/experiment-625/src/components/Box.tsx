import { ReactNode } from 'react';
import { colors } from '@bmcwebdev/stitch-tokens/colors.stylex';
import { sizes } from '@bmcwebdev/stitch-tokens/sizes.stylex';

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  box: {
    background: colors.neutral_0,
  },
  border: {
    border: `${sizes.border_md} solid ${colors.neutral_500}`,
  },
  variantRed: {
    borderColor: colors.red_500,
    background: colors.red_50,
    color: colors.red_900,
  },
  variantGreen: {
    borderColor: colors.green_500,
    background: colors.green_50,
    color: colors.green_900,
  },
  variantBlue: {
    borderColor: colors.blue_500,
    background: colors.blue_50,
    color: colors.blue_900,
  },
  variantYellow: {
    borderColor: colors.yellow_500,
    background: colors.yellow_50,
    color: colors.yellow_900,
  },
  paddingSmall: {
    padding: sizes.spacing_100,
  },
  paddingMedium: {
    padding: sizes.spacing_400,
  },
  paddingLarge: {
    padding: sizes.spacing_700,
  },
  radiusSmall: {
    borderRadius: sizes.radius_sm,
  },
  radiusMedium: {
    borderRadius: sizes.radius_md,
  },
  radiusLarge: {
    borderRadius: sizes.radius_lg,
  },
});

export interface BoxProps {
  border?: boolean;
  children: ReactNode;
  padding?: 'none' | 'small' | 'medium' | 'large';
  radius?: 'none' | 'small' | 'medium' | 'large';
  variant?: 'blue' | 'default' | 'green' | 'red' | 'yellow';
}

export function Box({
  border,
  children,
  padding = 'medium',
  radius = 'none',
  variant = 'default',
}: BoxProps) {
  return (
    <div
      {...stylex.props(
        styles.box,
        border && styles.border,
        variant === 'red' && styles.variantRed,
        variant === 'green' && styles.variantGreen,
        variant === 'blue' && styles.variantBlue,
        variant === 'yellow' && styles.variantYellow,
        radius === 'small' && styles.radiusSmall,
        radius === 'medium' && styles.radiusMedium,
        radius === 'large' && styles.radiusLarge,
        padding === 'small' && styles.paddingSmall,
        padding === 'medium' && styles.paddingMedium,
        padding === 'large' && styles.paddingLarge,
      )}
    >
      {children}
    </div>
  );
}
