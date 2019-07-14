import styled, { css } from 'styled-components';
import { color, space } from 'styled-system';
import { IButtonProps } from './index';
import theme from '../../theme';

const Wrapper = styled.button<IButtonProps>`
  ${color};
  ${space};
  align-items: center;
  background: transparent;
  border: none;
  border-radius: ${theme.space[1] / 2}px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  display: flex;
  font-size: ${theme.fontSizes[2]}px;
  font-weight: ${theme.fontWeights[4]};
  justify-content: center;
  letter-spacing: .0892857143em;
  min-height: ${theme.space[4] + (theme.space[1] / 2)}px;
  min-width: ${theme.space[8]}px;
  opacity: ${({ disabled, raised }) => raised && disabled ? '0.38' : '1'};
  outline: none;
  padding: ${theme.space[1]}px;
  position: relative;
  text-transform: uppercase;
  z-index: 1;

  i {
    pointer-events: none;
    z-index: 1;
  }

  i, i > svg {
    height: ${({ iconSize }) => iconSize ? iconSize : '18'}px;
    width: ${({ iconSize }) => iconSize ? iconSize : '18'}px;
  }

  label {
    pointer-events: none;
    z-index: 1;

    ${({ icon, iconPosition }) =>
      icon && iconPosition !== 'right' && css`
        margin-left: ${theme.space[1]}px;
      `
    };

    ${({ icon, iconPosition }) =>
      icon && iconPosition === 'right' && css`
        margin-right: ${theme.space[1]}px;
      `
    };
  }

  &:after, &:before {
    content: '';
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 0;
  }

  &:not([disabled]) {
    &:focus {
      &:before {
        ${({ raised }) => !raised && css`
          background-color: ${({ theme }) => theme.isDark
            ? theme.colors.whites[3] : theme.colors.blacks[3]};
        `};
      }

      &:after {
        ${({ raised }) => raised && css`
          background-color: ${({ theme }) => theme.isDark
            ? theme.colors.blacks[3] : theme.colors.whites[3]};
        `};
      }
    }

    &:hover {
      &:before {
        ${({ raised }) => !raised && css`
          background-color: ${({ theme }) => theme.isDark
            ? theme.colors.whites[2] : theme.colors.blacks[2]};
        `};
      }

      &:after {
        ${({ raised }) => raised && css`
          background-color: ${({ theme }) => theme.isDark
            ? theme.colors.whites[2] : theme.colors.blacks[2]};
        `};
      }
    }
  }

  ${({ outlined }) => outlined && css`
    border: ${theme.borders[1]} ${({ theme }) => theme.isDark
      ? theme.colors.whites[1] : theme.colors.blacks[1]};
    padding: ${theme.space[1]}px ${theme.space[2]}px;
  `};

  ${({ backgroundColor, raised, textColor }) => raised && css`
    background-color: ${backgroundColor || theme.colors.primary};
    box-shadow:
      0 3px 1px -2px ${theme.colors.blacks[4]},
      0 2px 2px 0 ${theme.colors.blacks[3]},
      0 1px 5px 0 ${theme.colors.blacks[3]};
    color: ${textColor || theme.colors.white};
    padding: ${theme.space[1]}px ${theme.space[2]}px;
  `};

  ${({ icon, iconPosition }) =>
    icon && iconPosition !== 'right'  && css`
      padding-left: ${theme.space[1] / 2}px;
    `
  };

  ${({ icon, iconPosition }) =>
    icon && iconPosition === 'right'  && css`
      padding-right: ${theme.space[1] / 2}px;
    `
  };

  ${({ icon, iconPosition, outlined, raised }) =>
    icon && iconPosition !== 'right' && (outlined || raised) && css`
      padding-left: ${theme.space[1] + (theme.space[1] / 2)}px;
    `
  };

  ${({ icon, iconPosition, outlined, raised }) =>
    icon && iconPosition === 'right' && (outlined || raised) && css`
      padding-right: ${theme.space[1] + (theme.space[1] / 2)}px;
    `
  };

  ${({ iconOnly }) => iconOnly && css`
      min-width: 40px;
      padding: 0;
    `
  };
`;

export default Wrapper;
