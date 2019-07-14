import styled from 'styled-components';
import { StyledSystemProps } from 'styled-system';
import { typography } from '@app/theme/componentTypes';

/**
 * @render react
 * @name H1 component
 * @description Heading level 1.
 * @example
 *  <H1>Heading</H1>
 */

const H1 = styled.h1<StyledSystemProps>`
  ${typography};
`;

H1.defaultProps = {
  color: 'text',
  fontSize: [8, 9],
};

export default H1;
