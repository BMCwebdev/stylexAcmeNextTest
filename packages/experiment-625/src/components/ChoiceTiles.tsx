import {
  ListBox,
  ListBoxItem,
  ListBoxProps,
  ListBoxItemProps,
  Text,
  ListBoxItemRenderProps,
} from 'react-aria-components';
import { Column, Columns } from './layout/Columns';
import { Stack } from './layout/Stack';
import { sizes } from '@bmcwebdev/stitch-tokens/sizes.stylex';
import { colors, colorsBackground, colorsBorder, colorsShadow, colorsText } from '@bmcwebdev/stitch-tokens/colors.stylex';
import { styleXFocusRing } from './utils';
import * as stylex from '@stylexjs/stylex';

interface ChoiceTilesProps<T> extends Omit<ListBoxProps<T>, 'layout' | 'orientation'> {
  ariaLabel: string;
  items?: T[];
}
interface ItemsProps {
  id: number;
  organization: string;
  match_percentage: string;
  close_date: string;
}


export const ChoiceTiles: React.FC<ChoiceTilesProps<ItemsProps>> = ({
  ariaLabel,
  items,
  ...props
}: ChoiceTilesProps<ItemsProps>) => {
  return (
    <ListBox
      aria-label={ariaLabel}
      items={items}
      selectionBehavior="toggle"
      selectionMode="single"
      {...props}
      {...stylex.props(
        choiceTilesStyle.base,
      )}
    >
      {(item: ItemsProps) => <ChoiceTilesItem item={item} key={item.id} />}
    </ListBox>
  );
}

interface ChoiceTilesItemProps<T extends ItemsProps> extends ListBoxItemProps<T> { item: T; }

function ChoiceTilesItem<T extends ItemsProps>({ item }: ChoiceTilesItemProps<T>) {
  return (
    <ListBoxItem
      className={(renderProps: ListBoxItemRenderProps) => {
        return (
          stylex.props(
            choiceTileItemStyle.base,
            renderProps.isHovered && choiceTileItemStyle.hover,
            renderProps.isPressed && choiceTileItemStyle.pressed,
            renderProps.isFocusVisible && styleXFocusRing.base,
            renderProps.isFocusVisible && choiceTileItemStyle.focused,
            renderProps.isSelected && choiceTileItemStyle.selected,
            renderProps.isDisabled && choiceTileItemStyle.disabled,
          ).className || ''
        );
      }}
      id={item.id}
    >
      {(renderProps: ListBoxItemRenderProps) => (
        <Columns fullHeight={true} space="300">
          <Column width="auto">
            <div {...stylex.props(
              textWrapper.base,
            )}>
              <Stack fullHeight={true} space="200" verticalAlign="spaceBetween">
                <Text slot="label">
                  <span {...stylex.props(textStyles.label)}>
                    {item.organization}
                  </span>
                </Text>
                <Text elementType="span" slot="description">
                  <span {...stylex.props(textStyles.description)}>Close date: </span>
                  {item.close_date}
                </Text>
              </Stack>
            </div>
          </Column>
          <Column width="1/4">
            <div {...stylex.props(
              percentWrapper.base,
              renderProps.isSelected && percentWrapper.selected,
            )}>
              <div>{item.match_percentage}</div>
              <div>match</div>
            </div>
          </Column>
        </Columns>
      )}
    </ListBoxItem>
  );
}

const textWrapper = stylex.create({
  base: {
    height: '100%',
    padding: sizes.spacing_300,
  },
  hover: {
    backgroundColor: colors.neutral_100,
  }
});

const percentWrapper = stylex.create({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: colors.neutral_100,
    color: colorsText.default,
    flexDirection: 'column',
  },
  selected: {
    backgroundColor: colors.blue_50,
  }
});

const textStyles = stylex.create({
  label: {
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  description: {
    color: colorsText.secondary,
  },
});

const choiceTilesStyle = stylex.create({
  base: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: sizes.spacing_200,
  }
});

const choiceTileItemStyle = stylex.create({
  base: {
    backgroundColor: colorsBackground.neutral,
    borderRadius: sizes.radius_md,
    boxShadow: colorsShadow.raised_lowest,
    outline: 'none',
    overflow: "hidden",
    position: 'relative',
    '::before': {
      borderRadius: sizes.radius_md,
      bottom: 0,
      boxShadow: `inset 0px 0px 0px ${sizes.border_sm} ${colorsBorder.input}`,
      content: '""',
      display: 'block',
      left: 0,
      overflow: 'hidden',
      position: 'absolute',
      right: 0,
      top: 0,
    }
  },
  hover: {
    backgroundColor: colorsBackground.neutral_hovered,
    boxShadow: null,
  },
  pressed: {
    backgroundColor: colorsBackground.neutral_pressed,
    boxShadow: null,
  },
  focused: {
    boxShadow: null,
  },
  selected: {
    boxShadow: null,
    '::before': {
      boxShadow: `inset 0px 0px 0px ${sizes.border_md} ${colorsBorder.primary}`,
    },
  },
  disabled: {
    backgroundColor: '#fff',
    boxShadow: null,
    '::before': {
      boxShadow: `inset 0px 0px 0px ${sizes.border_sm} ${colorsBorder.disabled}`,
    },
  },
});
