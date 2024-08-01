import {
  FieldErrorProps,
  Group,
  GroupProps,
  InputProps,
  InputRenderProps,
  LabelProps as RACLabelProps,
  FieldError as RACFieldError,
  Input as RACInput,
  Label as RACLabel,
  Text,
  TextArea as RACTextArea,
  TextAreaProps,
  TextProps,
  composeRenderProps,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';

import * as stylex from '@stylexjs/stylex';

import {
  colorsBackground,
  colorsBorder,
  colorsFeedback,
  colorsText,
} from '@brianAcme/stitch-tokens/colors.stylex';
import { sizes } from '@brianAcme/stitch-tokens/sizes.stylex';
import { fonts } from '@brianAcme/stitch-tokens/fonts.stylex';

const fieldStyle = stylex.create({
  base: {
    color: colorsText.default,
    fontFamily: fonts.sans,
    fontSize: fonts.size_100,
    fontWeight: fonts.weight_400,
  }
});

const labelStyle = stylex.create({
  label: {
    color: colorsText.default,
    fontFamily: fonts.sans,
    fontSize: fonts.size_300,
    fontWeight: fonts.weight_600,
  },
  required: {
    color: colorsFeedback.critical,
    paddingLeft: sizes.spacing_200,
  },
});

const descStyle = stylex.create({
  base: {
    color: colorsText.secondary,
    display: 'block',
    marginTop: sizes.spacing_25,
    width: '100%',
  }
});

const fieldError = stylex.create({
  base: {
    color: colorsFeedback.critical,
  }
});

const inputStyle = stylex.create({
  base: {
    appearance: 'none',
    backgroundColor: colorsBackground.neutral,

    borderColor: colorsBorder.input,
    borderWidth: sizes.border_sm,
    borderStyle: 'solid',
    borderRadius: sizes.radius_md,
    boxShadow: 'none',

    color: colorsText.default,
    outline: 'none',
    lineHeight: fonts.line_height_300,
    padding: sizes.spacing_50,

    fontFamily: fonts.sans,
    fontSize: fonts.size_200,
    fontWeight: fonts.weight_400,
    width: '100%',
  },
  multiline: {
    height: sizes.spacing_1300,
    lineHeight: fonts.line_height_100,
  },
  hover: {
    backgroundColor: colorsBackground.neutral_hovered,
    borderColor: colorsBorder.input,
    boxShadow: `inset 0 0 0 ${sizes.border_sm} ${colorsBackground.primary_hovered}`,
  },
  focus: {
    borderColor: colorsBorder.primary,
    boxShadow: `inset 0 0 0 ${sizes.border_sm} ${colorsBackground.primary_pressed}`,
  },
  invalid: {
    borderColor: colorsFeedback.critical,
    boxShadow: `inset 0 0 0 ${sizes.border_sm} ${colorsFeedback.critical}`,
  },
  readonly: {
    backgroundColor: colorsBackground.neutral,
    borderColor: colorsBorder.disabled,
    boxShadow: 'none',
    color: colorsText.default,
  },
  disabled: {
    borderColor: colorsBorder.disabled,
    color: colorsText.disabled,
    cursor: 'default',
  },
});

interface LabelProps extends RACLabelProps{
  required?: boolean;
}
export function Label({...props}: LabelProps) {
  return (
    <RACLabel
    {...props}
    {...stylex.props(labelStyle.label)}
    >
      {props.children}
      {props.required && (
        <span {...stylex.props(
          fieldStyle.base,
          labelStyle.label,
          labelStyle.required)}
        >*</span>
      )}
    </RACLabel>
  );
}

export function Description(props: TextProps) {
  return (
    <Text
      {...props}
      slot="description"
      {...stylex.props(fieldStyle.base, descStyle.base)}
    />
  );
}

export function FieldError(props: FieldErrorProps) {
  return (
    <RACFieldError
      {...props}
      {...stylex.props(fieldStyle.base, descStyle.base, fieldError.base)}
    />
  );
}

export const fieldBorderStyles = tv({
  variants: {
    isFocusWithin: {
      false: 'border-gray-300 forced-colors:border-[ButtonBorder]',
      true: 'border-gray-600 forced-colors:border-[Highlight]',
    },
    isInvalid: {
      true: 'border-red-600 forced-colors:border-[Mark]',
    },
    isDisabled: {
      true: 'border-gray-200 forced-colors:border-[GrayText]',
    },
  },
});

export const fieldGroupStyles = tv({
  // extend: focusRing,
  base: 'group flex items-center h-9 bg-white forced-colors:bg-[Field] border-2 rounded-lg overflow-hidden',
  variants: fieldBorderStyles.variants,
});

export function FieldGroup(props: GroupProps) {
  return (
    <Group
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        fieldGroupStyles({ ...renderProps, className }),
      )}
    />
  );
}

export function Input(props: InputProps) {
  return (
    <RACInput
      {...props}
      className={(renderProps: InputRenderProps) =>
        stylex.props(
          inputStyle.base,
          renderProps.isHovered && inputStyle.hover,
          renderProps.isFocused && inputStyle.focus,
          renderProps.isFocusVisible && inputStyle.focus,
          renderProps.isInvalid && inputStyle.invalid,
          props.readOnly && inputStyle.readonly,
          renderProps.isDisabled && inputStyle.disabled,
        ).className || ''
      }
    />
  );
}

export function TextArea(props: TextAreaProps & InputProps) {
  return (
    <RACTextArea
      {...props}
      className={(renderProps: InputRenderProps) =>
        stylex.props(
          inputStyle.base,
          inputStyle.multiline,
          renderProps.isHovered && inputStyle.hover,
          renderProps.isFocused && inputStyle.focus,
          renderProps.isFocusVisible && inputStyle.focus,
          renderProps.isInvalid && inputStyle.invalid,
          props.readOnly && inputStyle.readonly,
          renderProps.isDisabled && inputStyle.disabled,
        ).className || ''
      }
    />
  );
}
