// /*
//  * I began this component with the idea of creating a generic overlay component that could be used for modals, drawers, and popovers. This would make it easier to swap between then if say you wanted your Select or Menu component to open in a Drawer instead of a Popover on mobile. This may still be benificial, but for now I am going to continue with a Popover only component.
//  */

// "use client";

// import React from "react";
// import {
//   composeRenderProps,
//   Popover as AriaPopover,
//   OverlayArrow as AriaOverlayArrow,
//   Modal as AriaModal,
//   ModalOverlay as AriaModalOverlay,
//   OverlayTriggerStateContext as AriaOverlayTriggerStateContext,
//   type PopoverProps as AriaPopoverProps,
//   type ModalOverlayProps as AriaModalOverlayProps,
// } from "react-aria-components";
// import * as stylex from '@stylexjs/stylex';
// import { useMediaQuery } from "../hooks/use-media-query";
// import { X } from 'lucide-react';
// import { Button, type ButtonProps } from "../Button";
// import { MotionDrawerRoot, useMotionDrawer } from "./use-motion-drawer";
// import { colorsElevation, colorsShadow } from "@brianAcme/stitch-tokens/colors.stylex";
// import { sizes } from "@brianAcme/stitch-tokens/sizes.stylex";

// /*
//  * This file serves as the entry point for all overlay components.
//  * That includes modals, drawers, and popovers.
//  */

// // Modal and drawer are not ready yet
// // type OverlayType = "modal" | "drawer" | "popover";
// type OverlayType = "popover";

// type OverlayProps = {
//   type?: OverlayType;
//   mobileType?: OverlayProps["type"];
//   showDismissButton?: boolean;
//   mediaQuery?: string;
//   children: React.ReactNode;
// } & Omit<AriaModalOverlayProps, "children"> &
//   Omit<AriaPopoverProps, "children">;

// const Overlay = React.forwardRef<HTMLElement | HTMLDivElement, OverlayProps>(
//   (
//     {
//       type: typeProp = "modal",
//       mobileType,
//       // let's put this someplace centeralized, call it modal media query
//       mediaQuery = "(max-width: 640px)",
//       isDismissable = true,
//       ...props
//     },
//     ref
//   ) => {
//     const isMobile = useMediaQuery(mediaQuery);
//     const type = mobileType ? (isMobile ? mobileType : typeProp) : typeProp;
//     switch (type) {
//       case "modal":
//         return (
//           <ModalOverlay
//             ref={ref as React.ForwardedRef<HTMLDivElement>}
//             isDismissable={isDismissable}
//             {...props}
//           />
//         );
//       case "drawer":
//         return (
//           // @ts-expect-error TODO FIX THIS CONFLICTS WITH ORIENTATION PROP FROM POPOVER :'(
//           <DrawerOverlay
//             ref={ref as React.ForwardedRef<HTMLDivElement>}
//             isDismissable={isDismissable}
//             {...props}
//           />
//         );
//       case "popover":
//         return <PopoverOverlay ref={ref as React.ForwardedRef<HTMLElement>} {...props} />;
//     }
//   }
// );
// Overlay.displayName = "Overlay";

// const modalBackdropStyles = stylex.create({
//   base: {
//     position: 'fixed',
//     inset: 0,
//     zIndex: 50,
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//   },
//   exiting: {
//     transitionDuration: '300ms',
//   },
//   entering: {
//     animation: 'fade-in 300ms',
//   },
//   popFadeOut: {
//     animationName: 'fade-out-0',
//   },
// });
// const modalOverlayStyles = stylex.create({
//   base: {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     zIndex: 50,
//     width: '100%',
//     maxWidth: '32rem',
//     transform: 'translate(-50%, -50%)',
//     border: '1px solid',
//     backgroundColor: 'grey',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   },
//   //  Needs entering and exiting styles such as (need to be converted to Stylex):
//   // entering: {
//   //   transitionDuration: '200ms',
//   //   animation: 'fade-in 200ms, zoom-in-95 200ms, slide-in-from-left-1/2 200ms, slide-in-from-top-48% 200ms',
//   // },
//   // exiting: {
//   //   transitionDuration: '300ms',
//   //   animation: 'fade-out 300ms, zoom-out-95 300ms, slide-out-to-left-1/2 300ms, slide-out-to-top-48% 300ms',
//   // },
// });

