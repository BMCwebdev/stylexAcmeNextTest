"use client";
// This component may become something called OverlaySection with variants of Dropdown, Dialog, Modal, Popover.

import React from "react";
import {
  Section as AriaSection,
  type SectionProps as AriaSectionProps,
  Collection as AriaCollection,
} from "react-aria-components";
import { Header } from "./Header";
import * as stylex from '@stylexjs/stylex';

import { Text } from "./Text";
import { sizes } from '@bmcwebdev/stitch-tokens/sizes.stylex';


const dropdownSectionStyles = stylex.create({
  base: {
    padding: sizes.spacing_300,
    display: 'flex',
    flexDirection: 'column',
    gap: sizes.spacing_50,
  },
  xBleed: {
    padding: `${sizes.spacing_100} 0`,
  }
});

export interface DropdownSectionProps<T> extends AriaSectionProps<T> {
  title?: string;
  xBleed?: boolean;
}
const DropdownSection = <T extends object>({ title, xBleed = false, ...props }: DropdownSectionProps<T>) => {
  return (
    <AriaSection
      {...props}
      {...stylex.props(
        dropdownSectionStyles.base,
        xBleed && dropdownSectionStyles.xBleed
      )}
    >
      {title && <DropdownSectionTitle title={title} />}
      <AriaCollection items={props.items}>{props.children}</AriaCollection>
    </AriaSection>
  );
};

type DropdownSectionTitleProps = React.HTMLAttributes<HTMLElement>;
const DropdownSectionTitle = ({ title, ...props }: DropdownSectionTitleProps) => {
  return <Header {...props}>
    <Text elementType="span" color="secondary" weight="400" >
      {title}
    </Text>
  </Header>;
};

export { DropdownSection, DropdownSectionTitle };
