import styled from 'styled-components';
import { compose, border, boxShadow } from 'styled-system';

import { positioning, typography } from '@app/theme/componentTypes';

import Flex, { IFlexProps } from '../Flex';

export interface IBoxProps extends IFlexProps {}

/**
 * @render react
 * @name Box component
 * @description Box component.
 * @example
 * <Box />
 */

export const BoxStyles = compose(
  border,
  boxShadow,
  positioning,
  typography,
);

const Box = styled(Flex)<IBoxProps>`
  ${BoxStyles};

  box-sizing: border-box;
`;

Box.defaultProps = {
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
};

export default Box;
