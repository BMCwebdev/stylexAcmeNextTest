import { defineVars } from '@stylexjs/stylex';

export const tileColumns = {
  '--x-default': '1fr',
  '--x-small': '1fr',
  '--x-medium': '1fr',
  '--x-large': '1fr',
};

export const column = {
  '--x-flex': '1 1 auto',
  '--x-width': 'auto',
  '--x-maxWidth': 'auto',
  '--x-minWidth': 'auto',
  '--x-defaultDirection': 'row',
  '--x-smallDirection': 'row',
  '--x-mediumDirection': 'row',
};

export const layoutTokens = defineVars({
  ...tileColumns,
  ...column,
});