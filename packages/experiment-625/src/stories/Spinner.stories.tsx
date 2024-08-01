import { Spinner } from '../components/Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
  },
};

export const Saving = {
  args: {
    message: 'Saving'
  },
};
