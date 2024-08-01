import React, { createContext, useContext } from 'react';
import * as stylex from '@stylexjs/stylex';

import { sizes } from '@brianAcme/stitch-tokens/sizes.stylex';
import { column } from '@brianAcme/stitch-tokens/layoutTokens.stylex';

const SMALL = '@media (max-width: 767px)';
const MEDIUM = '@media (max-width: 1023px)';

const columnsStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    [column.defaultDirection]: 'row',
    [column.smallDirection]: 'row',
    [column.mediumDirection]: 'row',
  },
});

const reverseBelowStyles = stylex.create({
  sm: {
    [column.smallDirection]: 'column-reverse',
    flexDirection: {
      default: column.defaultDirection,
      [SMALL]: column.smallDirection,
      [MEDIUM]: column.mediumDirection,
    },
    flex: {default: column.flex, [SMALL]: '1 0 auto'},
    width: {default: column.width, [SMALL]: '100%'},
    maxWidth: {default: column.maxWidth, [SMALL]: '100%'},
    minWidth: {default: column.minWidth, [SMALL]: '100%'},
  },
  md: {
    [column.smallDirection]: 'column-reverse',
    [column.mediumDirection]: 'column-reverse',
    flexDirection: {
      default: column.defaultDirection,
      [SMALL]: column.smallDirection,
      [MEDIUM]: column.mediumDirection,
    },
    flex: {default: column.flex, [MEDIUM]: '1 0 auto'},
    width: {default: column.width, [MEDIUM]: '100%'},
    maxWidth: {default: column.maxWidth, [MEDIUM]: '100%'},
    minWidth: {default: column.minWidth, [MEDIUM]: '100%'},
  },
});
const collapseColumnsStyles = stylex.create({
  sm: {
    [column.smallDirection]: 'column',
    flexDirection: {
      default: column.defaultDirection,
      [SMALL]: column.smallDirection,
      [MEDIUM]: column.mediumDirection,
    }
  },
  md: {
    [column.smallDirection]: 'column',
    [column.mediumDirection]: 'column',
    flexDirection: {
      default: column.defaultDirection,
      [SMALL]: column.smallDirection,
      [MEDIUM]: column.mediumDirection,
    }
  },
});

