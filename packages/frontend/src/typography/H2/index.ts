import styled from 'styled-components';
import { StyledSystemProps } from 'styled-system';
import { typography } from '@app/theme/componentTypes';

/**
 * @render react
 * @name H2 component
 * @description Heading level 2.
 * @example
 *  <H2>Heading</H2>
 */

const H2 = styled.h2<StyledSystemProps>`
  ${typography};
`;

H2.defaultProps = {
  color: 'text',
  fontSize: [7, 8],
};

export default H2;
