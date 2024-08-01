import * as React from 'react';
import stylex from '@stylexjs/stylex';
import {
  CheckCircle,
  AlertTriangle,
  AlertOctagon,
  Info,
  HelpCircle,
} from 'lucide-react';
import {
  colorsIcon,
  colorsText,
} from '@/stitch-tokens/colors.stylex';
import { sizes } from '@brianAcme/stitch-tokens/sizes.stylex';
import { fonts } from '@brianAcme/stitch-tokens/fonts.stylex';

export interface InlineFeedbackProps {
  type: 'success' | 'warning' | 'critical' | 'info' | 'tip' | undefined;
  message: string;
}

const feedbackStyles = stylex.create({
  base: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: sizes.radius_md,
    fontSize: fonts.size_100,
    lineHeight: fonts.line_height_100,
    marginTop: sizes.spacing_50,
  },
  icon: {
    height: sizes.spacing_300,
    paddingRight: sizes.spacing_50,
  },
  message: {
    fontWeight: fonts.weight_400,
    color: colorsText.default,
  },
});

const typeVariants = stylex.create({
  success: {
    color: colorsIcon.success,
  },
  warning: {
    color: colorsIcon.warning,
  },
  critical: {
    color: colorsIcon.critical,
  },
  info: {
    color: colorsIcon.info,
  },
  tip: {
    color: colorsIcon.secondary,
  },
});

const iconComponents = {
  success: CheckCircle,
  warning: AlertTriangle,
  critical: AlertOctagon,
  info: Info,
  tip: HelpCircle,
};

export const InlineFeedback: React.FC<InlineFeedbackProps> = ({
  type,
  message,
}) => {
  const IconComponent = iconComponents[type || 'info'];
  const variantStyles = typeVariants[type || 'info'];

  return (
    <div {...stylex.props(feedbackStyles.base)}>
      <IconComponent
        data-testid="inline-feedback-icon"
        {...stylex.props(feedbackStyles.icon, variantStyles)}
      />
      <span {...stylex.props(feedbackStyles.message)}>{message}</span>
    </div>
  );
};
