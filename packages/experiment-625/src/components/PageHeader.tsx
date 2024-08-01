import { ReactNode, ReactElement } from 'react';

import { colorsElevation, colorsBorder } from '@brianAcme/stitch-tokens/colors.stylex';
import { sizes } from '@brianAcme/stitch-tokens/sizes.stylex';

import * as stylex from '@stylexjs/stylex';

const MINLARGE = '@media (min-width: 1024px)';

const styles = stylex.create({
  header: {
    alignItems: 'center',
    backgroundColor: colorsElevation.surface,
    borderBottom: `1px ${colorsBorder.default} solid`,
    boxShadow: colorsElevation.raised_high,
    display: 'flex',
    gap: sizes.spacing_100,
    gridArea: 'page-header',
    justifyContent: 'flex-start',
    minHeight: sizes.spacing_900,
    overflow: 'hidden',
    padding: {
      default: `${sizes.spacing_100} ${sizes.spacing_300}`,
      [MINLARGE]: `${sizes.spacing_100} ${sizes.spacing_500}`,
    },
    position: 'sticky',
    top: 0,
    // We should tokenize zIndex values
    zIndex: 50,
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    gap: sizes.spacing_100,
    height: '100%',
  },
  endContainer: {
    marginStart: 'auto',
  }
});

export interface ChildrenProps {
  children?: ReactNode;
}

interface PageHeaderChildrenProps {
  children: [ReactElement<typeof StartContainer>, ReactElement<typeof EndContainer>];
}

export function PageHeader({ children }: PageHeaderChildrenProps) {

  return (
    <header {...stylex.props(styles.header)}>
      {children}
    </header>
  );
}

export function StartContainer({ children }: ChildrenProps) {
  return (
    <span {...stylex.props(styles.container)}>
      {children}
    </span>
  );
}

export function EndContainer({ children }: ChildrenProps) {
  return (
    <span {...stylex.props(styles.container, styles.endContainer)}>
      {children}
    </span>
  );
}
