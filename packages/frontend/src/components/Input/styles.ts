import theme from '@app/theme';
import { layout } from '@app/theme/componentTypes';
import styled from 'styled-components';
import { StyledSystemProps } from 'styled-system';

export const DefaultInput = styled.input<StyledSystemProps>`
  ${layout}
  background: transparent;
  border: ${theme.borders[1]} #aaaaaa;
  border-radius: ${theme.space[1] / 2}px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${theme.fontSizes[2]}px;
  position: relative;
  width: 100%;
  z-index: 1;

  &:focus,
  &:hover {
    border: ${theme.borders[1]} ${theme.colors.primary};
    outline: none;
  }
`;

DefaultInput.defaultProps = {
  px: `${theme.space[1] + theme.space[1] / 2}px`,
  py: `${theme.space[2]}px`,
};
