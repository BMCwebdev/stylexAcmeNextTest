import { defineVars } from "@stylexjs/stylex";

// COLORS

export const colorPrimitives = {
  "--s-color-neutral-0": "#ffffff",
  "--s-color-neutral-100": "#f8f8f9",
  "--s-color-neutral-200": "#f3f2f4",
  "--s-color-neutral-300": "#e6e3e8",
  "--s-color-neutral-400": "#dad7de",
  "--s-color-neutral-500": "#cec9d3",
  "--s-color-neutral-600": "#c2bcc8",
  "--s-color-neutral-700": "#aba5b1",
  "--s-color-neutral-800": "#89848e",
  "--s-color-neutral-900": "#67636a",
  "--s-color-neutral-1000": "#444247",
  "--s-color-neutral-1100": "#1a191b",
  "--s-color-peri-50": "#edefff",
  "--s-color-peri-100": "#dce0ff",
  "--s-color-peri-200": "#f8f8f9",
  "--s-color-peri-300": "#97a3fe",
  "--s-color-peri-400": "#7484fe",
  "--s-color-peri-500": "#5165fe",
  "--s-color-peri-600": "#495be5",
  "--s-color-peri-700": "#3947b2",
  "--s-color-peri-800": "#29337f",
  "--s-color-peri-900": "#181e4c",
  "--s-color-indigo-50": "#edeaf1",
  "--s-color-indigo-100": "#afa1bf",
  "--s-color-indigo-200": "#8871a0",
  "--s-color-indigo-300": "#604280",
  "--s-color-indigo-400": "#4c2b70",
  "--s-color-indigo-500": "#381360",
  "--s-color-indigo-600": "#321156",
  "--s-color-indigo-700": "#270d43",
  "--s-color-indigo-800": "#1c0a30",
  "--s-color-indigo-900": "#11061d",
  "--s-color-blue-50": "#e7f7ff",
  "--s-color-blue-100": "#d0eeff",
  "--s-color-blue-200": "#a2ddff",
  "--s-color-blue-300": "#73cdff",
  "--s-color-blue-400": "#45bcff",
  "--s-color-blue-500": "#16abff",
  "--s-color-blue-600": "#149ae6",
  "--s-color-blue-700": "#0f78b3",
  "--s-color-blue-800": "#0b5680",
  "--s-color-blue-900": "#07334d",
  "--s-color-teal-50": "#e5f8fa",
  "--s-color-teal-100": "#ccf1f5",
  "--s-color-teal-200": "#99e3eb",
  "--s-color-teal-300": "#66d6e0",
  "--s-color-teal-400": "#33c8d6",
  "--s-color-teal-500": "#00bacc",
  "--s-color-teal-600": "#00a7b8",
  "--s-color-teal-700": "#00828f",
  "--s-color-teal-800": "#005d66",
  "--s-color-teal-900": "#00383d",
  "--s-color-green-50": "#f1faed",
  "--s-color-green-100": "#e3f5db",
  "--s-color-green-200": "#c7ebb7",
  "--s-color-green-300": "#abe092",
  "--s-color-green-400": "#8fd66e",
  "--s-color-green-500": "#73cc4a",
  "--s-color-green-600": "#68b843",
  "--s-color-green-700": "#518f34",
  "--s-color-green-800": "#3a6625",
  "--s-color-green-900": "#233d16",
  "--s-color-yellow-50": "#fff9e5",
  "--s-color-yellow-100": "#fef2cc",
  "--s-color-yellow-200": "#fde699",
  "--s-color-yellow-300": "#fdd966",
  "--s-color-yellow-400": "#fccd33",
  "--s-color-yellow-500": "#fbc000",
  "--s-color-yellow-600": "#e2ad00",
  "--s-color-yellow-700": "#b08600",
  "--s-color-yellow-800": "#7e6000",
  "--s-color-yellow-900": "#4b3a00",
  "--s-color-orange-50": "#fff5e7",
  "--s-color-orange-100": "#ffebce",
  "--s-color-orange-200": "#ffd89d",
  "--s-color-orange-300": "#ffc46b",
  "--s-color-orange-400": "#ffb13a",
  "--s-color-orange-500": "#ff9d09",
  "--s-color-orange-600": "#e68d08",
  "--s-color-orange-700": "#b36e06",
  "--s-color-orange-800": "#804f05",
  "--s-color-orange-900": "#4d2f03",
  "--s-color-red-50": "#fde7e9",
  "--s-color-red-100": "#fbcfd2",
  "--s-color-red-200": "#f79fa5",
  "--s-color-red-300": "#f27079",
  "--s-color-red-400": "#ee404c",
  "--s-color-red-500": "#ea101f",
  "--s-color-red-600": "#d30e1c",
  "--s-color-red-700": "#a40b16",
  "--s-color-red-800": "#750810",
  "--s-color-red-900": "#460509",
  "--s-color-pink-50": "#fcebf6",
  "--s-color-pink-100": "#f9d8ed",
  "--s-color-pink-200": "#f3b2db",
  "--s-color-pink-300": "#ed8bca",
  "--s-color-pink-400": "#e765b8",
  "--s-color-pink-500": "#e13ea6",
  "--s-color-pink-600": "#cb3895",
  "--s-color-pink-700": "#9e2b74",
  "--s-color-pink-800": "#711f53",
  "--s-color-pink-900": "#441332",
  "--s-color-alpha-neutral-100": "rgba(22, 22, 55, 0.03)",
  "--s-color-alpha-neutral-200": "rgba(56, 39, 73, 0.06)",
  "--s-color-alpha-neutral-300": "rgba(28, 0, 46, 0.11)",
  "--s-color-alpha-neutral-400": "rgba(25, 5, 51, 0.16)",
  "--s-color-alpha-neutral-500": "rgba(32, 10, 56, 0.22)",
  "--s-color-alpha-neutral-600": "rgba(28, 7, 49, 0.27)",
  "--s-color-alpha-neutral-700": "rgba(21, 5, 36, 0.36)",
  "--s-color-alpha-neutral-800": "rgba(15, 4, 26, 0.49)",
  "--s-color-alpha-neutral-900": "rgba(11, 3, 17, 0.62)",
  "--s-color-transparent": "transparent",
};

