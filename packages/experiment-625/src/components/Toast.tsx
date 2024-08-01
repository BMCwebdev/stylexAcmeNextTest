import React from 'react';
import { createPortal } from 'react-dom';

import type { AriaToastRegionProps } from '@react-aria/toast';
import type { QueuedToast } from '@react-stately/toast';
import type { ToastState } from '@react-stately/toast';
import { ToastQueue, useToastQueue } from '@react-stately/toast';
import { useToast, useToastRegion } from '@react-aria/toast';

import * as stylex from '@stylexjs/stylex';

import { AlertTriangle, CheckCircle, Info, ShieldAlert, X } from 'lucide-react';
import { Button } from './Button';
import { Column, Columns } from './layout/Columns';
import { Stack } from './layout/Stack';
import { Text } from './Text';

import {
  colorsElevation,
  colorsShadow,
} from '@bmcwebdev/stitch-tokens/colors.stylex';
import { sizes } from '@bmcwebdev/stitch-tokens/sizes.stylex';

interface MyToast {
  description?: string;
  title: string;
  variant: 'critical' | 'info' | 'success' | 'warning' ;
}

export const toastQueue = new ToastQueue<MyToast>({
  hasExitAnimation: true,
  maxVisibleToasts: 5,
});

export function GlobalToastProvider() {
  const state = useToastQueue<MyToast>(toastQueue);

  return state.visibleToasts.length > 0
    ? createPortal(<ToastRegion state={state} />, document.body)
    : null;
}

interface ToastRegionProps extends AriaToastRegionProps {
  state: ToastState<MyToast>;
}

function ToastRegion({ state, ...props }: ToastRegionProps) {
  const ref = React.useRef(null);
  const { regionProps } = useToastRegion(props, state, ref);

  return (
    <div {...regionProps} ref={ref} {...stylex.props(toastStyle.region)}>
      <Stack space="300">
        {state.visibleToasts.map((toast) => (
          <Toast key={toast.key} toast={toast} state={state} />
        ))}
      </Stack>
    </div>
  );
}

interface ToastProps {
  state: ToastState<MyToast>;
  toast: QueuedToast<MyToast>;
}

const iconMapping = {
  critical: AlertTriangle,
  info: Info,
  success: CheckCircle,
  warning: ShieldAlert,
};
const iconColorMapping = {
  critical: '#ea101f',
  info: '#00bacc',
  success: '#73cc4a',
  warning: '#fbc000',
};

function Toast({ toast, state }: ToastProps) {
  const ref = React.useRef(null);
  const { toastProps, titleProps, descriptionProps, closeButtonProps } =
    useToast({ toast }, state, ref);
  const Icon = iconMapping[toast.content.variant];
  const iconColor = iconColorMapping[toast.content.variant];

  return (
    <div
      {...toastProps}
      {...stylex.props(toastStyle.base)}
      ref={ref}
      data-animation={toast.animation}
      onAnimationEnd={() => {
        // Remove the toast when the exiting animation completes.
        if (toast.animation === 'exiting') {
          state.remove(toast.key);
        }
      }}
    >
      <Columns space="200">
        <Column width="content">
          <Icon size={24} color={iconColor} />
        </Column>
        <Column width="auto">
          <Columns space="100">
            <Column width="auto">
              {toast.content.description ? (
                <Stack space="100">
                  <Text
                    {...titleProps}
                    elementType="span"
                    color="default"
                    weight="500"
                    size="large"
                  >
                    {toast.content.title}
                  </Text>
                  <Text
                    {...descriptionProps}
                    elementType="span"
                    color="secondary"
                    weight="400"
                    size="medium"
                  >
                    {toast.content.description}
                  </Text>
                </Stack>
              ) : (
                <Text
                  {...titleProps}
                  elementType="span"
                  color="default"
                  weight="500"
                  size="large"
                >
                  {toast.content.title}
                </Text>
              )}
            </Column>
            <Column width="content">
              <Button {...closeButtonProps} variant="icon">
                <X color="#1a191b" size={16} />
              </Button>
            </Column>
          </Columns>
        </Column>
      </Columns>
    </div>
  );
}

const slideUp = stylex.keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(100%)'
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)'
  }
});
const slideOut = stylex.keyframes({
  from: {
    opacity: 1,
    transform: 'translateY(0)'
  },
  to: {
    opacity: 0,
    transform: 'translateY(100%)'
  }
});
const fadeIn = stylex.keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});

// Button icon color can't use tokens as they are built for StyleX? Same with size?
const toastStyle = stylex.create({
  base: {
    animationName: {
      ':is([data-animation="entering"])': slideUp,
      ':is([data-animation="exiting"])': slideOut,
      ':is([data-animation="queued"])': fadeIn
    },
    animationDuration: {
      ':is([data-animation="entering"])': '0.5s',
      ':is([data-animation="exiting"])': '0.5s',
      ':is([data-animation="queued"])': '0.3s'
    },
    animationFillMode: {
      ':is([data-animation="entering"])': 'both',
      ':is([data-animation="exiting"])': 'both',
      ':is([data-animation="queued"])': 'both'
    },
    backgroundColor: colorsElevation.raised_high,
    borderRadius: sizes.radius_md,
    boxShadow: colorsShadow.raised_high,
    padding: sizes.spacing_300,
  },
  region: {
    padding: sizes.spacing_500,
    right: 0,
    position: 'fixed',
    top: 0,
    width: {
      default: '400px',
      '@media (max-width: 448px)': '100%',
    },
  },
});
