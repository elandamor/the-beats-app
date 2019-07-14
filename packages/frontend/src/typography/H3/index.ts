import styled from 'styled-components';
import { StyledSystemProps } from 'styled-system';
import { typography } from '@app/theme/componentTypes';

/**
 * @render react
 * @name H3 component
 * @description Heading level 3.
 * @example
 *  <H3>Heading</H3>
 */

const H3 = styled.h3<StyledSystemProps>`
  ${typography};
`;

H3.defaultProps = {
  color: 'text',
  fontSize: [6, 7],
};

export default H3;
