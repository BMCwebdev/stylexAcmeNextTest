import { VarGroup } from '@stylexjs/stylex';

type TColorPrimitives = Readonly<{
  "--s-color-neutral-0": string;
  "--s-color-neutral-100": string;
  "--s-color-neutral-200": string;
  "--s-color-neutral-300": string;
  "--s-color-neutral-400": string;
  "--s-color-neutral-500": string;
  "--s-color-neutral-600": string;
  "--s-color-neutral-700": string;
  "--s-color-neutral-800": string;
  "--s-color-neutral-900": string;
  "--s-color-neutral-1000": string;
  "--s-color-neutral-1100": string;
  "--s-color-peri-50": string;
  "--s-color-peri-100": string;
  "--s-color-peri-200": string;
  "--s-color-peri-300": string;
  "--s-color-peri-400": string;
  "--s-color-peri-500": string;
  "--s-color-peri-600": string;
  "--s-color-peri-700": string;
  "--s-color-peri-800": string;
  "--s-color-peri-900": string;
  "--s-color-indigo-50": string;
  "--s-color-indigo-100": string;
  "--s-color-indigo-200": string;
  "--s-color-indigo-300": string;
  "--s-color-indigo-400": string;
  "--s-color-indigo-500": string;
  "--s-color-indigo-600": string;
  "--s-color-indigo-700": string;
  "--s-color-indigo-800": string;
  "--s-color-indigo-900": string;
  "--s-color-blue-50": string;
  "--s-color-blue-100": string;
  "--s-color-blue-200": string;
  "--s-color-blue-300": string;
  "--s-color-blue-400": string;
  "--s-color-blue-500": string;
  "--s-color-blue-600": string;
  "--s-color-blue-700": string;
  "--s-color-blue-800": string;
  "--s-color-blue-900": string;
  "--s-color-teal-50": string;
  "--s-color-teal-100": string;
  "--s-color-teal-200": string;
  "--s-color-teal-300": string;
  "--s-color-teal-400": string;
  "--s-color-teal-500": string;
  "--s-color-teal-600": string;
  "--s-color-teal-700": string;
  "--s-color-teal-800": string;
  "--s-color-teal-900": string;
  "--s-color-green-50": string;
  "--s-color-green-100": string;
  "--s-color-green-200": string;
  "--s-color-green-300": string;
  "--s-color-green-400": string;
  "--s-color-green-500": string;
  "--s-color-green-600": string;
  "--s-color-green-700": string;
  "--s-color-green-800": string;
  "--s-color-green-900": string;
  "--s-color-yellow-50": string;
  "--s-color-yellow-100": string;
  "--s-color-yellow-200": string;
  "--s-color-yellow-300": string;
  "--s-color-yellow-400": string;
  "--s-color-yellow-500": string;
  "--s-color-yellow-600": string;
  "--s-color-yellow-700": string;
  "--s-color-yellow-800": string;
  "--s-color-yellow-900": string;
  "--s-color-orange-50": string;
  "--s-color-orange-100": string;
  "--s-color-orange-200": string;
  "--s-color-orange-300": string;
  "--s-color-orange-400": string;
  "--s-color-orange-500": string;
  "--s-color-orange-600": string;
  "--s-color-orange-700": string;
  "--s-color-orange-800": string;
  "--s-color-orange-900": string;
  "--s-color-red-50": string;
  "--s-color-red-100": string;
  "--s-color-red-200": string;
  "--s-color-red-300": string;
  "--s-color-red-400": string;
  "--s-color-red-500": string;
  "--s-color-red-600": string;
  "--s-color-red-700": string;
  "--s-color-red-800": string;
  "--s-color-red-900": string;
  "--s-color-pink-50": string;
  "--s-color-pink-100": string;
  "--s-color-pink-200": string;
  "--s-color-pink-300": string;
  "--s-color-pink-400": string;
  "--s-color-pink-500": string;
  "--s-color-pink-600": string;
  "--s-color-pink-700": string;
  "--s-color-pink-800": string;
  "--s-color-pink-900": string;
  "--s-color-alpha-neutral-100": string;
  "--s-color-alpha-neutral-200": string;
  "--s-color-alpha-neutral-300": string;
  "--s-color-alpha-neutral-400": string;
  "--s-color-alpha-neutral-500": string;
  "--s-color-alpha-neutral-600": string;
  "--s-color-alpha-neutral-700": string;
  "--s-color-alpha-neutral-800": string;
  "--s-color-alpha-neutral-900": string;
  "--s-color-transparent": string;
}>;

