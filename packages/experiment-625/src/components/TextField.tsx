import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  ValidationResult,
} from 'react-aria-components';
import {useFocusRing} from 'react-aria';
import {
  Description,
  FieldError,
  Label,
  Input,
  TextArea,
} from './Field';
import * as stylex from '@stylexjs/stylex';

import { sizes } from '@bmcwebdev/stitch-tokens/sizes.stylex';
import { styleXFocusRing } from './utils';


const textFieldStyle = stylex.create({
  base: {
    marginBottom: sizes.spacing_600,
    display: 'block',
    width: '100%',
  }
});

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  multiLine?: boolean;
}

export function TextField({
  label,
  description,
  errorMessage,
  multiLine = false,
  ...props
}: TextFieldProps) {
  const { isFocusVisible, focusProps } = useFocusRing();
  return (
    <AriaTextField
      {...props}
      {...stylex.props(
        textFieldStyle.base,
        isFocusVisible && styleXFocusRing.base,
      )}
    >
      {label && (
        <Label required={props.isRequired}>{label}</Label>
      )}
      {multiLine
      ? <TextArea {...focusProps} readOnly={props.isReadOnly} />
      : <Input {...focusProps} readOnly={props.isReadOnly} />}

      {description &&
        <Description>
          {description}
        </Description>
      }
      <FieldError>
        {errorMessage}
      </FieldError>
    </AriaTextField>
  );
}
