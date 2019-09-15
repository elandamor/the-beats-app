import styled, { css } from 'styled-components';
import { ICardProps } from './index';
import { theme } from '@app/theme';
import H6 from '@app/typography/H6';
import Box from '../Box';

const Wrapper = styled(Box)<ICardProps>`
  border-radius: 2px;
  /* box-shadow: 0 10px 10px -6px rgba(214, 219, 230, 0.6); */
  background-color: ${({ theme }) => theme.colors.surface};
  width: 100%;

  .a-image {
    background-color: ${({ theme }) => theme.colors.cardBorderColor};
    min-height: 224px;
    width: 100%;
  }
`;

export const Content = styled.div<ICardProps>`
  ${({ contentPadding }) =>
    contentPadding &&
    css`
      padding: ${contentPadding}px;
    `}
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes[2]}px;
  color: ${({ theme }) =>
    theme.isDark ? theme.colors.whites[8] : theme.colors.blacks[8]};
  line-height: 1.5;
`;

export const Title = styled(H6)`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};

  svg {
    margin-bottom: -6px;
    margin-right: 10px;
  }
`;

export default Wrapper;
