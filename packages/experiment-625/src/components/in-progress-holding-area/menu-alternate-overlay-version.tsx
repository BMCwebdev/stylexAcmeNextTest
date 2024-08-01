// This was a version of Menu that was to work with Overlay. I am currently using a single Popover version instead. I want to keep this version however, as we may want to use the Overlay pattern in the future. I will keep this version in the holding area for now.

// "use client";

// import * as React from "react";
// import {
//   composeRenderProps,
//   Menu as AriaMenu,
//   MenuTrigger as AriaMenuTrigger,
//   MenuItem as AriaMenuItem,
//   SubmenuTrigger as AriaSubmenuTrigger,
//   type MenuItemProps as AriaMenuItemProps,
//   type MenuProps as AriaMenuProps,
//   type MenuTriggerProps as AriaMenuTriggerProps,
// } from "react-aria-components";
// import { styleXFocusRing } from './utils';

// import * as stylex from '@stylexjs/stylex';
// import { Check, ChevronRight } from 'lucide-react';


// import { Kbd } from "./Keyboard";
// import { Overlay, type OverlayProps } from "./in-progress-holding-area/Overlay";
// import { Popover } from "./Popover";
// import { Text } from "./Text";

// import { sizes } from "@bmcwebdev/stitch-tokens/sizes.stylex";
// import { colorsBackground } from "@bmcwebdev/stitch-tokens/colors.stylex";

// const menuStyles = stylex.create({
//   base: {
//     outline: 'none',
//     overflow: 'auto',
//     maxHeight: 'inherit',
//   }
// });

// const menuItemStyles = stylex.create({
//   base: {
//     backgroundColor: 'transparent',
//     display: 'flex',
//     cursor: 'pointer',
//     alignItems: 'center',
//     padding: `${sizes.spacing_100} ${sizes.spacing_300}`,
//     outline: 'none',
//     transition: 'background-color 0.2s',
//   },
//   hovered: {
//     backgroundColor: colorsBackground.neutral_hovered,
//   },
//   pressed: {
//     backgroundColor: colorsBackground.neutral_pressed,
//   },
//   focus: {
//     backgroundColor: colorsBackground.neutral_hovered,
//   },
//   disabled: {
//     pointerEvents: 'none',
//     color: colorsBackground.disabled,
//   },
//   checkboxWrapper: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: sizes.spacing_500,
//   },
//   checkbox: {
//     height: sizes.spacing_500,
//     width: sizes.spacing_500,
//   },
//   wrapper: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//   },
//   wrapperText: {
//     display: 'flex',
//     flex: 1,
//     flexDirection: 'column',
//   },
//   wrapperIcon: {
//     width: '1rem',
//     height: '1rem',
//   }
// });

// type MenuRootProps = AriaMenuTriggerProps;
// const MenuRoot = (props: MenuRootProps) => {
//   return <AriaMenuTrigger {...props} />;
// };

// type MenuProps<T> = MenuContentProps<T> & {
//   type?: OverlayProps["type"];
//   mobileType?: OverlayProps["mobileType"];
//   mediaQuery?: OverlayProps["mediaQuery"];
//   placement?: OverlayProps["placement"];
// };
// const Menu = <T extends object>({
//   placement,
//   type = "popover",
//   mobileType = "popover",
//   mediaQuery,
//   ...props
// }: MenuProps<T>) => {
//   return (
//     <Overlay type={type} mobileType={mobileType} mediaQuery={mediaQuery} placement={placement}>
//       <MenuContent {...props} />
//     </Overlay>
//   );
// };

// type MenuContentProps<T> = AriaMenuProps<T>;
// const MenuContent = <T extends object>({ ...props }: MenuContentProps<T>) => {
//   return <AriaMenu
//     {...stylex.props(menuStyles.base)}
//     {...props}
//   />;
// };

// const MenuSub = AriaSubmenuTrigger;

// interface MenuItemProps<T> extends Omit<AriaMenuItemProps<T>, "className"> {
//   prefix?: React.ReactNode;
//   suffix?: React.ReactNode;
//   label?: string;
//   description?: string;
//   shortcut?: string;
// }
// const MenuItem = <T extends object>({
//   label,
//   description,
//   prefix,
//   suffix,
//   shortcut,
//   ...props
// }: MenuItemProps<T>) => {
//   return (
//     <AriaMenuItem
//       {...props}
//       className={( composeRenderProps) => stylex.props(
//         menuItemStyles.base,
//         props.isDisabled && menuItemStyles.disabled,
//         composeRenderProps.isFocused && menuItemStyles.focus,
//         composeRenderProps.isFocusVisible && styleXFocusRing.base,
//       ).className || ''}
//     >
//       {composeRenderProps(
//         props.children,
//         (children, { selectionMode, isSelected, hasSubmenu }) => (
//           <>
//             {selectionMode !== 'none' && (
//               <span {...stylex.props(menuItemStyles.checkboxWrapper)}>
//                 {isSelected && (
//                   <Check
//                     aria-hidden
//                     {...stylex.props(menuItemStyles.checkbox)}
//                   />
//                 )}
//               </span>
//             )}
//             {/* The intention is to implement icon library here in Prefix and Suffix */}
//             {prefix}
//             <span {...stylex.props(menuItemStyles.wrapper)}>
//               <span {...stylex.props(menuItemStyles.wrapperText)}>
//                 {label && <Text weight="500" color="default">{label}</Text>}
//                 {description && <Text size="medium" weight="400" color="secondary" >{description}</Text>}
//                 {children}
//               </span>
//               {suffix}
//               {shortcut && <Kbd>{shortcut}</Kbd>}
//               {hasSubmenu && (
//                 <ChevronRight
//                   aria-hidden
//                   {...stylex.props(menuItemStyles.wrapperIcon)}
//                 />
//               )}
//             </span>
//           </>
//         ),
//       )}
//     </AriaMenuItem>
//   );
// };

// export type { MenuRootProps, MenuProps };
// export { MenuRoot, Menu, MenuItem, MenuContent, MenuSub };
