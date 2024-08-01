import { Box } from '../components/Box';

export default {
  title: 'Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Basic = {
  args: {
    children: 'My Basic Box',
  },
};

export const More = {
  args: {
    children: 'This is a box with a border, raidus, and large padding',
    border: true,
    padding: 'large',
    radius: 'medium',
  },
};
