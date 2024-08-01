import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { sizes } from '@brianAcme/stitch-tokens/sizes.stylex';

// would be nice to gather re-useable types like this into a globalTypes file.
type AlignItems = 'normal' | 'stretch' | 'center' |  'start' | 'end' | 'flexStart' | 'flexEnd' | 'selfStart' | 'selfEnd' | 'baseline' | 'firstBaseline' | 'lastBaseline' | 'safeCenter' | 'unsafeCenter' | 'inherit' | 'initial' | 'revert' | 'revertLayer' | 'unset';
type ComponentType = 'div' | 'span';
type JustifyContent = 'normal' | 'start' | 'center' | 'end' | 'flexStart' | 'flexEnd' | 'left' | 'right' | 'spaceBetween' | 'spaceAround' | 'spaceEvenly' | 'stretch' | 'safeCenter' | 'unsafeCenter' | 'inherit' | 'initial' | 'revert' | 'revertLayer' | 'unset';
type Gap = '0' | '25' | '50' | '100' | '200' | '300' | '400' | '500';
type FlexWrap = 'wrap' | 'nowrap' | 'wrapReverse';
type Display = 'flex' | 'inlineFlex';


interface InlineStackProps {
  verticalAlign?: AlignItems;
  as?: ComponentType;
  children?: React.ReactNode;
  fullHeight?: boolean;
  horizontalAlign?: JustifyContent;
  gap?: Gap;
  columnGap?: Gap;
  rowGap?: Gap;
  flexWrap?: FlexWrap;
  display?: Display;
}

const displayStyles = stylex.create({
  flex: {
    display: 'flex',
  },
  inlineFlex: {
    display: 'inline-flex',
  },
});
const alignStyles = stylex.create({
  normal: {
    alignItems: 'normal'
  },
  stretch: {
    alignItems: 'stretch'
  },
  center: {
    alignItems: 'center'
  },
  start: {
    alignItems: 'start'
  },
  end: {
    alignItems: 'end'
  },
  flexStart: {
    alignItems: 'flex-start'
  },
  flexEnd: {
    alignItems: 'flex-end'
  },
  selfStart: {
    alignItems: 'self-start'
  },
  selfEnd: {
    alignItems: 'self-end'
  },
  baseline: {
    alignItems: 'baseline'
  },
  firstBaseline: {
    alignItems: 'first baseline'
  },
  lastBaseline: {
    alignItems: 'last baseline'
  },
  safeCenter: {
    alignItems: 'safe center'
  },
  unsafeCenter: {
    alignItems: 'unsafe center'
  },
  inherit: {
    alignItems: 'inherit'
  },
  initial: {
    alignItems: 'initial'
  },
  revert: {
    alignItems: 'revert'
  },
  revertLayer: {
    alignItems: 'revert-layer'
  },
  unset: {
    alignItems: 'unset'
  }
});
const fullHeightStyles = stylex.create({
  base: {
    height: '100%'
  }
});
const justifyStyles = stylex.create({
  normal: {
    justifyContent: 'normal'
  },
  start: {
    justifyContent: 'start'
  },
  center: {
    justifyContent: 'center'
  },
  end: {
    justifyContent: 'end'
  },
  flexStart: {
    justifyContent: 'flex-start'
  },
  flexEnd: {
    justifyContent: 'flex-end'
  },
  left: {
    justifyContent: 'left'
  },
  right: {
    justifyContent: 'right'
  },
  spaceBetween: {
    justifyContent: 'space-between'
  },
  spaceAround: {
    justifyContent: 'space-around'
  },
  spaceEvenly: {
    justifyContent: 'space-evenly'
  },
  stretch: {
    justifyContent: 'stretch'
  },
  safeCenter: {
    justifyContent: 'safe center'
  },
  unsafeCenter: {
    justifyContent: 'unsafe center'
  },
  inherit: {
    justifyContent: 'inherit'
  },
  initial: {
    justifyContent: 'initial'
  },
  revert: {
    justifyContent: 'revert'
  },
  revertLayer: {
    justifyContent: 'revert-layer'
  },
  unset: {
    justifyContent: 'unset'
  }
});
const gapStyles = stylex.create({
  0: {
    gap: sizes.spacing_0
  },
  25: {
    gap: sizes.spacing_25
  },
  50: {
    gap: sizes.spacing_50
  },
  100: {
    gap: sizes.spacing_100
  },
  200: {
    gap: sizes.spacing_200
  },
  300: {
    gap: sizes.spacing_300
  },
  400: {
    gap: sizes.spacing_400
  },
  500: {
    gap: sizes.spacing_500
  }
});
const columnGapStyles = stylex.create({
  0: {
    columnGap: sizes.spacing_0
  },
  25: {
    columnGap: sizes.spacing_25
  },
  50: {
    columnGap: sizes.spacing_50
  },
  100: {
    columnGap: sizes.spacing_100
  },
  200: {
    columnGap: sizes.spacing_200
  },
  300: {
    columnGap: sizes.spacing_300
  },
  400: {
    columnGap: sizes.spacing_400
  },
  500: {
    columnGap: sizes.spacing_500
  }
});
const rowGapStyles = stylex.create({
  0: {
    rowGap: sizes.spacing_0
  },
  25: {
    rowGap: sizes.spacing_25
  },
  50: {
    rowGap: sizes.spacing_50
  },
  100: {
    rowGap: sizes.spacing_100
  },
  200: {
    rowGap: sizes.spacing_200
  },
  300: {
    rowGap: sizes.spacing_300
  },
  400: {
    rowGap: sizes.spacing_400
  },
  500: {
    rowGap: sizes.spacing_500
  }
});
const flexWrapStyles = stylex.create({
  wrap: {
    flexWrap: 'wrap'
  },
  nowrap: {
    flexWrap: 'nowrap'
  },
  wrapReverse: {
    flexWrap: 'wrap-reverse'
  }
});

export const InlineStack: React.FC<InlineStackProps> = ({
  display = 'flex',
  verticalAlign = 'start',
  as: Component = 'div',
  children,
  fullHeight = false,
  horizontalAlign = 'start',
  gap = '50',
  columnGap,
  rowGap,
  flexWrap = 'nowrap',
}) => {
  const filteredChildren = Array.isArray(children)
    ? children.filter((child) => child)
    : [children];
  return (
    <Component {...stylex.props(
      displayStyles[display],
      flexWrapStyles[flexWrap],
      alignStyles[verticalAlign],
      fullHeight && fullHeightStyles.base,
      justifyStyles[horizontalAlign],
      gapStyles[gap],
      columnGap && columnGapStyles[columnGap],
      rowGap && rowGapStyles[rowGap],
      )} >
      {filteredChildren.map((child, index) => (
        <React.Fragment key={(child && child.key) || `stack-${index}`}>
          {child}
        </React.Fragment>
      ))}
    </Component>
  );
};
