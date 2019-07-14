import styled from 'styled-components';
import { StyledSystemProps } from 'styled-system';
import { typography } from '@app/theme/componentTypes';

/**
 * @render react
 * @name Text component
 * @description Paragraph (default)
 * @example
 *  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
 */

const Text = styled.p<StyledSystemProps>`
  ${typography};
`;

Text.defaultProps = {
  color: 'text',
};

export default Text;
