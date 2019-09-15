import { useWindowSize } from '@app/hooks';
import { Text } from '@app/typography';
import noScroll from 'no-scroll';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'react-feather';
import Measure from 'react-measure';
import { useTransition } from 'react-spring';
import { StyledSystemProps } from 'styled-system';
import Button from '../Button';
import ErrorBoundary from '../ErrorBoundary';
import Flex from '../Flex';
import ScrollView from '../ScrollView';
// Styles
import { Portal, PortalInner, PortalInnerHeader, Scrim } from './styles';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Modal');

const portalContainer = document.getElementById('portals') || document.body;

interface IModalProps extends StyledSystemProps {
  closeOnDocumentClick?: boolean;
  closeOnEscape?: boolean;
  fullscreen?: boolean;
  hasStickyHeader?: boolean;
  modalTitle?: string;
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
  trigger: React.ReactElement;
  animConfig?: any;
}

/**
 * @render react
 * @name Modal component
 * @description Modal component.
 * @example
 *  <Modal
 *    trigger={<button>Open Modal</button>}
 *  >
 *    <Component />
 *  </Modal>
 */

const Modal: FC<IModalProps> = (props) => {
  const { children, open } = props;

  const { height: windowHeight } = useWindowSize();

  const [contentHeight, setContentHeight] = useState<number>(-1);
  const [isFullscreen, setFullscreen] = useState(!!props.fullscreen);
  const [isOpen, setIsOpen] = useState(open);

  const WRAPPER = useMemo(() => document.createElement('div'), []);
  WRAPPER.className = 'c-portal';
  WRAPPER.setAttribute('role', 'dialog');

  const portalTransition = useTransition(isOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 195 },
  });

  const portalInnerTransition = useTransition(
    isOpen,
    null,
    props.animConfig || {
      from: { opacity: 0, transform: 'scale(0.8)' },
      enter: { opacity: 1, transform: 'scale(1)' },
      leave: { opacity: 0, transform: 'scale(0.8)' },
    },
  );

  /**
   * Close modal
   */
  const closeModal = () => {
    noScroll.off();
    setIsOpen(false);
    props.onClose && props.onClose();
  };

  /**
   * Open modal
   */
  const openModal = () => {
    noScroll.on();
    setIsOpen(true);
    props.onOpen && props.onOpen();
  };

  const TRIGGER = props.trigger
    ? React.cloneElement(props.trigger, { onClick: openModal })
    : null;

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { closeModal });
    }

    return child;
  });

  useEffect(() => {
    if (open) {
      setIsOpen(true);
      noScroll.on();
    } else {
      setIsOpen(false);
      noScroll.off();
    }
  }, [open]);

  useEffect(() => {
    if (portalContainer && WRAPPER) {
      portalContainer.appendChild(WRAPPER);
    }
    return () => {
      if (portalContainer && WRAPPER) {
        portalContainer.removeChild(WRAPPER);
      }
    };
  }, [WRAPPER]);

  useEffect(() => {
    if (!props.fullscreen) {
      const makeFullscreen = contentHeight > windowHeight;
      setFullscreen(makeFullscreen);
    }
  }, [contentHeight, windowHeight, props.fullscreen]);

  return (
    <React.Fragment>
      {TRIGGER}
      <ErrorBoundary>
        {createPortal(
          <React.Fragment>
            {portalTransition.map(
              (portal) =>
                portal.item && (
                  <Portal
                    key={portal.key}
                    style={portal.props}
                    justifyContent={props.justifyContent}
                    p={isFullscreen ? '0' : props.p}
                  >
                    <Scrim onClick={() => closeModal()} />
                    {portalInnerTransition.map(
                      (portalInner) =>
                        portalInner.item && (
                          <PortalInner
                            key={portalInner.key}
                            style={portalInner.props}
                            fullscreen={isFullscreen}
                            maxWidth={isFullscreen ? '100%' : props.maxWidth}
                            height={isFullscreen ? '100%' : 'auto'}
                          >
                            <PortalInnerHeader
                              position={
                                props.hasStickyHeader ? 'absolute' : 'relative'
                              }
                            >
                              <Flex flex="none" minWidth="56px" />
                              <Flex justifyContent="center">
                                {props.modalTitle && (
                                  <Text fontSize="4" fontWeight="bold">
                                    {props.modalTitle}
                                  </Text>
                                )}
                              </Flex>
                              <Flex
                                flex="none"
                                justifyContent="flex-end"
                                px="1"
                                minWidth="56px"
                              >
                                <Button
                                  variant="icon"
                                  bg="surface"
                                  onClick={() => closeModal()}
                                  icon={<X />}
                                  text="Close"
                                />
                              </Flex>
                            </PortalInnerHeader>
                            <Measure
                              bounds
                              onResize={(rect) => {
                                setContentHeight(rect.bounds!.height + 270);
                              }}
                            >
                              {({ measureRef }) => (
                                <ScrollView p={2}>
                                  <div ref={measureRef}>
                                    {React.Children.toArray(childrenWithProps)}
                                  </div>
                                </ScrollView>
                              )}
                            </Measure>
                          </PortalInner>
                        ),
                    )}
                  </Portal>
                ),
            )}
          </React.Fragment>,
          WRAPPER,
        )}
      </ErrorBoundary>
    </React.Fragment>
  );
};

Modal.defaultProps = {
  open: false,
  p: 2,
};

export default Modal;
