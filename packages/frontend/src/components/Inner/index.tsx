import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

export interface IInnerProps extends SpaceProps {}

/**
 * @render react
 * @name Inner component
 * @description Inner component.
 * @example
 *  <Inner />
 */

const Inner = styled.div<IInnerProps>`
  ${space};
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
`;

export default Inner;