const collapseColumnStyles = stylex.create({
  sm: {
    flex: {default: column.flex, [SMALL]: '1 0 auto'},
    width: {default: column.width, [SMALL]: '100%'},
    maxWidth: {default: column.maxWidth, [SMALL]: '100%'},
    minWidth: {default: column.minWidth, [SMALL]: '100%'},
  },
  md: {
    flex: {default: column.flex, '@media (max-width: 1023px)': '1 0 auto'},
    width: {default: column.width, '@media (max-width: 1023px)': '100%'},
    maxWidth: {default: column.maxWidth, '@media (max-width: 1023px)': '100%'},
    minWidth: {default: column.minWidth, '@media (max-width: 1023px)': '100%'},
  },
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
const alignStyles = stylex.create({
  initial: {
    alignItems: 'initial'
  },
  inherit: {
    alignItems: 'inherit'
  },
  unset: {
    alignItems: 'unset'
  },
  revert: {
    alignItems: 'revert'
  },
  revertLayer: {
    alignItems: 'revertLayer'
  },
  normal: {
    alignItems: 'normal'
  },
  start: {
    alignItems: 'start'
  },
  center: {
    alignItems: 'center'
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
  baseline: {
    alignItems: 'baseline'
  },
  firstBaseline: {
    alignItems: 'firstBaseline'
  },
  lastBaseline: {
    alignItems: 'lastBaseline'
  },
  spaceBetween: {
    alignItems: 'space-between'
  },
  spaceAround: {
    alignItems: 'space-around'
  },
  spaceEvenly: {
    alignItems: 'space-evenly'
  },
  stretch: {
    alignItems: 'stretch'
  },
  safeCenter: {
    alignItems: 'safe center'
  },
  unsafeCenter: {
    alignItems: 'unsafe center'
  }
});
const justifyStyles = stylex.create({
  initial: {
    justifyContent: 'initial'
  },
  inherit: {
    justifyContent: 'inherit'
  },
  unset: {
    justifyContent: 'unset'
  },
  revert: {
    justifyContent: 'revert'
  },
  revertLayer: {
    justifyContent: 'revertLayer'
  },
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
  }
});

const columnWidths = stylex.create({
  content: {
    flex: '0 1 auto',
    width: 'auto',
    minWidth: 'auto',
    maxWidth: 'auto',
    [column.flex]: '0 1 auto',
    [column.width]: 'auto',
    [column.minWidth]: 'auto',
    [column.maxWidth]: 'auto',
  },
  auto: {
    flex: '1 1 1px',
    width: 'auto',
    minWidth: '1px',
    maxWidth: null,
    [column.flex]: '1 1 auto',
    [column.width]: 'auto',
    [column.minWidth]: 'auto',
    [column.maxWidth]: 'auto',
  },
  '1/5': {
    flex: '0 1 20%',
    width: '20%',
    minWidth: 'auto',
    maxWidth: '20%',
    [column.flex]: '0 1 20%',
    [column.width]: '20%',
    [column.minWidth]: '20%',
    [column.maxWidth]: '20%',
  },
  '1/4': {
    flex: '0 1 25%',
    width: '25%',
    minWidth: 'auto',
    maxWidth: '25%',
    [column.flex]: '0 1 25%',
    [column.width]: '25%',
    [column.minWidth]: '25%',
    [column.maxWidth]: '25%',
  },
  '1/3': {
    flex: '0 1 33.333333%',
    width: '33.333333%',
    minWidth: 'auto',
    maxWidth: '33.333333%',
    [column.flex]: '0 1 33.333333%',
    [column.width]: '33.333333%',
    [column.minWidth]: '33.333333%',
    [column.maxWidth]: '33.333333%',
  },
  '2/5': {
    flex: '0 1 40%',
    width: '40%',
    minWidth: 'auto',
    maxWidth: '40%',
    [column.flex]: '0 1 40%',
    [column.width]: '40%',
    [column.minWidth]: '40%',
    [column.maxWidth]: '40%',
  },
  '1/2': {
    flex: '0 1 50%',
    width: '50%',
    minWidth: 'auto',
    maxWidth: '50%',
    [column.flex]: '0 1 50%',
    [column.width]: '50%',
    [column.minWidth]: '50%',
    [column.maxWidth]: '50%',
  },
  '3/5': {
    flex: '0 1 60%',
    width: '60%',
    minWidth: 'auto',
    maxWidth: '60%',
    [column.flex]: '0 1 60%',
    [column.width]: '60%',
    [column.minWidth]: '60%',
    [column.maxWidth]: '60%',
  },
  '2/3': {
    flex: '0 1 66.666667%',
    width: '66.666667%',
    minWidth: 'auto',
    maxWidth: '66.666667%',
    [column.flex]: '0 1 66.666667%',
    [column.width]: '66.666667%',
    [column.minWidth]: '66.666667%',
    [column.maxWidth]: '66.666667%',
  },
  '3/4': {
    flex: '0 1 75%',
    width: '75%',
    minWidth: 'auto',
    maxWidth: '75%',
    [column.flex]: '0 1 75%',
    [column.width]: '75%',
    [column.minWidth]: '75%',
    [column.maxWidth]: '75%',
  },
  '4/5': {
    flex: '0 1 80%',
    width: '80%',
    minWidth: 'auto',
    maxWidth: '80%',
    [column.flex]: '0 1 80%',
    [column.width]: '80%',
    [column.minWidth]: '80%',
    [column.maxWidth]: '80%',
  }
});
const fullHeightStyles = stylex.create({
  base: {
    height: '100%'
  }
});

type ComponentType = 'div' | 'span';
type Space = '0' | '25' | '50' | '100' | '200' | '300' | '400' | '500';
type ColumnWidths = 'content' | 'auto' | '1/5' | '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4' | '4/5';
type AlignContent = 'normal' | 'start' | 'center' | 'end' | 'flexStart' | 'flexEnd' | 'baseline' | 'firstBaseline' | 'lastBaseline' | 'spaceBetween' | 'spaceAround' | 'spaceEvenly' | 'stretch' | 'safeCenter' | 'unsafeCenter' | 'inherit' | 'initial' | 'revert' | 'revertLayer' | 'unset';
type JustifyContent = 'normal' | 'start' | 'center' | 'end' | 'flexStart' | 'flexEnd' | 'left' | 'right' | 'spaceBetween' | 'spaceAround' | 'spaceEvenly' | 'stretch' | 'safeCenter' | 'unsafeCenter' | 'inherit' | 'initial' | 'revert' | 'revertLayer' | 'unset';
type Reverse = boolean;
type BelowTypes = 'sm' | 'md' | undefined;
type fullHeight = boolean;

interface BelowContextType {
  collapseBelow?: BelowTypes;
  reverseBelow?: BelowTypes;
}
const BelowContext = createContext<BelowContextType | undefined>(undefined);
const useBelowContext = () => useContext(BelowContext);


interface ColumnsProps {
  as?: ComponentType;
  children?: React.ReactNode;
  space?: Space;
  collapseBelow?: BelowTypes;
  verticalAlign?: AlignContent;
  horizontalAlign?: JustifyContent;
  reverse?: Reverse;
  reverseBelow?: BelowTypes;
  fullHeight?: fullHeight;
}

export const Columns: React.FC<ColumnsProps> = ({
  as: Component = 'div',
  children,
  space = '50',
  collapseBelow,
  verticalAlign = 'spaceBetween',
  horizontalAlign = 'flexStart',
  reverseBelow,
  fullHeight = false,
}) => {
  const contextValue: BelowContextType = { collapseBelow, reverseBelow };
  return (
    <BelowContext.Provider value={contextValue}>
      <Component {...stylex.props(
        columnsStyles.base,
        spaceStyles[space],
        alignStyles[verticalAlign],
        justifyStyles[horizontalAlign],
        collapseBelow && collapseColumnsStyles[collapseBelow],
        reverseBelow && reverseBelowStyles[reverseBelow],
        fullHeight && fullHeightStyles.base,
      )}>
        {children}
      </Component>
    </BelowContext.Provider>
  )
};

interface ColumnProps {
  as?: ComponentType;
  children?: React.ReactNode;
  width?: ColumnWidths;
}

export const Column: React.FC<ColumnProps> = ({
  as: Component = 'div',
  children,
  width = 'auto',
}) => {
  const { collapseBelow, reverseBelow } = useBelowContext() || {};
  return (
    <Component {...stylex.props(
      columnWidths[width],
      collapseBelow && collapseColumnStyles[collapseBelow],
      reverseBelow && collapseColumnStyles[reverseBelow],
    )}>
      {children}
    </Component>
  )
};
