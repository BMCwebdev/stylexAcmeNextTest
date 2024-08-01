"use client";

import * as React from "react";
import * as stylex from '@stylexjs/stylex';
import type {StyleXStyles} from '@stylexjs/stylex';
import { colorsDecorative } from '@bmcwebdev/stitch-tokens/colors.stylex';
import { sizes } from '@bmcwebdev/stitch-tokens/sizes.stylex';
import { fonts } from '@bmcwebdev/stitch-tokens/fonts.stylex';

const pulse = stylex.keyframes({
  '0%': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
  '50%': { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
  '100%': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
});

const avatarStyles = stylex.create({
  root: {
    alignItems: 'center',
    backgroundColor: colorsDecorative.yellow,
    borderRadius: sizes.radius_full,
    display: 'inline-block',
    flexShrink: 0,
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    aspectRatio: '1 / 1',
    height: '100%',
    width: '100%',
  },
  fallback: {
    alignItems: 'center',
    backgroundColor: colorsDecorative.yellow,
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    userSelect: 'none',
    width: '100%',
  },
  placeholder: {
    alignItems: 'center',
    animation: `${pulse} 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
    backgroundColor: colorsDecorative.yellow,
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  sm: {
    fontSize: fonts.size_200,
    lineHeight: fonts.line_height_200,
    height: sizes.spacing_600,
    width: sizes.spacing_600,
  },
  md: {
    fontSize: fonts.size_300,
    lineHeight: fonts.line_height_200,
    height: sizes.spacing_700,
    width: sizes.spacing_700,
  },
  lg: {
    fontSize: fonts.size_400,
    lineHeight: fonts.line_height_200,
    height: sizes.spacing_800,
    width: sizes.spacing_800,
  },
});

interface AvatarProps extends AvatarImageProps{
  altText?: string;
  fallback?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  /** Custom styles to apply to the component. Will accept a Stylex style block that contains `backgroundColor` */
  stitches?: StyleXStyles<{backgroundColor?: string}>,
}
const Avatar = ({ altText = 'avatar image', fallback, size, stitches, ...props }: AvatarProps) => {
  return (
    <AvatarProvider size={size} stitches={stitches}>
      <AvatarImage altText={altText} {...props} />
      <AvatarFallback  stitches={stitches}>{fallback}</AvatarFallback>
      <AvatarPlaceholder  stitches={stitches} />
    </AvatarProvider>
  );
};

interface AvatarProviderProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: AvatarProps['size'],
  stitches?: AvatarProps['stitches'],
}
const AvatarProvider = ({ size = 'lg', stitches, ...props }: AvatarProviderProps) => {
  const avatarSizeStyles = avatarStyles[size];
  const [status, setStatus] = React.useState<Status>("idle");
  return (
    <AvatarContext.Provider value={{ status, onStatusChange: setStatus }}>
      <span {...stylex.props(avatarStyles.root, avatarSizeStyles, stitches)} {...props} />
    </AvatarContext.Provider>
  );
};

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  altText?: AvatarProps['altText'];
  onStatusChange?: (status: Status) => void;
}
const AvatarImage = ({ altText = 'avatar image', src, onStatusChange, ...props }: AvatarImageProps) => {
  const context = useAvatarContext();
  const status = useImageLoadingStatus(src);
  // TODO use useCallBackRef here
  const handleStatusChange = React.useCallback(
    (status: Status) => {
      onStatusChange?.(status);
      context.onStatusChange(status);
    },
    [onStatusChange, context]
  );

  React.useLayoutEffect(() => {
    if (status !== "idle") {
      handleStatusChange(status);
    }
  }, [status, handleStatusChange]);

  return status === "success" ? (
    <span style={{ display: 'flex' }}>
      <img src={src} alt={altText} {...stylex.props(avatarStyles.image)} {...props} />
    </span>
  ) : null;
};

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLSpanElement>{
  stitches?: AvatarProps['stitches'],
}
const AvatarFallback = ({ stitches, ...props }: AvatarFallbackProps) => {
  const context = useAvatarContext();

  return context.status === "error" ? (
    <span {...stylex.props(avatarStyles.fallback, stitches)} {...props} />
  ) : null;
};

interface AvatarPlaceholderProps extends React.HTMLAttributes<HTMLSpanElement>{
  stitches?: AvatarProps['stitches'],
}
const AvatarPlaceholder = ({ stitches, ...props }: AvatarPlaceholderProps) => {
  const context = useAvatarContext();

  return ["idle", "loading"].includes(context.status) ? (
    <span {...stylex.props(avatarStyles.placeholder, stitches)} {...props} />
  ) : null;
};

type AvatarContextValue = {
  status: Status;
  onStatusChange: (status: Status) => void;
};
const AvatarContext = React.createContext<AvatarContextValue | null>(null);
const useAvatarContext = () => {
  const context = React.useContext(AvatarContext);
  if (!context) {
    throw new Error("Avatar components must be rendered within the AvatarProvider");
  }
  return context;
};

type Status = "idle" | "loading" | "success" | "error";
const useImageLoadingStatus = (src?: string) => {
  const [status, setStatus] = React.useState<Status>("idle");

  React.useLayoutEffect(() => {
    if (!src) {
      setStatus("error");
      return;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = (status: Status) => () => {
      if (!isMounted) return;
      setStatus(status);
    };
    setStatus("loading");
    image.onload = updateStatus("success");
    image.onerror = updateStatus("error");
    image.src = src;
    return () => {
      isMounted = false;
    };
  }, [src]);

  return status;
};

export type { AvatarProps };
export { Avatar };
