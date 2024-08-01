import { defineVars } from '@stylexjs/stylex';

export const tileColumns = defineVars({
  default: '1fr',
  small: '1fr',
  medium: '1fr',
  large: '1fr',
});

export const column = defineVars({
  flex: '1 1 auto',
  width: 'auto',
  maxWidth: 'auto',
  minWidth: 'auto',
  defaultDirection: 'row',
  smallDirection: 'row',
  mediumDirection: 'row',
});