export const colorGeneral = {
  "--s-color-brand": colorPrimitives["--s-color-indigo-500"],
  "--s-color-primary": colorPrimitives["--s-color-peri-500"],
};

export const colorText = {
  "--s-color-text": colorPrimitives["--s-color-neutral-1100"],
  "--s-color-text-inverse": colorPrimitives["--s-color-neutral-0"],
  "--s-color-text-secondary": colorPrimitives["--s-color-neutral-900"],
  "--s-color-text-disabled": colorPrimitives["--s-color-alpha-neutral-600"],
};

export const colorTextSemantic = {
  "--s-color-text-on-primary": colorText["--s-color-text-inverse"],
  "--s-color-text-on-success": colorText["--s-color-text"],
  "--s-color-text-on-warning": colorText["--s-color-text"],
  "--s-color-text-on-critical": colorText["--s-color-text-inverse"],
  "--s-color-text-on-info": colorText["--s-color-text"],
  "--s-color-text-on-brand": colorText["--s-color-text-inverse"],
};

export const colorLink = {
  "--s-color-link": colorPrimitives["--s-color-peri-600"],
  "--s-color-link-pressed": colorPrimitives["--s-color-peri-700"],
};

export const colorFeedback = {
  "--s-color-feedback-success": colorPrimitives["--s-color-green-500"],
  "--s-color-feedback-warning": colorPrimitives["--s-color-yellow-500"],
  "--s-color-feedback-critical": colorPrimitives["--s-color-red-500"],
  "--s-color-feedback-info": colorPrimitives["--s-color-teal-500"],
};

