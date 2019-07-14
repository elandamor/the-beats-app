import styled from 'styled-components';
import { color } from 'styled-system';
import Flex from '../Flex';

const Wrapper = styled(Flex)`
  -webkit-overflow-scrolling: touch;
  overflow: auto;

  ${color};
`;

export default Wrapper;
