import { Alert } from '../components/Alert';

export default {
  title: 'Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {},
};

export const Success = {
  args: {
    message: 'Your changes have been saved.',
    title: 'Success',
    type: 'success',
  },
};

export const Error = {
  args: {
    message: 'Something went wrong.',
    title: 'Error',
    type: 'error',
  },
};

export const Warning = {
  args: {
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    title: 'Warning',
    type: 'warning',
  },
};

export const Info = {
  args: {
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    title: 'Informational Message Title',
    type: 'info',
  },
};
