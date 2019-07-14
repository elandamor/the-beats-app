import React, { FC, useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'react-feather';
import { useTransition } from 'react-spring';
import { StyledSystemProps } from 'styled-system';
// Styles
import { Scrim, Portal, PortalInner, PortalInnerHeader } from './styles';

import Button from '../Button';
import ErrorBoundary from '../ErrorBoundary';

import { makeDebugger } from '@app/utils';
const debug = makeDebugger('Modal');

const portalContainer = document.getElementById('portals');

interface IModalProps extends StyledSystemProps {
  children?: React.ReactNode;
  className?: string;
  closeOnDocumentClick?: boolean;
  closeOnEscape?: boolean;
  defaultOpen?: boolean;
  fullscreen?: boolean;
  modalTitle?: string;
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
  trigger: React.ReactNode;
};

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

  const [isOpen, setIsOpen] = useState(defaultOpen);

  const WRAPPER = useMemo(() => (document.createElement('div')), []);
  WRAPPER.className = "c-portal";
  WRAPPER.setAttribute('role', 'dialog');

  const portalTransition = useTransition(isOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 195 }
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
    setIsOpen(false);
    props.onClose && props.onClose();
  }

  /**
   * Open modal
   */
  const _open = () => {
    setIsOpen(true);
    props.onOpen && props.onOpen();
  }

  const TRIGGER = props.trigger
    ? React.cloneElement(props.trigger, { onClick: _open })
    : null;

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child);
    }

    return child;
  });

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

  return (
    <React.Fragment>
      {TRIGGER}
      <ErrorBoundary>
        {
          createPortal(
            <React.Fragment>
              {
                portalTransition.map((portal) => portal.item && (
                  <Portal
                    key={portal.key}
                    style={portal.props}
                    justifyContent={props.justifyContent}
                    p={props.p}
                  >
                    <Scrim onClick={() => _close()} />
                    {
                      portalInnerTransition.map((portalInner) => portalInner.item && (
                        <PortalInner
                          key={portalInner.key}
                          style={portalInner.props}
                          fullscreen={props.fullscreen}
                          maxWidth={props.maxWidth}
                        >
                          <PortalInnerHeader
                            justifyContent="flex-end"
                            p={2}
                            flex="none"
                            fixed={false}
                          >
                            <Button
                              bg="blacks.2"
                              borderRadius="100%"
                              onClick={() => _close()}
                              icon={<X />}
                              iconOnly={true}
                              minWidth={40}
                              text="Close"
                              size="40px"
                            />
                          </PortalInnerHeader>
                          {React.Children.toArray(childrenWithProps)}
                        </PortalInner>
                      ))
                    }
                  </Portal>
                ))
              }
            </React.Fragment>,
            WRAPPER
          )
        }
      </ErrorBoundary>
    </React.Fragment>
  );
};

Modal.defaultProps = {
  defaultOpen: false,
}

export default Modal;
