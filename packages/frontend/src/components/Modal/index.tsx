import React, { FC, useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';
import { useTransition } from 'react-spring';
import { StyledSystemProps } from 'styled-system';
import Measure from 'react-measure';
import noScroll from 'no-scroll';
// Styles
import { Scrim, Portal, PortalInner, PortalInnerHeader } from './styles';

import Button from '../Button';
import ErrorBoundary from '../ErrorBoundary';
import ScrollView from '../ScrollView';

import { useWindowSize } from '@app/hooks';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Modal');

const portalContainer = document.getElementById('portals') || document.body;

interface IModalProps extends StyledSystemProps {
  children?: React.ReactNode;
  className?: string;
  closeOnDocumentClick?: boolean;
  closeOnEscape?: boolean;
  defaultOpen?: boolean;
  fullscreen?: boolean;
  hasStickyHeader?: boolean;
  modalTitle?: string;
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
  trigger: React.ReactElement;
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
  const { children, defaultOpen } = props;

  const { height: windowHeight } = useWindowSize();

  const [contentHeight, setContentHeight] = useState<number>(-1);
  const [isFullscreen, setFullscreen] = useState(!!props.fullscreen);
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const WRAPPER = useMemo(() => document.createElement('div'), []);
  WRAPPER.className = 'c-portal';
  WRAPPER.setAttribute('role', 'dialog');

  const portalTransition = useTransition(isOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 195 },
  });

  const portalInnerTransition = useTransition(isOpen, null, {
    from: { opacity: 0, transform: 'scale(0.8)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.8)' },
  });

  /**
   * Close modal
   */
  const _close = () => {
    noScroll.off();
    setIsOpen(false);
    props.onClose && props.onClose();
  };

  /**
   * Open modal
   */
  const _open = () => {
    noScroll.on();
    setIsOpen(true);
    props.onOpen && props.onOpen();
  };

  const TRIGGER = props.trigger
    ? React.cloneElement(props.trigger, { onClick: _open })
    : null;

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { closeModal: _close });
    }

    return child;
  });

  useEffect(() => {
    if (defaultOpen) {
      noScroll.on();
    }
  }, []);

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
  }, [contentHeight]);

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
                    <Scrim onClick={() => _close()} />
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
                              p={2}
                              flexDirection="row"
                              justifyContent="flex-end"
                              position={
                                props.hasStickyHeader ? 'absolute' : 'relative'
                              }
                            >
                              <Button
                                variant="icon"
                                bg="surface"
                                onClick={() => _close()}
                                icon={<FiX />}
                                text="Close"
                              />
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
  defaultOpen: false,
  p: 2,
};

export default Modal;
