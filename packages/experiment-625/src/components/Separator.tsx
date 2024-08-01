import {
  Separator as RACSeparator,
  SeparatorProps,
} from 'react-aria-components';
import { colorsBorder } from '@brianAcme/stitch-tokens/colors.stylex';

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  separator: {
    backgroundColor: colorsBorder.default,
    border: 'none',
    flexShrink: 0,
  },
  horizontal: {
    height: '1px',
    width: '100%',
  },
  vertical: {
    height: '100%',
    width: '1px',
  },
});

export function Separator({
  orientation = 'horizontal',
  ...props
}: SeparatorProps) {
  return (
    <RACSeparator
      {...props}
      {...stylex.props(
        styles.separator,
        styles.horizontal,
        orientation === 'vertical' && styles.vertical
      )}
    />
  );
}
