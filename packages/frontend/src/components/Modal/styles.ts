import styled from 'styled-components';
import { animated } from 'react-spring';
import { StyledSystemProps, ColorProps } from 'styled-system';
import Box from '../Box';

const sharedStyles = {
  height: '100%',
  left: '0',
  top: '0',
};

/**
 * Portal
 */

interface IPortalProps extends StyledSystemProps {}

export const Portal = styled(animated(Box))<IPortalProps>`
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

export const PortalInner = styled(animated(Box))<IPortalInnerProps>``;

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

export const PortalInnerHeader = styled(animated(Box))<IPortalInnerHeaderProps>`
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

interface IScrimProps extends ColorProps {}

export const Scrim = styled(animated(Box))<IScrimProps>`
  ${sharedStyles};
`;

Scrim.defaultProps = {
  bg: 'blacks.5',
  position: 'absolute',
  width: '100%',
};