// interface ModalOverlayProps extends AriaModalOverlayProps {
//   showDismissButton?: boolean;
// }

// const ModalOverlay = React.forwardRef<React.ElementRef<typeof AriaModalOverlay>, ModalOverlayProps>(
//   ({ isDismissable, showDismissButton, ...props }, ref) => {
//     return (
//       <AriaModalOverlay
//         {...props}
//         ref={ref}
//         isDismissable={isDismissable}
//         {...stylex.props(modalBackdropStyles.base)}
//       >
//         <AriaModal
//           {...props}
//           data-type="modal"
//           {...stylex.props(modalOverlayStyles.base)}
//         >
//           {composeRenderProps(props.children, (children) => (
//             <>
//               {(showDismissButton ?? isDismissable) && <DismissButton />}
//               {children}
//             </>
//           ))}
//         </AriaModal>
//       </AriaModalOverlay>
//     );
//   }
// );
// ModalOverlay.displayName = "ModalOverlay";

// const popSlideIn = stylex.keyframes({
//   from: { opacity: 0, transform: 'translateY(-10px)' },
//   to: { opacity: 1, transform: 'translateY(0)' },
// });
// const popSlideOut = stylex.keyframes({
//   from: { opacity: 1, transform: 'translateY(0)' },
//   to: { opacity: 0, transform: 'translateY(-10px)' },
// });
// const popFadeIn = stylex.keyframes({
//   from: { opacity: 0 },
//   to: { opacity: 1 },
// });
// const popFadeOut = stylex.keyframes({
//   from: { opacity: 1 },
//   to: { opacity: 0 },
// });

// const popoverOverlayStyles = stylex.create({
//   base: {
//     backgroundColor:  colorsElevation.raised_medium,
//     borderRadius: sizes.border_md,
//     boxShadow: colorsShadow.raised_medium,
//     animationName: {
//       ':is([data-entering])': `${popFadeIn}, ${popSlideIn}`,
//       ':is([data-exiting])': `${popFadeOut}, ${popSlideOut}`,
//     },
//     animationDuration: {
//       ':is([data-entering])': '0.2s',
//       ':is([data-exiting])': '0.15s',
//     },
//     animationTimingFunction: {
//       ':is([data-entering])': 'ease-out',
//       ':is([data-exiting])': 'ease-in',
//     },
//     animationFillMode: {
//       ':is([data-entering])': 'forwards',
//       ':is([data-exiting])': 'forwards',
//     },
//   },
//   arrowStyles: {
//     display: 'block',
//     fill: colorsElevation.raised_medium,
//     strokeWidth: '1px',
//     stroke: 'rgba(0, 0, 0, 0.1)',
//   }
// });

// const placementStyles = stylex.create({
//   base: {
//     transform: {
//       default: 'initial',
//       ':is([placement="bottom"]) > svg': 'rotate(180deg)',
//       ':is([placement="left"]) > svg': 'rotate(-90deg)',
//       ':is([placement="right"]) > svg': 'rotate(90deg)',
//       ':is([placement="top"]) > svg': 'rotate(0deg)',
//     }
//   }
// });

// interface PopoverOverlayProps extends AriaPopoverProps {
//   arrow?: boolean;
//   showDismissButton?: boolean;
// }

// const PopoverOverlay = React.forwardRef<React.ElementRef<typeof AriaPopover>, PopoverOverlayProps>(
//   ({ arrow = false, showDismissButton, ...props }, ref) => {
//     return (
//       <AriaPopover
//         data-type="popover"
//         offset={arrow ? 12 : 8}
//         ref={ref}
//         {...props}
//         {...stylex.props(popoverOverlayStyles.base)}
//       >
//         {composeRenderProps(props.children, (children) => (
//           <>
//             {showDismissButton && <DismissButton />}
//             {arrow && (
//               <AriaOverlayArrow {...stylex.props(placementStyles.base)}>
//                 <svg
//                   width={12}
//                   height={12}
//                   viewBox="0 0 12 12"
//                   {...stylex.props(popoverOverlayStyles.arrowStyles)}
//                 >
//                   <path d="M0 0 L6 6 L12 0" />
//                 </svg>
//               </AriaOverlayArrow>
//             )}
//             {children}
//           </>
//         ))}
//       </AriaPopover>
//     );
//   }
// );
// PopoverOverlay.displayName = "PopoverOverlay";

