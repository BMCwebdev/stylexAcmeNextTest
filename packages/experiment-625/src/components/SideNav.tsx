import { useContext, useRef, useEffect, ReactNode } from 'react';
import {
  Banknote, Heart, HelpCircle, DoorOpen, ExternalLink, Gift,
  Home, LogOut, Menu, Sparkles, Star, X
  } from 'lucide-react';
import { useKeyboard, FocusScope } from 'react-aria';
import { Link, LinkRenderProps } from 'react-aria-components';
import * as stylex from '@stylexjs/stylex';

import { PageLayoutContext } from './PageLayoutProvider';
import { Separator } from './Separator';
import { SideNavButton } from './SideNavButton';
import { sizes } from '@bmcwebdev/stitch-tokens/sizes.stylex';
import { styleXFocusRing } from './utils';
import { Text } from './Text';

import { colors, colorsBackground, colorsBorder, colorsShadow, colorsIcon } from '@bmcwebdev/stitch-tokens/colors.stylex';

const MAXSMALL = '@media (max-width: 479px)';
const MINSMALL = '@media (min-width: 480px)';
const MINLARGE = '@media (min-width: 1024px)';
const maxLargeValue = 1023;

const slideIn = stylex.keyframes({
  from: {
    left: '-280px',
  },
  to: {
    left: '0',
  }
});

const slideOut = stylex.keyframes({
  from: {
    left: '0',
  },
  to: {
    left: '-280px',
  }
});

const styles = stylex.create({
  sidenav: {
    animationName: slideIn,
    animationDuration: '0.3s',
    animationFillMode: 'forwards',
    backgroundColor: colors.neutral_100,
    borderRight: `1px ${colorsBorder.default} solid`,
    boxShadow: {
      default: colorsShadow.raised_high,
      [MINLARGE]: 'none',
    },
    display: 'flex',
    flexDirection: 'column',
    gap: sizes.spacing_500,
    gridArea: 'side-nav',
    height: {
      default: '100vh',
      [MINSMALL]: `calc(100vh - ${sizes.spacing_900})`,
      [MINLARGE]: 'auto',
    },
    overflowY: 'auto',
    padding: sizes.spacing_300,
    paddingTop: {
      default: sizes.spacing_900,
      [MAXSMALL]: '72px',
    },
    position: {
      default: 'fixed',
      [MINLARGE]: 'static',
    },
    top: {
      default: 0,
      [MINSMALL]: sizes.spacing_900,
      [MINLARGE]: 'auto',
    },
    width: {
      default: '280px',
      [MINLARGE]: '100%',
    },
    zIndex: {
      default: 'initial',
      [MAXSMALL]: 100,
    }
  },
   // Move off-screen when closed
  sidenavClosed: {
    animationName: slideOut,
    animationDuration: '0.3s',
    animationFillMode: 'forwards',
    left: '-282px',
    position: 'fixed',
    transition: 'left 0.3s',
  },
  sidenavItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: sizes.spacing_100,
  },
  sidenavListItem: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
  },
  sidenavItemActive: {
    backgroundColor: colors.peri_500,
    borderRadius: `0 ${sizes.radius_sm} ${sizes.radius_sm} 0`,
    height: sizes.spacing_800,
    left: `calc(${sizes.spacing_300} * -1)`,
    position: 'absolute',
    width: sizes.spacing_50,
  },
  sidenavLink: {
    alignItems: 'center',
    borderRadius: sizes.radius_md,
    display: 'flex',
    gap: sizes.spacing_100,
    height: sizes.spacing_800,
    outline: 'none',
    overflow: 'hidden',
    padding: `0 ${sizes.spacing_300} 0 ${sizes.spacing_300}`,
    textDecoration: 'none',
    width: '100%',
  },
  sidenavLinkActive: {
    backgroundColor: colorsBackground.neutral_pressed,
  },
  sidenavLinkhovered: {
    backgroundColor: colorsBackground.neutral,
  },
  sidenavIcon: {
    color: colorsIcon.default,
    height: '20px',
    width: '20px',
  },
  sidenavHeader: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    left: 0,
    minHeight: sizes.spacing_900,
    padding: sizes.spacing_300,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  sidenavFooter: {
    marginTop: 'auto',
  },
  sidenavFooterLink: {
    alignItems: 'center',
    display: 'flex',
    gap: sizes.spacing_100,
    padding: sizes.spacing_300,
    textDecoration: 'none',
  },
  externalLink: {
    marginLeft: 'auto',
  },
});

