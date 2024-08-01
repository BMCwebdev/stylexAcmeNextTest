import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '../components/Popover';
import { Button } from '../components/Button';
import { Dialog } from '../components/Dialog';
import { DialogTrigger } from 'react-aria-components';
import { HelpCircle } from 'lucide-react';
import { Text } from '../components/Text';

const meta: Meta = {
  title: 'Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    showArrow: {
      control: 'boolean',
      description: 'Show arrow on popover',
    },
    placement: {
      control: 'text',
      description: 'Placement of the popover',
    },
    children: {
      control: 'text',
      description: 'Content to be rendered inside the popover',
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showArrow: true,
  },
  render: (args: any) => (
    <DialogTrigger>
      <Button variant="icon" aria-label="Help">
        <HelpCircle />
      </Button>
      <Popover {...args}>
        <Dialog>
          <Text size="xlarge" weight="700">
            Help
          </Text>
          <Text elementType='p'>
            Happy Valentine's Day, no one.
          </Text>
        </Dialog>
      </Popover>
    </DialogTrigger>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the default `Popover` with an arrow. The popover content is customizable through the `children` prop.',
      },
    },
  },
} satisfies Story;

export const WithoutArrow: Story = {
  args: {
    showArrow: false,
  },
  render: (args: any) => (
    <DialogTrigger>
      <Button variant="icon" aria-label="Help">
        <HelpCircle />
      </Button>
      <Popover {...args}>
        <Dialog>
          <Text size="xlarge" weight="700">
            BLAMMO!
          </Text>
          <Text elementType='p'>
            Well, that would only be a problem if I had any flaws.
          </Text>
        </Dialog>
      </Popover>
    </DialogTrigger>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the `Popover` without an arrow. The popover content is customizable through the `children` prop.',
      },
    },
  },
} satisfies Story;
