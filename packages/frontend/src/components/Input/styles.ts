import styled from 'styled-components';
import theme from '../../theme';

export const DefaultInput = styled.input`
  background: transparent;
  border: ${theme.borders[1]} #aaaaaa;
  border-radius: ${theme.space[1] / 2}px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${theme.fontSizes[2]}px;
  padding: ${theme.space[2]}px ${theme.space[1] + theme.space[1] / 2}px;
  position: relative;
  width: 100%;
  z-index: 1;

  &:focus,
  &:hover {
    border: ${theme.borders[1]} ${theme.colors.primary};
    outline: none;
  }

  &:focus {
    font-size: ${theme.fontSizes[3]}px;
  }
`;
