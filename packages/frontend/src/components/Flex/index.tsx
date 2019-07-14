import styled from 'styled-components';
import { compose, StyledSystemProps } from 'styled-system';
import { flexbox, layout } from '@app/theme/componentTypes';

export interface IFlexProps extends StyledSystemProps {}

/**
 * @render react
 * @name Flex component
 * @description Flex component.
 * @example
 *  <Flex>
 *    <Component />
 *  </Flex>
 */

export const FlexStyles = compose(
  layout,
  flexbox,
);

const Flex = styled.div<IFlexProps>`
  ${FlexStyles};
`;

Flex.defaultProps = {
  display: 'flex',
  flex: 1,
};

export default Flex;
