import { Meta, StoryObj } from '@storybook/react';
import { ChoiceTiles } from '../components/ChoiceTiles';
import React from 'react';

// Example data for the ChoiceTiles component
const exampleItems = [
  { id: 1, organization: 'Org A', match_percentage: '85%', close_date: '2024-05-30' },
  { id: 2, organization: 'Org B', match_percentage: '70%', close_date: '2024-06-15' },
  { id: 3, organization: 'Org C', match_percentage: '95%', close_date: '2024-07-20' }
];

const exampleItems2 = [
  { id: 1, organization: `Long Title: There was some confusion and I ended up punching the real Levar Burton. This is how I cry now. Ever since you made me get that off-brand eye surgery. Hey, that was a lady with a plan. Diapers, Mace, Houston to Orlando in nine hours - blam-o! There ain't no party like a Liz Lemon party 'cause a Liz Lemon party is mandatory! He could be a serial killer. He could wear a thumb ring.`, match_percentage: '85%', close_date: '2024-05-30' },
];

const meta: Meta<typeof ChoiceTiles> = {
  component: ChoiceTiles,
  title: 'ChoiceTiles',
};
export default meta;

export const Example: StoryObj<typeof ChoiceTiles> = {
  render: (args) => <ChoiceTiles {...args} />,
  args: {
    ariaLabel: 'Organization Selection',
    onAction: null,
    items: exampleItems
  }
};

export const DisabledItems: StoryObj<typeof ChoiceTiles> = {
  render: (args) => <ChoiceTiles {...args} />,
  args: {
    ariaLabel: 'Organization Selection with Disabled Items',
    onAction: null,
    items: exampleItems2,
    disabledKeys: [1]
  }
};