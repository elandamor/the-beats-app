import styled, { keyframes } from 'styled-components';
import { height, space, width, StyledSystemProps } from 'styled-system';
import Box from '../Box';

interface IWrapperProps extends StyledSystemProps {
  aspect?: string;
  isCached?: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

const Wrapper = styled(Box)<IWrapperProps>`
  background-color: ${({ theme }) => theme.colors.cardBorderColor};
  overflow: hidden;
  padding-bottom: ${({ aspect }) => `calc(100% / (${aspect}))`};
  position: relative;

  ${height};
  ${space};
  ${width};

  img {
    left: 0;
    position: absolute;
    top: 0;
    visibility: hidden;
    width: 100%;
  }

  .lazy-image-loaded {
    animation-duration: ${({ isCached }) => (isCached ? '0.3s' : '3s')};
    animation-name: ${fadeIn};
    visibility: visible;
  }
`;

Wrapper.defaultProps = {
  height: 0,
};

export default Wrapper;