// const drawerBackdropStyles = stylex.create({
//   base: {
//     position: 'fixed',
//     inset: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     zIndex: 50,
//   },
//   hidden: {
//     opacity: 0,
//   },
// });
// const drawerOverlayStyles = stylex.create({
//   base: {
//     display: 'flex',
//     flexDirection: 'column',
//     position: 'fixed',
//     zIndex: 50,
//     outline: 'none',
//     backgroundColor: 'grey',
//   },
//   inset: {
//     inset: 0,
//   },
//   placementBottom: {
//     top: 'auto',
//     bottom: 0,
//     marginTop: '6rem',
//     borderTop: '1px solid',
//     borderTopLeftRadius: '10px',
//     borderTopRightRadius: '10px',
//     transform: 'translateY(100%)',
//   },
//   placementTop: {
//     top: 0,
//     bottom: 'auto',
//     marginBottom: '6rem',
//     borderBottom: '1px solid',
//     borderBottomLeftRadius: '10px',
//     borderBottomRightRadius: '10px',
//     transform: 'translateY(-100%)',
//   },
//   placementLeft: {
//     left: 0,
//     right: 'auto',
//     marginRight: '6rem',
//     borderRight: '1px solid',
//     borderTopRightRadius: '10px',
//     borderBottomRightRadius: '10px',
//     transform: 'translateX(-100%)',
//   },
//   placementRight: {
//     left: 'auto',
//     right: 0,
//     marginLeft: '6rem',
//     borderLeft: '1px solid',
//     borderTopLeftRadius: '10px',
//     borderBottomLeftRadius: '10px',
//     transform: 'translateX(100%)',
//   },
//   touchNone: {
//     touchAction: 'none',
//   },
//   willChange: {
//     willChange: 'transform',
//   },
//   maxHeight: {
//     maxHeight: '90%',
//   },
// });

// interface DrawerOverlayProps extends Omit<AriaModalOverlayProps, "children"> {
//   placement?: "top" | "bottom" | "left" | "right";
//   showDismissButton?: boolean;
//   children?: React.ReactNode;
// }

// const DrawerOverlay = React.forwardRef<
//   React.ElementRef<typeof AriaModalOverlay>,
//   DrawerOverlayProps
// >(
//   (
//     {
//       children,
//       isDismissable,
//       showDismissButton = false,
//       placement = "bottom",
//       ...props
//     },
//     ref
//   ) => {
//     const { rootProps, modalProps, backdropProps, drawerProps } = useMotionDrawer({
//       isDismissable,
//       placement,
//     });

//     return (
//       <MotionDrawerRoot {...rootProps}>
//         <AriaModalOverlay
//           ref={ref}
//           isDismissable={isDismissable}
//           {...props}
//           {...modalProps}
//         >
//           <div
//             {...backdropProps}
//             {...stylex.props(drawerBackdropStyles.base)}
//           />
//           <AriaModal>
//             <div
//               {...drawerProps}
//               data-type="drawer"
//               {...stylex.props(drawerOverlayStyles.base)}
//             >
//               {showDismissButton && (
//                 <DismissButton
//                 // shape="rectangle"
//                 >
//                   Done
//                 </DismissButton>
//               )}
//               <div className="mx-auto my-4 h-2 w-[100px] rounded-full bg-bg-muted" />
//               {children}
//             </div>
//           </AriaModal>
//         </AriaModalOverlay>
//       </MotionDrawerRoot>
//     );
//   }
// );
// DrawerOverlay.displayName = "DrawerOverlay";

// const DismissButton = (props: ButtonProps) => {
//   const state = React.useContext(AriaOverlayTriggerStateContext);
//   return (
//     <Button
//       variant="icon"
//       aria-label="Close"
//       {...props}
//       onPress={() => state.close()}
//     >
//       {props.children ?? <X />}
//     </Button>
//   );
// };

// export type {
//   OverlayProps,
//   PopoverOverlayProps,
//   // ModalOverlayProps,
//   // DrawerOverlayProps,
// };
// export {
//   Overlay,
//   PopoverOverlay,
//   // DrawerOverlay,
//   // ModalOverlay,
// };
