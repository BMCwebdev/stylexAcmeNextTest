import { Check, Minus } from 'lucide-react';
import { ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';

import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  CheckboxProps,
  ValidationResult,
} from 'react-aria-components';
import { Description, FieldError, Label } from './Field';

import { colorsBackground, colorsBorder, colorsSymantic, colorsText } from '@brianAcme/stitch-tokens/colors.stylex';
import { sizes } from '@brianAcme/stitch-tokens/sizes.stylex';

export interface CheckboxGroupProps
  extends Omit<AriaCheckboxGroupProps, 'children'> {
  label?: string;
  children?: ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  return (
    <AriaCheckboxGroup
      {...props}
      {...stylex.props(checkboxGroupStyles.base)}
    >
      <span>
        <Label>{props.label}</Label>
        {props.description && <Description>{props.description}</Description>}
      </span>
      {props.children}
      <FieldError>{props.errorMessage}</FieldError>
    </AriaCheckboxGroup>
  );
}
const checkboxGroupStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: sizes.spacing_200,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

const iconStyles = stylex.create({
  base: {
    width: sizes.spacing_300,
    height: sizes.spacing_300,
    color: colorsText.inverse,
  },
});

  const checkboxStyles = stylex.create({
    base: {
      display: 'flex',
      flexShrink: '0',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease',
      gap: sizes.spacing_100,
    },
    box: {
      display: 'flex',
      height: sizes.spacing_400,
      width: sizes.spacing_400,
      borderRadius: sizes.radius_xs,
      backgroundColor: colorsBackground.input,
      borderStyle: 'solid',
      borderWidth: sizes.border_sm,
      borderColor: colorsBorder.input,
      justifyContent: 'center',
      alignItems: 'center',
    },
    error: {
      borderColor: colorsBorder.critical,
      borderWidth: sizes.border_md,
    },
    focus: {
      outline: `${sizes.spacing_25} solid ${colorsBorder.primary}`,
      outlineOffset: sizes.spacing_25,
    },
    disabled: {
      backgroundColor: colorsBackground.disabled,
      borderColor: colorsBorder.disabled,
      borderWidth: sizes.border_sm,
    },
    selected: {
      backgroundColor: colorsSymantic.primary,
      borderColor: colorsSymantic.primary,
      borderWidth: sizes.border_sm,
    },
  });

export function Checkbox(props: CheckboxProps) {
  return (
    <AriaCheckbox
      {...props}
      {...stylex.props(checkboxStyles.base)}
    >
      {({ ...renderProps }) => (
        <>
          <div
            {...stylex.props(
              checkboxStyles.box,
              renderProps.isFocusVisible && checkboxStyles.focus,
              renderProps.isSelected && checkboxStyles.selected,
              renderProps.isInvalid && checkboxStyles.error,
              renderProps.isDisabled && checkboxStyles.disabled,
            )}
          >
            {renderProps.isIndeterminate ? (
              <Minus aria-hidden {...stylex.props(iconStyles.base)}/>
            ) : renderProps.isSelected ? (
              <Check aria-hidden {...stylex.props(iconStyles.base)} />
            ) : null}
          </div>
          {props.children}
        </>
      )}
    </AriaCheckbox>
  );
}
