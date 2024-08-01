import React, { ReactNode } from 'react';
import { sizes } from '@brianAcme/stitch-tokens/sizes.stylex';
import { colors } from '@brianAcme/stitch-tokens/colors.stylex';
import type {StyleXStyles} from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  main: {
    backgroundColor: colors.neutral_100,
    display: 'flex',
    flexDirection: 'column',
    gridArea: 'main-container',
    overflow: 'auto',
    padding: sizes.spacing_500,
  },
});

export const MainContainer: React.FC<{
  children?: ReactNode;
  stitches?: StyleXStyles;
}> = ({ children, stitches }) => (
  <main
    {...stylex.props(styles.main, stitches && stitches)}
    id="stitch-main-container"
    tabIndex={-1}
  >
    {children}
  </main>
);
