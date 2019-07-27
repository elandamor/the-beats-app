import styled from 'styled-components';
import Box from '../Box';
import theme from '../../theme';

const Wrapper = styled(Box)`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 2px;

  header {
    align-items: center;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: ${theme.space[3]}px;
  }

  section {
    font-size: ${theme.fontSizes[0]};
    margin-top: -${theme.space[2]}px;
    padding: 0 ${theme.space[3]}px ${theme.space[3]}px;
  }

  &.-open {
    header > .c-icon {
      transform: rotate(180deg);
      transform-origin: 50% 50%;
    }
  }
`;

export default Wrapper;
