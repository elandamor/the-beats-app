import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import theme from '../../theme';
import Flex from '../Flex';
import { ISnackbarProps } from './index';

const Wrapper = styled(Flex)<ISnackbarProps>`
  align-items: center;
  bottom: 0;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes[2]}px;
  justify-content: center;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 8;

  ${space};

  ${({ leading }) =>
    leading &&
    css`
      justify-content: flex-start;
    `}
`;

export const Surface = styled(Flex)`
  ${space};
  background-color: ${theme.colors.blacks[10]};
  border-radius: ${theme.space[1] / 2}px;
  box-shadow: 0 3px 5px -1px ${theme.colors.blacks[4]},
    0 6px 10px 0 ${theme.colors.blacks[3]},
    0 1px 18px 0 ${theme.colors.blacks[3]};
  max-width: 672px;
  min-width: ${theme.minWidths[1]}px;
`;

export const Actions = styled(Flex)`
  ${space};
`;

export default Wrapper;