type TColorGeneral = Readonly<{
  "--s-color-brand": string;
  "--s-color-primary": string;
}>;

type TColorText = Readonly<{
  "--s-color-text": string;
  "--s-color-text-inverse": string;
  "--s-color-text-secondary": string;
  "--s-color-text-disabled": string;
}>;

type TColorTextSemantic = Readonly<{
  "--s-color-text-on-primary": string;
  "--s-color-text-on-success": string;
  "--s-color-text-on-warning": string;
  "--s-color-text-on-critical": string;
  "--s-color-text-on-info": string;
  "--s-color-text-on-brand": string;
}>;

type TColorLink = Readonly<{
  "--s-color-link": string;
  "--s-color-link-pressed": string;
}>;

type TColorFeedback = Readonly<{
  "--s-color-feedback-success": string;
  "--s-color-feedback-warning": string;
  "--s-color-feedback-critical": string;
  "--s-color-feedback-info": string;
}>;

type TColorIcon = Readonly<{
  "--s-color-icon": string;
  "--s-color-icon-inverse": string;
  "--s-color-icon-secondary": string;
  "--s-color-icon-disabled": string;
  "--s-color-icon-success": string;
  "--s-color-icon-warning": string;
  "--s-color-icon-critical": string;
  "--s-color-icon-info": string;
}>;

type TColorBackground = Readonly<{
  "--s-color-background-neutral": string;
  "--s-color-background-neutral-hovered": string;
  "--s-color-background-neutral-pressed": string;
  "--s-color-background-neutral-subtle": string;
  "--s-color-background-neutral-subtle-hovered": string;
  "--s-color-background-neutral-subtle-pressed": string;
  "--s-color-background-neutral-inverse": string;
  "--s-color-background-disabled": string;
  "--s-color-background-primary": string;
  "--s-color-background-primary-hovered": string;
  "--s-color-background-primary-pressed": string;
  "--s-color-background-critical": string;
  "--s-color-background-critical-hovered": string;
  "--s-color-background-critical-pressed": string;
  "--s-color-background-brand": string;
  "--s-color-background-input": string;
  "--s-color-background-backdrop": string;
  "--s-color-background-feedback-success-subtle": string;
  "--s-color-background-feedback-warning-subtle": string;
  "--s-color-background-feedback-critical-subtle": string;
  "--s-color-background-feedback-info-subtle": string;
}>;

type TColorBorder = Readonly<{
  "--s-color-border": string;
  "--s-color-border-input": string;
  "--s-color-border-disabled": string;
  "--s-color-border-focused": string;
  "--s-color-border-selected": string;
  "--s-color-border-success": string;
  "--s-color-border-warning": string;
  "--s-color-border-critical": string;
  "--s-color-border-info": string;
}>;

type TColorDecorative = Readonly<{
  "--s-color-decorative-blue": string;
  "--s-color-decorative-teal": string;
  "--s-color-decorative-green": string;
  "--s-color-decorative-yellow": string;
  "--s-color-decorative-orange": string;
  "--s-color-decorative-pink": string;
}>;

type TElevationBackground = Readonly<{
  "--s-elevation-background": string;
  "--s-elevation-background-secondary": string;
  "--s-elevation-surface": string;
  "--s-elevation-raised-lowest": string;
  "--s-elevation-raised-low": string;
  "--s-elevation-raised-medium": string;
  "--s-elevation-raised-high": string;
}>;

