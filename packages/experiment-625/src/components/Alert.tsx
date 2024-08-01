import * as stylex from '@stylexjs/stylex';
import { Heading } from 'react-aria-components';
import { Box, BoxProps } from './Box';
import { fonts } from '@brianAcme/stitch-tokens/fonts.stylex';

const styles = stylex.create({
  boxWrapper: {
    flex: '0 0 auto',
    fontSize: fonts.size_100,
  },
  heading: {
    font: fonts.sans,
    fontSize: fonts.size_100,
    fontWeight: 'bold',
  },
});

interface AlertProps {
  message?: string;
  title?: string;
  type?: 'error' | 'info' | 'success' | 'warning';
}

export function variantPicker(type: string) {
  let variant: BoxProps['variant'] = 'blue';
  switch (type) {
    case 'error':
      variant = 'red';
      break;
    case 'success':
      variant = 'green';
      break;
    case 'warning':
      variant = 'yellow';
      break;
  }
  return variant;
}

export function Alert({ message, title, type = 'info' }: AlertProps) {
  return (
    <div {...stylex.props(styles.boxWrapper)} role="alert">
      <Box
        border={true}
        variant={variantPicker(type)}
        padding="small"
        radius="medium"
      >
        <Heading {...stylex.props(styles.heading)} level={2}>
          {title}
        </Heading>
        {message}
      </Box>
    </div>
  );
}
