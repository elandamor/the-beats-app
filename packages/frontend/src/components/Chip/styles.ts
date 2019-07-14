import styled, { css } from 'styled-components';
import { fontSize } from 'styled-system';
import Button from '../Button';
import theme from '../../theme';
import { IChipProps } from './index';

const Wrapper = styled.div`
  align-items: center;
  background-color: ${theme.colors.blacks[3]};
  border-radius: ${theme.space[2]}px;
  display: inline-flex;
  flex: none;
  font-size: ${theme.fontSizes[2]}px;
  font-weight: 400;
  margin-right: ${theme.space[1]}px;
  min-height: ${theme.space[4]}px;
  padding: 0 12px;

  i,
  i > svg {
    height: 18px;
    width: 18px;
  }

  ${({ showRemove }: IChipProps) =>
    showRemove &&
    css`
      padding-right: ${theme.space[0]}px;
    `}
`;

export const ChipIcon = styled.i``;

export const ChipText = styled.span`
  ${fontSize};
`;

export const ChipRemove = styled(Button)`
  --size: ${theme.space[4]}px;

  border-radius: 100%;
  height: var(--size);
  min-height: var(--size);
  min-width: var(--size);
  overflow: hidden;
  width: var(--size);
`;

export default Wrapper;
