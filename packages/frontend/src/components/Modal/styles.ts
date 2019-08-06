import styled from 'styled-components';
import { StyledSystemProps } from 'styled-system';
import AnimatedWrapper from '../AnimatedWrapper';

const sharedStyles = {
  height: '100%',
  left: '0',
  top: '0',
};

/**
 * Portal
 */

interface IPortalProps extends StyledSystemProps {}

export const Portal = styled(AnimatedWrapper)<IPortalProps>`
  ${sharedStyles};
`;

Portal.defaultProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  width: '100%',
};

/**
 * PortalInner
 */

interface IPortalInnerProps extends IPortalProps {
  fullscreen?: boolean;
}

export const PortalInner = styled(AnimatedWrapper)<IPortalInnerProps>``;

PortalInner.defaultProps = {
  alignItems: 'stretch',
  bg: 'surface',
  flex: 'none',
  flexDirection: 'column',
  maxHeight: ['100%', '90vh'],
  maxWidth: '600px',
  minHeight: '160px',
  width: '100%',
};

/**
 * PortalInnerHeader
 */

interface IPortalInnerHeaderProps extends IPortalProps {}

export const PortalInnerHeader = styled(AnimatedWrapper)<
  IPortalInnerHeaderProps
>`
  left: 0;
  top: 0;
  z-index: 1;
`;

PortalInnerHeader.defaultProps = {
  flex: 'none',
  position: 'relative',
};

/**
 * Scrim
 */

interface IScrimProps extends IPortalProps {}

export const Scrim = styled(AnimatedWrapper)<IScrimProps>`
  ${sharedStyles};
`;

Scrim.defaultProps = {
  bg: 'blacks.5',
  position: 'absolute',
  width: '100%',
};