export interface SideNavProps {
  children: ReactNode;
}

export function SideNav({ children }: SideNavProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { isNavOpen, setIsNavOpen, width, focusOnOpen, setFocusOnOpen, buttonRef } = useContext(PageLayoutContext);


  useEffect(() => {
    if (width > maxLargeValue) {
      setIsNavOpen(true);
    } else if (width <= maxLargeValue && !focusOnOpen) {
      setIsNavOpen(false);
    }

  }, [width, focusOnOpen, setIsNavOpen]);

  useEffect(() => {
    const handleInteractOutside = (event: MouseEvent) => {
      if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
        return;
      }
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (width <= maxLargeValue && isNavOpen) {
          setIsNavOpen(false);
          setFocusOnOpen(false);
        }
      }
    };

    if (width <= maxLargeValue && isNavOpen) {
      document.addEventListener('mousedown', handleInteractOutside);
    } else {
      document.removeEventListener('mousedown', handleInteractOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleInteractOutside);
    };
  }, [isNavOpen, width, buttonRef, setIsNavOpen, setFocusOnOpen]);

  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => {
      if (e.key === 'Escape' && width <= maxLargeValue) {
        setIsNavOpen(false);
        setFocusOnOpen(false);
      }
    },
  });

  const navHeader = (
    <div {...stylex.props(styles.sidenavHeader)}>
      <SideNavButton />
    </div>
  );

  const navContent = (
    <nav
      aria-label="Main Navigation"
      id="main-navigation"
      ref={ref}
      {...keyboardProps}
      {...stylex.props(
        styles.sidenav,
        !isNavOpen && styles.sidenavClosed,
      )}
    >
      {( width <= 479 ) && navHeader}
      {children}
    </nav>
  );

  if (width <= maxLargeValue && isNavOpen && focusOnOpen) {
    return (
      <FocusScope contain restoreFocus autoFocus>
        {navContent}
      </FocusScope>
    );
  }

  return navContent;
}

type IconName =
  | 'Banknote'
  | 'DoorOpen'
  | 'ExternalLink'
  | 'Gift'
  | 'Heart'
  | 'HelpCircle'
  | 'Home'
  | 'LogOut'
  | 'Menu'
  | 'Sparkles'
  | 'Star'
  | 'X';

export interface SideNavItem {
  icon: IconName;
  isActive?: boolean;
  isNewWindow?: boolean;
  label: string;
  to: string;
}

export interface SideNavItemsProps {
  navItems: SideNavItem[];
}

const iconMapping = {
  Banknote,
  DoorOpen,
  ExternalLink,
  Gift,
  Heart,
  HelpCircle,
  Home,
  LogOut,
  Menu,
  Sparkles,
  Star,
  X,
};

// TODO: Add functionality for data to provide a HiddenAbove/Below ShowAbove/Below value, and key off of that to return the same markup, but wrapped in a VisuallyHidden component with correct props applied.
export function SideNavItems({ navItems }: SideNavItemsProps) {
  return (
    <ul {...stylex.props(styles.sidenavItems)}>
      {navItems.map((item, index) => {
        const IconComponent = iconMapping[item.icon];
        return (
          <li key={index} {...stylex.props(styles.sidenavListItem)}>
            {item.isActive && <span {...stylex.props(styles.sidenavItemActive)} />}
            <Link
              href={item.to}
              className={(renderProps: LinkRenderProps) => stylex.props(
                styles.sidenavLink,
                renderProps.isHovered && styles.sidenavLinkhovered,
                item.isActive && styles.sidenavLinkActive,
                renderProps.isFocusVisible && styleXFocusRing.base,
              ).className || ''}
              target={item.isNewWindow ? '_blank' : undefined}
            >
              {IconComponent && <IconComponent {...stylex.props(styles.sidenavIcon)} />}
              <Text weight="600" size="large" color="default">
                {item.label}
              </Text>
              {item.isNewWindow &&
                <ExternalLink
                  size='14px'
                  color={colorsIcon.secondary}
                  {...stylex.props(styles.externalLink)}
                />}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export interface SideNavFooterProps {
  children?: ReactNode;
}

export function SideNavFooter({ children }: SideNavFooterProps) {
  return (
    <div {...stylex.props(styles.sidenavFooter, styles.sidenavItems)}>
      <Separator orientation="horizontal" />
      {children}
    </div>
  );
}