export const colorIcon = {
  "--s-color-icon": colorPrimitives["--s-color-neutral-1100"],
  "--s-color-icon-inverse": colorPrimitives["--s-color-neutral-0"],
  "--s-color-icon-secondary": colorPrimitives["--s-color-neutral-900"],
  "--s-color-icon-disabled": colorPrimitives["--s-color-alpha-neutral-600"],
  "--s-color-icon-success": colorFeedback["--s-color-feedback-success"],
  "--s-color-icon-warning": colorFeedback["--s-color-feedback-warning"],
  "--s-color-icon-critical": colorFeedback["--s-color-feedback-critical"],
  "--s-color-icon-info": colorFeedback["--s-color-feedback-info"],
};

export const colorBackground = {
  "--s-color-background-neutral": colorPrimitives["--s-color-neutral-0"],
  "--s-color-background-neutral-hovered": colorPrimitives["--s-color-neutral-200"],
  "--s-color-background-neutral-pressed": colorPrimitives["--s-color-neutral-300"],
  "--s-color-background-neutral-subtle": colorPrimitives["--s-color-transparent"],
  "--s-color-background-neutral-subtle-hovered": colorPrimitives["--s-color-alpha-neutral-200"],
  "--s-color-background-neutral-subtle-pressed": colorPrimitives["--s-color-alpha-neutral-300"],
  "--s-color-background-neutral-inverse": colorPrimitives["--s-color-neutral-1000"],
  "--s-color-background-disabled": colorPrimitives["--s-color-alpha-neutral-200"],
  "--s-color-background-primary": colorGeneral["--s-color-primary"],
  "--s-color-background-primary-hovered": colorPrimitives["--s-color-peri-600"],
  "--s-color-background-primary-pressed": colorPrimitives["--s-color-peri-700"],
  "--s-color-background-critical": colorFeedback["--s-color-feedback-critical"],
  "--s-color-background-critical-hovered": colorPrimitives["--s-color-red-600"],
  "--s-color-background-critical-pressed": colorPrimitives["--s-color-red-700"],
  "--s-color-background-brand": colorGeneral["--s-color-brand"],
  "--s-color-background-input": colorPrimitives["--s-color-neutral-0"],
  "--s-color-background-backdrop": colorPrimitives["--s-color-alpha-neutral-900"],
  "--s-color-background-feedback-success-subtle": colorPrimitives["--s-color-green-50"],
  "--s-color-background-feedback-warning-subtle": colorPrimitives["--s-color-yellow-50"],
  "--s-color-background-feedback-critical-subtle": colorPrimitives["--s-color-red-50"],
  "--s-color-background-feedback-info-subtle": colorPrimitives["--s-color-teal-50"],
};

export const colorBorder = {
  "--s-color-border": colorPrimitives["--s-color-alpha-neutral-500"],
  "--s-color-border-input": colorPrimitives["--s-color-neutral-800"],
  "--s-color-border-disabled": colorPrimitives["--s-color-alpha-neutral-400"],
  "--s-color-border-focused": colorGeneral["--s-color-primary"],
  "--s-color-border-selected": colorGeneral["--s-color-primary"],
  "--s-color-border-success": colorFeedback["--s-color-feedback-success"],
  "--s-color-border-warning": colorFeedback["--s-color-feedback-warning"],
  "--s-color-border-critical": colorFeedback["--s-color-feedback-critical"],
  "--s-color-border-info": colorFeedback["--s-color-feedback-info"],
};

export const colorDecorative = {
  "--s-color-decorative-blue": colorPrimitives["--s-color-blue-500"],
  "--s-color-decorative-teal": colorPrimitives["--s-color-teal-500"],
  "--s-color-decorative-green": colorPrimitives["--s-color-green-500"],
  "--s-color-decorative-yellow": colorPrimitives["--s-color-yellow-500"],
  "--s-color-decorative-orange": colorPrimitives["--s-color-orange-500"],
  "--s-color-decorative-pink": colorPrimitives["--s-color-pink-500"],
};

// ELEVATIONS

