import { themes } from '@storybook/theming';
import '../src/index.css';
import '../src/stylex.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {},
    },
    docs: {
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? themes.light
        : themes.light,
    },
  },
};

export default preview;
