import { ReactNode } from 'react';

import type {StyleXStyles} from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';

// I am concerned about min max media queries with a 1px gap when a fraction pixel is possible. I would like to swap all media query usage to use range queries, but want to confirm how far back we are supporting browsers. Other option, but I don't think we need to support super old browsers, would be: Vanilla CSS example:
// @media (max-width: 600px) {
//   @media not (width: 600px) {
//     .example { background: green; }
//   }
// }

const MAXSMALL = '@media (max-width: 479px)';
const MAXMEDIUM = '@media (max-width: 767px)';
const MAXLARGE = '@media (max-width: 1023px)';
const MINSMALL = '@media (min-width: 480px)';
const MINMEDIUM = '@media (min-width: 768px)';
const MINLARGE = '@media (min-width: 1024px)';

const styles = stylex.create({
  responsiveWrapper: {
    alignItems: 'center',
    display: 'flex',
  }
});

const hideBelowStyles = stylex.create({
  sm: {
    display: {
      default: 'initial',
      [MAXSMALL]: 'none'
    },
  },
  md: {
    display: {
      default: 'initial',
      [MAXMEDIUM]: 'none',
    }
  },
  lg: {
    display: {
      default: 'initial',
      [MAXLARGE]: 'none',
    }
  }
});

const hideAboveStyles = stylex.create({
  sm: {
    display: {
      default: 'initial',
      [MINSMALL]: 'none',
    }
  },
  md: {
    display: {
      default: 'initial',
      [MINMEDIUM]: 'none',
    }
  },
  lg: {
    display: {
      default: 'initial',
      [MINLARGE]: 'none',
    }
  }
});

const showBelowStyles = stylex.create({
  sm: {
    display: {
      default: 'none',
      [MAXSMALL]: 'initial',
    }
  },
  md: {
    display: {
      default: 'none',
      [MAXMEDIUM]: 'initial',
    }
  },
  lg: {
    display: {
      default: 'none',
      [MAXLARGE]: 'initial',
    }
  }
});

const showAboveStyles = stylex.create({
  sm: {
    display: {
      default: 'none',
      [MINSMALL]: 'initial',
    }
  },
  md: {
    display: {
      default: 'none',
      [MINMEDIUM]: 'initial',
    }
  },
  lg: {
    display: {
      default: 'none',
      [MINLARGE]: 'initial',
    }
  }
});

// Maybe move all of this to NavigationPageLayout.tsx? Grab a copy of childrenprops to use in the new file. Or switch to using inline ReactNode type eg: EndContainer({ children }: { children?: ReactNode })
type MediaQueryTypes = 'sm' | 'md' | 'lg';

interface HideAboveProps {
  hideAbove?: MediaQueryTypes;
  hideBelow?: never;
  showAbove?: never;
  showBelow?: never;
}
interface HideBelowProps {
  hideBelow?: MediaQueryTypes;
  hideAbove?: never;
  showAbove?: never;
  showBelow?: never;
}

interface ShowAboveProps {
  hideAbove?: never;
  hideBelow?: never;
  showAbove?: MediaQueryTypes;
  showBelow?: never;
}

interface ShowBelowProps {
  hideAbove?: never;
  hideBelow?: never;
  showAbove?: never;
  showBelow?: MediaQueryTypes;
}

export type ResponsiveWrapperProps = (HideAboveProps | HideBelowProps | ShowAboveProps | ShowBelowProps) & {
  children?: ReactNode;
  /** Custom styles to apply to the component */
  stitches?: StyleXStyles,
};

export function ResponsiveWrapper({ children, hideAbove,  hideBelow, showAbove, showBelow, stitches}: ResponsiveWrapperProps) {
  return (
    <span {...stylex.props(
      styles.responsiveWrapper,
      hideAbove && hideAboveStyles[hideAbove],
      hideBelow && hideBelowStyles[hideBelow],
      showAbove && showAboveStyles[showAbove],
      showBelow && showBelowStyles[showBelow],
      stitches && stitches
    )}>
      {children}
    </span>
  );
}
