import styled from 'styled-components';
import { IGridProps } from './index';
import theme from '../../theme';

const Wrapper = styled.div<IGridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-gap: ${({ gap }) => (gap ? gap : theme.space[3])}px;
`;

export default Wrapper;
