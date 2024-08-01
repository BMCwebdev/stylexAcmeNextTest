import { ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import {
  Dialog,
  Heading,
  Modal as RACModal,
  ModalOverlay,
} from 'react-aria-components';
import { Button } from './Button';
import { Box } from './Box';
import { colors } from '@bmcwebdev/stitch-tokens/colors.stylex';
import { fonts } from '@bmcwebdev/stitch-tokens/fonts.stylex';
import { sizes } from '@bmcwebdev/stitch-tokens/sizes.stylex';

const styles = stylex.create({
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: 'var(--visual-viewport-height)',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  heading: {
    font: fonts.sans,
    fontSize: fonts.size_300,
    color: colors.neutral_1100,
  },
  headingWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  modal: {
    color: colors.neutral_1000,
    fontSize: fonts.size_200,
  },
  modalSmall: {
    maxWidth: sizes.fixed_container_sm,
  },
  modalMedium: {
    maxWidth: sizes.fixed_container_md,
  },
  modalLarge: {
    maxWidth: sizes.fixed_container_lg,
  },
});

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  headingText: string;
  setIsOpen: (isOpen: boolean) => void;
  width: 'small' | 'medium' | 'large';
}

export function Modal({
  children,
  isOpen,
  headingText,
  setIsOpen,
  width = 'small',
}: ModalProps) {
  return (
    <ModalOverlay
      {...stylex.props(styles.modalOverlay)}
      isDismissable
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <RACModal
        {...stylex.props(
          styles.modal,
          width === 'small' && styles.modalSmall,
          width === 'medium' && styles.modalMedium,
          width === 'large' && styles.modalLarge,
        )}
      >
        <Dialog>
          <Box radius="medium">
            <div {...stylex.props(styles.headingWrapper)}>
              <Heading {...stylex.props(styles.heading)} slot="title">
                {headingText}
              </Heading>
              {setIsOpen && (
                <Button onPress={() => setIsOpen(false)} variant="secondary">
                  Close
                </Button>
              )}
            </div>
            {children}
          </Box>
        </Dialog>
      </RACModal>
    </ModalOverlay>
  );
}
