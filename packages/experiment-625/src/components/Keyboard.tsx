// Not quite in use yet, but needed to be exported for Menu.tsx to work.
import { Keyboard as AriaKeyboard } from "react-aria-components";
import * as stylex from '@stylexjs/stylex';

const kbdStyles = stylex.create({
  base: {
    color: 'red',
    fontSize: '0.75rem',
    letterSpacing: '0.1em',
  },
  outline: {
    border: '1px solid red',
  },
});

type KeyboardProps = React.HTMLAttributes<HTMLElement> & {
  outline?: boolean;
};

const Keyboard = ({ ...props }: KeyboardProps) => {
  return <AriaKeyboard
    {...props}
    {...stylex.props(kbdStyles.base, props.outline && kbdStyles.outline)}
  />;
};

export type { KeyboardProps };
export { Keyboard };
