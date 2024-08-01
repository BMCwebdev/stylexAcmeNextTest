import * as stylex from '@stylexjs/stylex';
import { colorsText } from '@brianAcme/stitch-tokens/colors.stylex';
import { fonts } from '@brianAcme/stitch-tokens/fonts.stylex';
import { Stack } from './layout/Stack';

const styles = stylex.create({
  spinner: {
    width: '48px',
    height: '48px',
    backgroundImage: `url('data:image/svg+xml,<svg width="48" height="48" viewBox="0 0 48 48" color="%23381360" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="spinner-secondHalf"><stop offset="0%" stop-opacity="0" stop-color="currentColor" /><stop offset="100%" stop-opacity="0.5" stop-color="currentColor" /></linearGradient><linearGradient id="spinner-firstHalf"><stop offset="0%" stop-opacity="1" stop-color="currentColor" /><stop offset="100%" stop-opacity="0.5" stop-color="currentColor" /></linearGradient></defs><g stroke-width="6"><path stroke="url(%23spinner-secondHalf)" d="M 4 24 A 14 14 0 0 1 44 24" /><path stroke="url(%23spinner-firstHalf)" d="M 44 24 A 14 14 0 0 1 4 24" /><!-- 1deg extra path to have the round end cap--><path stroke="currentColor" stroke-linecap="round" d="M 4 24 A 14 14 0 0 1 4 22" /></g><animateTransform from="0 0 0" to="360 0 0" attributeName="transform" type="rotate" repeatCount="indefinite" dur="800ms" /></svg>')`,
  },
  text: {
    color: colorsText.secondary,
    fontSize: fonts.size_200,
    fontWeight: fonts.weight_500,
  },
});

export interface SpinnerProps {
  message: string;
}

export function Spinner({
  message = 'Loading',
}: SpinnerProps) {
  return (
    <Stack horizontalAlign="center" space="200">
      <div {...stylex.props(styles.spinner)}></div>
      <div {...stylex.props(styles.text)}>
        {message}
      </div>
    </Stack>
  );
}