type TElevationShadow = Readonly<{
  "--s-elevation-shadow": string;
}>;

type TElevationShadowSemantic = Readonly<{
  "--s-elevation-shadow-raised-lowest": string;
  "--s-elevation-shadow-raised-low": string;
  "--s-elevation-shadow-raised-medium": string;
  "--s-elevation-shadow-raised-high": string;
}>;

type TBorderRadius = Readonly<{
  "--s-border-radius-xs": string;
  "--s-border-radius-sm": string;
  "--s-border-radius-md": string;
  "--s-border-radius-lg": string;
  "--s-border-radius-full": string;
}>;

type TBorderWidth = Readonly<{
  "--s-border-width-sm": string;
  "--s-border-width-md": string;
  "--s-border-width-lg": string;
}>;

type TSpace = Readonly<{
  "--s-space-0": string;
  "--s-space-25": string;
  "--s-space-50": string;
  "--s-space-100": string;
  "--s-space-200": string;
  "--s-space-300": string;
  "--s-space-400": string;
  "--s-space-500": string;
  "--s-space-600": string;
  "--s-space-650": string;
  "--s-space-700": string;
  "--s-space-800": string;
  "--s-space-900": string;
  "--s-space-1000": string;
  "--s-space-1100": string;
  "--s-space-1200": string;
  "--s-space-1300": string;
}>;

type TSpacePx = Readonly<{
  "--s-space-px-0": string;
  "--s-space-px-25": string;
  "--s-space-px-50": string;
  "--s-space-px-100": string;
  "--s-space-px-200": string;
  "--s-space-px-300": string;
  "--s-space-px-400": string;
  "--s-space-px-500": string;
  "--s-space-px-600": string;
  "--s-space-px-650": string;
  "--s-space-px-700": string;
  "--s-space-px-800": string;
  "--s-space-px-900": string;
  "--s-space-px-1000": string;
  "--s-space-px-1100": string;
  "--s-space-px-1200": string;
  "--s-space-px-1300": string;
}>;

type TSize = Readonly<{
  "--s-size-0": string;
  "--s-size-25": string;
  "--s-size-50": string;
  "--s-size-100": string;
  "--s-size-200": string;
  "--s-size-300": string;
  "--s-size-400": string;
  "--s-size-500": string;
  "--s-size-600": string;
  "--s-size-650": string;
  "--s-size-700": string;
  "--s-size-800": string;
  "--s-size-900": string;
  "--s-size-1000": string;
  "--s-size-1100": string;
  "--s-size-1200": string;
  "--s-size-1300": string;
}>;

type TSizePx = Readonly<{
  "--s-size-px-0": string;
  "--s-size-px-25": string;
  "--s-size-px-50": string;
  "--s-size-px-100": string;
  "--s-size-px-200": string;
  "--s-size-px-300": string;
  "--s-size-px-400": string;
  "--s-size-px-500": string;
  "--s-size-px-600": string;
  "--s-size-px-650": string;
  "--s-size-px-700": string;
  "--s-size-px-800": string;
  "--s-size-px-900": string;
  "--s-size-px-1000": string;
  "--s-size-px-1100": string;
  "--s-size-px-1200": string;
  "--s-size-px-1300": string;
}>;

type TFontFamily = Readonly<{
  "--s-font-family-sans": string;
}>;

type TFontSize = Readonly<{
  "--s-font-size-50": string;
  "--s-font-size-100": string;
  "--s-font-size-200": string;
  "--s-font-size-300": string;
  "--s-font-size-400": string;
  "--s-font-size-500": string;
  "--s-font-size-600": string;
}>;

type TFontLineHeight = Readonly<{
  "--s-font-line-height-50": string;
  "--s-font-line-height-100": string;
  "--s-font-line-height-200": string;
  "--s-font-line-height-300": string;
  "--s-font-line-height-400": string;
  "--s-font-line-height-500": string;
  "--s-font-line-height-600": string;
}>;