export const elevationBackground = {
  "--s-elevation-background": colorPrimitives["--s-color-neutral-100"],
  "--s-elevation-background-secondary": colorPrimitives["--s-color-neutral-0"],
  "--s-elevation-surface": colorPrimitives["--s-color-neutral-0"],
  "--s-elevation-raised-lowest": colorPrimitives["--s-color-neutral-0"],
  "--s-elevation-raised-low": colorPrimitives["--s-color-neutral-0"],
  "--s-elevation-raised-medium": colorPrimitives["--s-color-neutral-0"],
  "--s-elevation-raised-high": colorPrimitives["--s-color-neutral-0"],
};

export const elevationShadow = {
  "--s-elevation-shadow": colorPrimitives["--s-color-alpha-neutral-300"],
};

export const elevationShadowSemantic = {
  "--s-elevation-shadow-raised-lowest": `0 1px 1px ${elevationShadow["--s-elevation-shadow"]}`,
  "--s-elevation-shadow-raised-low": `0 2px 4px ${elevationShadow["--s-elevation-shadow"]}, 0 0 1px ${elevationShadow["--s-elevation-shadow"]}`,
  "--s-elevation-shadow-raised-medium": `0 4px 8px ${elevationShadow["--s-elevation-shadow"]}, 0 0 1px ${elevationShadow["--s-elevation-shadow"]}`,
  "--s-elevation-shadow-raised-high": `0 8px 16px ${elevationShadow["--s-elevation-shadow"]}, 0 0 1px ${elevationShadow["--s-elevation-shadow"]}`,
};

// BORDER

export const borderRadius = {
  "--s-border-radius-xs": "2px",
  "--s-border-radius-sm": "4px",
  "--s-border-radius-md": "8px",
  "--s-border-radius-lg": "12px",
  "--s-border-radius-full": "9999px",
};

export const borderWidth = {
  "--s-border-width-sm": "1px",
  "--s-border-width-md": "2px",
  "--s-border-width-lg": "3px",
};

// SPACE

export const space = {
  "--s-space-0": "0rem",
  "--s-space-25": "0.125rem",
  "--s-space-50": "0.25rem",
  "--s-space-100": "0.5rem",
  "--s-space-200": "0.75rem",
  "--s-space-300": "1rem",
  "--s-space-400": "1.25rem",
  "--s-space-500": "1.5rem",
  "--s-space-600": "2rem",
  "--s-space-650": "2.25rem",
  "--s-space-700": "2.5rem",
  "--s-space-800": "3rem",
  "--s-space-900": "3.5rem",
  "--s-space-1000": "4rem",
  "--s-space-1100": "5rem",
  "--s-space-1200": "6rem",
  "--s-space-1300": "7.5rem",
};

export const spacePx = {
  "--s-space-px-0": "0px",
  "--s-space-px-25": "2px",
  "--s-space-px-50": "4px",
  "--s-space-px-100": "8px",
  "--s-space-px-200": "12px",
  "--s-space-px-300": "16px",
  "--s-space-px-400": "20px",
  "--s-space-px-500": "24px",
  "--s-space-px-600": "32px",
  "--s-space-px-650": "36px",
  "--s-space-px-700": "40px",
  "--s-space-px-800": "48px",
  "--s-space-px-900": "56px",
  "--s-space-px-1000": "64px",
  "--s-space-px-1100": "80px",
  "--s-space-px-1200": "96px",
  "--s-space-px-1300": "120px",
};

// SIZE

export const size = {
  "--s-size-0": "0rem",
  "--s-size-25": "0.125rem",
  "--s-size-50": "0.25rem",
  "--s-size-100": "0.5rem",
  "--s-size-200": "0.75rem",
  "--s-size-300": "1rem",
  "--s-size-400": "1.25rem",
  "--s-size-500": "1.5rem",
  "--s-size-600": "2rem",
  "--s-size-650": "2.25rem",
  "--s-size-700": "2.5rem",
  "--s-size-800": "3rem",
  "--s-size-900": "3.5rem",
  "--s-size-1000": "4rem",
  "--s-size-1100": "5rem",
  "--s-size-1200": "6rem",
  "--s-size-1300": "7.5rem",
};

