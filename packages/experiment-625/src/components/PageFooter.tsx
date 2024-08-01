import { ReactNode } from 'react';

import { sizes } from '@bmcwebdev/stitch-tokens/sizes.stylex';
import { colors } from '@bmcwebdev/stitch-tokens/colors.stylex';

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  footer: {
    alignItems: 'center',
    backgroundColor: colors.neutral_100,
    display: 'flex',
    gap: sizes.spacing_200,
    gridArea: 'page-footer',
    justifyContent: 'center',
    minHeight: sizes.spacing_900,
    overflow: 'hidden',
    padding: sizes.spacing_500,
  },
});

interface PageFooterChildrenProps {
  children?: ReactNode;
}

export function PageFooter({ children }: PageFooterChildrenProps) {

  return (
    <footer {...stylex.props(styles.footer)}>
      {children}
    </footer>
  );
}
