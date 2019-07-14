import styled from 'styled-components';
import { space } from 'styled-system';
import { theme } from '@app/theme';

const Wrapper = styled.div`
  -webkit-overflow-scrolling: touch;

  display: grid;
  grid-gap: ${theme.space[2]}px;
  grid-template-columns: 0;
  grid-template-rows: minmax(${theme.minWidths[0]}px, 1fr);
  grid-auto-flow: column;
  grid-auto-columns: calc(100% - ${theme.space[6]}px);

  margin-bottom: calc(-0.25 * ${theme.space[2]}px);
  overflow-x: scroll;
  padding-bottom: calc(0.75 * ${theme.space[2]}px);
  scroll-snap-type: x proximity;

  ${space};

  &::after,
  &::before {
    content: '';
    width: ${theme.space[2]}px;
  }

  /* Hack to fix last child 'margin' glitch */
  &::after {
    width: 1px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Wrapper;
