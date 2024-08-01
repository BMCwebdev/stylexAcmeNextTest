import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { useArgs } from '@storybook/preview-api';

export default {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Basic = (args) => {
  const [{ isOpen }, updateArgs] = useArgs();

  const toggleModal = () => {
    updateArgs({ isOpen: !isOpen });
  };

  const setIsOpen = (isOpen) => {
    updateArgs({ isOpen });
  };

  return (
    <div>
      <Button onPress={toggleModal}>Toggle Modal</Button>
      <Modal {...args} isOpen={isOpen} setIsOpen={setIsOpen}>
        <>
          <p>This is the body of the modal.</p>
          <p>
            This modal is controlled by the parent component via the props
            isOpen and setIsOpen.
          </p>
          <Button onPress={() => updateArgs({ isOpen: false })}>
            Close Modal
          </Button>
          <p>
            It comes with a close button in the top right, but you can also add
            your own, since you control the open/closed state externally.
          </p>
        </>
      </Modal>
    </div>
  );
};

Basic.args = {
  headingText: 'My Basic Modal',
};
