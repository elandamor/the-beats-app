import theme from '@app/theme';
import styled from 'styled-components';
import { space } from 'styled-system';

const Wrapper = styled.div`
  ${space};
  align-items: center;
  display: flex;
  height: ${theme.space[4]}px;
  position: relative;
  width: 100%;

  progress[value],
  input[type='range'] {
    appearance: none;
    outline: none;
    width: 100%;
  }

  progress[value] {
    height: 3px;
    z-index: 0;

    &::-webkit-progress-bar,
    &::-webkit-progress-value {
      border-radius: 24px;
      height: 3px;
    }

    &::-webkit-progress-bar {
      background-color: ${({ theme }) => theme.colors.background};
    }

    &::-webkit-progress-value {
      background-color: ${({ theme }) =>
        theme.isDark ? theme.colors.white : theme.colors.black};
    }
  }

  input[type='range'] {
    background-color: transparent;
    height: ${theme.space[4]}px;
    left: 0;
    position: absolute;
    top: 0;
    z-index: 1;

    &::-webkit-slider-thumb {
      appearance: none;
      background: ${({ theme }) =>
        theme.isDark ? theme.colors.white : theme.colors.black};
      display: none;
      height: ${theme.space[2]}px;
      width: ${theme.space[2]}px;
      border-radius: 48px;
      cursor: pointer;
    }

    &:hover,
    &:active {
      &::-webkit-slider-thumb {
        display: block;
      }
    }
  }
`;

export default Wrapper;