type TFontWeight = Readonly<{
  "--s-font-weight-300": string;
  "--s-font-weight-400": string;
  "--s-font-weight-500": string;
  "--s-font-weight-600": string;
  "--s-font-weight-700": string;
}>;

type TFontLetterSpacing = Readonly<{
  "--s-font-letter-spacing-0": string;
  "--s-font-letter-spacing-100": string;
  "--s-font-letter-spacing-200": string;
}>;

type TFontParagraphSpacing = Readonly<{
  "--s-font-paragraph-spacing-0": string;
  "--s-font-paragraph-spacing-100": string;
  "--s-font-paragraph-spacing-200": string;
  "--s-font-paragraph-spacing-300": string;
  "--s-font-paragraph-spacing-400": string;
}>;

type TFontTextCase = Readonly<{
  "--s-font-text-case-none": string;
}>;

type TFontTextDecoration = Readonly<{
  "--s-font-text-decoration-none": string;
  "--s-font-text-decoration-underline": string;
}>;

type TBreakpoint = Readonly<{
  "--s-breakpoint-narrow": string;
  "--s-breakpoint-regular": string;
  "--s-breakpoint-wide": string;
  "--s-breakpoint-xs": string;
  "--s-breakpoint-sm": string;
  "--s-breakpoint-md": string;
  "--s-breakpoint-lg": string;
  "--s-breakpoint-xl": string;
  "--s-breakpoint-xxl": string;
}>;

type TCoreTokens = TColorPrimitives & TColorGeneral & TColorText & TColorTextSemantic & TColorLink & TColorIcon & TColorBackground & TColorBorder & TColorFeedback & TColorDecorative & TElevationBackground & TElevationShadow & TElevationShadowSemantic & TBorderRadius & TBorderWidth & TSpace & TSpacePx & TSize & TSizePx & TFontFamily & TFontSize & TFontLineHeight & TFontWeight & TFontLetterSpacing & TFontParagraphSpacing & TFontTextCase & TFontTextDecoration & TBreakpoint;


declare const colorPrimitives: VarGroup<TColorPrimitives>;
declare const colorGeneral: VarGroup<TColorGeneral>;
declare const colorText: VarGroup<TColorText>;
declare const colorTextSemantic: VarGroup<TColorTextSemantic>;
declare const colorLink: VarGroup<TColorLink>;
declare const colorIcon: VarGroup<TColorIcon>;
declare const colorBackground: VarGroup<TColorBackground>;
declare const colorBorder: VarGroup<TColorBorder>;
declare const colorFeedback: VarGroup<TColorFeedback>;
declare const colorDecorative: VarGroup<TColorDecorative>;
declare const elevationBackground: VarGroup<TElevationBackground>;
declare const elevationShadow: VarGroup<TElevationShadow>;
declare const elevationShadowSemantic: VarGroup<TElevationShadowSemantic>;
declare const borderRadius: VarGroup<TBorderRadius>;
declare const borderWidth: VarGroup<TBorderWidth>;
declare const space: VarGroup<TSpace>;
declare const spacePx: VarGroup<TSpacePx>;
declare const size: VarGroup<TSize>;
declare const sizePx: VarGroup<TSizePx>;
declare const fontFamily: VarGroup<TFontFamily>;
declare const fontSize: VarGroup<TFontSize>;
declare const fontLineHeight: VarGroup<TFontLineHeight>;
declare const fontWeight: VarGroup<TFontWeight>;
declare const fontLetterSpacing: VarGroup<TFontLetterSpacing>;
declare const fontParagraphSpacing: VarGroup<TFontParagraphSpacing>;
declare const fontTextCase: VarGroup<TFontTextCase>;
declare const fontTextDecoration: VarGroup<TFontTextDecoration>;
declare const breakpoint: VarGroup<TBreakpoint>;

export declare const coreTokens: VarGroup<TCoreTokens>;
