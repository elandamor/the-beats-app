import styled from 'styled-components';
import { color, buttonStyle, borders, layout } from 'styled-system';
import { IButtonProps } from './index';
import theme from '../../theme';

const Wrapper = styled.button<IButtonProps>`
  align-items: center;
  background: transparent;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  font-size: ${theme.fontSizes[2]}px;
  font-weight: ${theme.fontWeights[4]};
  justify-content: center;
  letter-spacing: 0.0892857143em;
  outline: none;
  overflow: hidden;
  padding: ${theme.space[1]}px;
  position: relative;
  text-transform: uppercase;
  z-index: 1;
  ${buttonStyle};
  ${borders};
  ${color};
  ${layout};

  i {
    pointer-events: none;
    z-index: 1;
  }

  i,
  i > svg {
    height: ${({ iconSize }) => (iconSize ? iconSize : '18')}px;
    width: ${({ iconSize }) => (iconSize ? iconSize : '18')}px;
  }

  &:after,
  &:before {
    content: '';
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 0;
  }

  &:active {
    transform: scale(0.95);
  }

  &:not([disabled]) {
    &:focus {
      &:before {
        background-color: ${({ theme }) =>
          theme.isDark ? theme.colors.whites[3] : theme.colors.blacks[3]};
      }
    }

    &:hover {
      &:before {
        background-color: ${({ theme }) =>
          theme.isDark ? theme.colors.whites[2] : theme.colors.blacks[2]};
      }
    }
  }
`;

export default Wrapper;
