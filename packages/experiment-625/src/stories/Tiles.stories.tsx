import React from 'react';
import { Tiles } from '../components/layout/Tiles';

export default {
  title: 'Layout/Tiles',
  component: Tiles,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The Tiles component creates a responsive grid layout with customizable column counts, gaps, and alignments across breakpoints.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8'],
      description: 'Sets the number of tiles.',
    },
    columnsSM: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8'],
      description: 'Sets the number of tiles for small devices.',
    },
    columnsMD: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8'],
      description: 'Sets the number of tiles for medium devices.',
    },
    columnsLG: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8'],
      description: 'Sets the number of tiles for large devices.',
    },
    space: {
      control: 'select',
      options: ['0', '25', '50', '100', '200', '300', '400', '500'],
      description: 'Sets the overall gap between tiles.',
    },
    hspace: {
      control: 'select',
      options: ['0', '25', '50', '100', '200', '300', '400', '500'],
      description: 'Sets the horizontal gap between tiles.',
      defaultValue: undefined,
    },
    vspace: {
      control: 'select',
      options: ['0', '25', '50', '100', '200', '300', '400', '500'],
      description: 'Sets the vertical gap between tiles.',
      defaultValue: undefined,
    },
  },
  args: {
    columns: '6',
    space: '50',
    hspace: undefined,
    vspace: undefined,
    children: [
      <div style={{ backgroundColor: 'lightblue', padding: '10px', border: '1px solid blue' }}>Tile 1</div>,
      <div style={{ backgroundColor: 'lightgreen', padding: '10px', border: '1px solid green' }}>Tile 2</div>,
      <div style={{ backgroundColor: 'lightcoral', padding: '10px', border: '1px solid coral' }}>Tile 3</div>,
      <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '10px', border: '1px solid gold' }}>Tile 4</div>,
      <div style={{ backgroundColor: 'lavender', padding: '10px', border: '1px solid purple' }}>Tile 5</div>,
      <div style={{ backgroundColor: 'peachpuff', padding: '10px', border: '1px solid orange' }}>Tile 6</div>,
    ],
  },
};

export const Default = {};

export const OneTile = {
  args: {
    columns: '1',
  },
};

export const TwoTiles = {
  args: {
    columns: '2',
  },
};

export const ResponsiveTiles = {
  args: {
    columns: '4',
    columnsSM: '2',
    columnsMD: '4',
    columnsLG: '6',
  },
};

export const CustomGaps = {
  args: {
    columns: '3',
    space: '25',
    hspace: '100',
    vspace: '50',
    children: [
      <div style={{ backgroundColor: 'lightblue', padding: '10px', border: '1px solid blue' }}>Tile 1</div>,
      <div style={{ backgroundColor: 'lightgreen', padding: '10px', border: '1px solid green' }}>Tile 2</div>,
      <div style={{ backgroundColor: 'lightcoral', padding: '10px', border: '1px solid coral' }}>Tile 3</div>,
      <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '10px', border: '1px solid gold' }}>Tile 4</div>,
      <div style={{ backgroundColor: 'lavender', padding: '10px', border: '1px solid purple' }}>Tile 5</div>,
      <div style={{ backgroundColor: 'peachpuff', padding: '10px', border: '1px solid orange' }}>Tile 6</div>,
      <div style={{ backgroundColor: 'lightblue', padding: '10px', border: '1px solid blue' }}>Tile 7</div>,
      <div style={{ backgroundColor: 'lightgreen', padding: '10px', border: '1px solid green' }}>Tile 8</div>,
      <div style={{ backgroundColor: 'lightcoral', padding: '10px', border: '1px solid coral' }}>Tile 9</div>,
      <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '10px', border: '1px solid gold' }}>Tile 10</div>,
      <div style={{ backgroundColor: 'lavender', padding: '10px', border: '1px solid purple' }}>Tile 11</div>,
      <div style={{ backgroundColor: 'peachpuff', padding: '10px', border: '1px solid orange' }}>Tile 12</div>,
    ],
  },
};

export const AsSpan = {
  args: {
    as: 'span',
    columns: '3',
    children: [
      <span style={{ backgroundColor: 'lightblue', padding: '10px', border: '1px solid blue' }}>Span Tile 1</span>,
      <span style={{ backgroundColor: 'lightgreen', padding: '10px', border: '1px solid green' }}>Span Tile 2</span>,
      <span style={{ backgroundColor: 'lightcoral', padding: '10px', border: '1px solid coral' }}>Span Tile 3</span>,
    ],
  },
};