export const sizePx = {
  "--s-size-px-0": "0px",
  "--s-size-px-25": "2px",
  "--s-size-px-50": "4px",
  "--s-size-px-100": "8px",
  "--s-size-px-200": "12px",
  "--s-size-px-300": "16px",
  "--s-size-px-400": "20px",
  "--s-size-px-500": "24px",
  "--s-size-px-600": "32px",
  "--s-size-px-650": "36px",
  "--s-size-px-700": "40px",
  "--s-size-px-800": "48px",
  "--s-size-px-900": "56px",
  "--s-size-px-1000": "64px",
  "--s-size-px-1100": "80px",
  "--s-size-px-1200": "96px",
  "--s-size-px-1300": "120px",
};

// FONT

export const fontFamily = {
  "--s-font-family-sans": "'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji','Segoe UI Symbol', 'Noto Color Emoji'",
};

export const fontSize = {
  "--s-font-size-50": "0.75rem",
  "--s-font-size-100": "0.875rem",
  "--s-font-size-200": "1rem",
  "--s-font-size-300": "1.25rem",
  "--s-font-size-400": "1.5rem",
  "--s-font-size-500": "2rem",
  "--s-font-size-600": "2.5rem",
};

export const fontLineHeight = {
  "--s-font-line-height-50": "6px",
  "--s-font-line-height-100": "20px",
  "--s-font-line-height-200": "24px",
  "--s-font-line-height-300": "32px",
  "--s-font-line-height-400": "40px",
  "--s-font-line-height-500": "48px",
  "--s-font-line-height-600": "64px",
};

export const fontWeight = {
  "--s-font-weight-300": "300",
  "--s-font-weight-400": "400",
  "--s-font-weight-500": "500",
  "--s-font-weight-600": "600",
  "--s-font-weight-700": "700",
};

export const fontLetterSpacing = {
  "--s-font-letter-spacing-0": "0",
  "--s-font-letter-spacing-100": "0.01em",
  "--s-font-letter-spacing-200": "0.02em",
};

export const fontParagraphSpacing = {
  "--s-font-paragraph-spacing-0": "0",
  "--s-font-paragraph-spacing-100": "1.25rem",
  "--s-font-paragraph-spacing-200": "1.5rem",
  "--s-font-paragraph-spacing-300": "2rem",
  "--s-font-paragraph-spacing-400": "2.5rem",
};

export const fontTextCase = {
  "--s-font-text-case-none": "none",
};

export const fontTextDecoration = {
  "--s-font-text-decoration-none": "none",
  "--s-font-text-decoration-underline": "underline",
};

// BREAKPOINTS

export const breakpoint = {
  "--s-breakpoint-narrow": "0rem",
  "--s-breakpoint-regular": "64rem",
  "--s-breakpoint-wide": "75rem",
  "--s-breakpoint-xs": "0rem",
  "--s-breakpoint-sm": "30rem",
  "--s-breakpoint-md": "48rem",
  "--s-breakpoint-lg": "64rem",
  "--s-breakpoint-xl": "75rem",
  "--s-breakpoint-xxl": "90rem",
};

export const coreTokens = defineVars({
  ...colorPrimitives,
  ...colorGeneral,
  ...colorText,
  ...colorTextSemantic,
  ...colorLink,
  ...colorIcon,
  ...colorBackground,
  ...colorBorder,
  ...colorFeedback,
  ...colorDecorative,
  ...elevationBackground,
  ...elevationShadow,
  ...elevationShadowSemantic,
  ...borderRadius,
  ...borderWidth,
  ...space,
  ...spacePx,
  ...size,
  ...sizePx,
  ...fontFamily,
  ...fontSize,
  ...fontLineHeight,
  ...fontWeight,
  ...fontLetterSpacing,
  ...fontParagraphSpacing,
  ...fontTextCase,
  ...fontTextDecoration,
  ...breakpoint,
});