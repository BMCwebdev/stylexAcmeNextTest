import { ForwardedRef, forwardRef } from 'react';
import { Text as AriaText, TextProps as AriaTextProps } from 'react-aria-components'
import * as stylex from '@stylexjs/stylex';
import { colorsText } from '@bmcwebdev/stitch-tokens/colors.stylex';
import { fonts } from '@bmcwebdev/stitch-tokens/fonts.stylex';

type TextColors = 'default' | 'inverse' | 'secondary' | 'disabled';
type TextSizes = 'small' | 'medium' | 'large' | 'xlarge';
type LooksLike = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TextAlign = 'left' | 'center' | 'right' | 'justify' | 'inherit';
// make two types here, one for the heading tags and one for the other elements
// this is used later in the code so we can type narrow to just the heading tags
type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type ElementType = 'span' | 'p' | HeadingTag;
type WeightType =   '300' | '400' | '500' | '600' | '700';

interface TextProps extends Omit<AriaTextProps, 'elementType'> {
  color?: TextColors;
  elementType?: ElementType;
  looksLike?: LooksLike;
  size?: TextSizes;
  textAlign?: TextAlign;
  visuallyHidden?: boolean;
  weight?: WeightType;
}

function Text(
  props: TextProps,
  ref: ForwardedRef<HTMLElement>
) {
  // Destructure the props so ...restProps contains only the original props
  // that RAC Text component is expecting
  const {
    color = 'default',
    elementType = 'span',
    size = 'large',
    textAlign = 'inherit',
    looksLike,
    visuallyHidden,
    weight,
    ...restProps
  } = props;

  // The predicate elementType is HeadingTag in the function signature tells TypeScript to narrow the type of elementType to HeadingTag if the function returns true.
  const isHTag = (elementType: string): elementType is HeadingTag => {
    return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(elementType);
  };
  
  return (
    <AriaText
      {...(visuallyHidden ? {'aria-hidden': "true"} : {})}
      elementType={elementType}
      ref={ref}
      {...restProps}
      {...stylex.props(
        textStyles.default,
        color && textStyles[color],
        size && textStyles[size],
        !looksLike && isHTag(elementType) && textStyles[elementType],
        textAlign && textStyles[textAlign],
        looksLike && textStyles[looksLike],
        weight && textStyles[weight],
        visuallyHidden && visuallyHiddenStyles.base
      )}
    />
  );
}

const _Text = forwardRef(Text);
_Text.displayName = 'Text';

export { _Text as Text };

const textStyles = stylex.create({
  default: {
    color: colorsText.default,
  },
  inverse: {
    color: colorsText.inverse,
  },
  secondary: {
    color: colorsText.secondary,
  },
  disabled: {
    color: colorsText.disabled,
  },
  small: {
    fontSize: fonts.size_50,
    lineHeight: fonts.line_height_50,
  },
  medium: {
    fontSize: fonts.size_100,
    lineHeight: fonts.line_height_100,
  },
  large: {
    fontSize: fonts.size_200,
    lineHeight: fonts.line_height_200,
  },
  xlarge: {
    fontSize: fonts.size_300,
    lineHeight: fonts.line_height_300,
  },
  h1: {
    fontSize: fonts.size_600,
    lineHeight: fonts.line_height_600,
  },
  h2: {
    fontSize: fonts.size_500,
    lineHeight: fonts.line_height_500,
  },
  h3: {
    fontSize: fonts.size_400,
    lineHeight: fonts.line_height_400,
  },
  h4: {
    fontSize: fonts.size_300,
    lineHeight: fonts.line_height_300,
  },
  h5: {
    fontSize: fonts.size_200,
    lineHeight: fonts.line_height_200,
  },
  h6: {
    fontSize: fonts.size_100,
    lineHeight: fonts.line_height_100,
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  justify: {
    textAlign: 'justify',
  },
  inherit: {
    textAlign: 'inherit',
  },
  300: {
    fontWeight: fonts.weight_300,
  },
  400: {
    fontWeight: fonts.weight_400,
  },
  500: {
    fontWeight: fonts.weight_500,
  },
  600: {
    fontWeight: fonts.weight_600,
  },
  700: {
    fontWeight: fonts.weight_700,
  }
});

const visuallyHiddenStyles = stylex.create({
  base: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    margin: '-1px',
    padding: '0',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    border: '0',
    whiteSpace: 'nowrap', /* Added line for screen reader support in case of inline elements */  
  }
});