import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { sizes } from '@brianAcme/stitch-tokens/sizes.stylex';

// would be nice to gather re-useable types like this into a globalTypes file.
type AlignContent = 'normal' | 'start' | 'center' | 'end' | 'flexStart' | 'flexEnd' | 'baseline' | 'firstBaseline' | 'lastBaseline' | 'spaceBetween' | 'spaceAround' | 'spaceEvenly' | 'stretch' | 'safeCenter' | 'unsafeCenter' | 'inherit' | 'initial' | 'revert' | 'revertLayer' | 'unset';
type ComponentType = 'div' | 'span';
type JustifyItems = 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flexStart' | 'flexEnd' | 'selfStart' | 'selfEnd' | 'left' | 'right' | 'baseline' | 'firstBaseline' | 'lastBaseline' | 'safeCenter' | 'unsafeCenter' | 'inherit' | 'initial' | 'revert' | 'revertLayer' | 'unset';
type Space = '0' | '25' | '50' | '100' | '200' | '300' | '400' | '500';



interface StackProps {
  verticalAlign?: AlignContent;
  as?: ComponentType;
  children?: React.ReactNode;
  fullHeight?: boolean;
  horizontalAlign?: JustifyItems;
  space?: Space;
}

const stackStyles = stylex.create({
  base: {
    display: 'grid',
    gridAutoRows: 'min-content',
    gridTemplateColumns: '1fr',
    maxWidth: '100%',
  },
});

const alignStyles = stylex.create({
  normal: {
    alignContent: 'normal'
  },
  start: {
    alignContent: 'start'
  },
  center: {
    alignContent: 'center'
  },
  end: {
    alignContent: 'end'
  },
  flexStart: {
    alignContent: 'flex-start'
  },
  flexEnd: {
    alignContent: 'flex-end'
  },
  baseline: {
    alignContent: 'baseline'
  },
  firstBaseline: {
    alignContent: 'first baseline'
  },
  lastBaseline: {
    alignContent: 'last baseline'
  },
  spaceBetween: {
    alignContent: 'space-between'
  },
  spaceAround: {
    alignContent: 'space-around'
  },
  spaceEvenly: {
    alignContent: 'space-evenly'
  },
  stretch: {
    alignContent: 'stretch'
  },
  safeCenter: {
    alignContent: 'safe center'
  },
  unsafeCenter: {
    alignContent: 'unsafe center'
  },
  inherit: {
    alignContent: 'inherit'
  },
  initial: {
    alignContent: 'initial'
  },
  revert: {
    alignContent: 'revert'
  },
  revertLayer: {
    alignContent: 'revert-layer'
  },
  unset: {
    alignContent: 'unset'
  }
});

const fullHeightStyles = stylex.create({
  base: {
    height: '100%'
  }
});

const justifyItemsStyles = stylex.create({
  normal: {
    justifyItems: 'normal'
  },
  stretch: {
    justifyItems: 'stretch'
  },
  center: {
    justifyItems: 'center'
  },
  start: {
    justifyItems: 'start'
  },
  end: {
    justifyItems: 'end'
  },
  flexStart: {
    justifyItems: 'flex-start'
  },
  flexEnd: {
    justifyItems: 'flex-end'
  },
  selfStart: {
    justifyItems: 'self-start'
  },
  selfEnd: {
    justifyItems: 'self-end'
  },
  left: {
    justifyItems: 'left'
  },
  right: {
    justifyItems: 'right'
  },
  baseline: {
    justifyItems: 'baseline'
  },
  firstBaseline: {
    justifyItems: 'first baseline'
  },
  lastBaseline: {
    justifyItems: 'last baseline'
  },
  safeCenter: {
    justifyItems: 'safe center'
  },
  unsafeCenter: {
    justifyItems: 'unsafe center'
  },
  inherit: {
    justifyItems: 'inherit'
  },
  initial: {
    justifyItems: 'initial'
  },
  revert: {
    justifyItems: 'revert'
  },
  revertLayer: {
    justifyItems: 'revert-layer'
  },
  unset: {
    justifyItems: 'unset'
  }
});

const spaceStyles = stylex.create({
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

export const Stack: React.FC<StackProps> = ({
  verticalAlign = 'start',
  as: Component = 'div',
  children,
  fullHeight = false,
  horizontalAlign = 'stretch',
  space = '50',
}) => {
  const filteredChildren = Array.isArray(children)
    ? children.filter((child) => child)
    : [children];
  return (
    <Component {...stylex.props(
      stackStyles.base,
      alignStyles[verticalAlign],
      fullHeight && fullHeightStyles.base,
      justifyItemsStyles[horizontalAlign],
      spaceStyles[space],
      )} >
      {filteredChildren.map((child, index) => (
        <React.Fragment key={(child && child.key) || `stack-${index}`}>
          {child}
        </React.Fragment>
      ))}
    </Component>
  );
};
