import styled, { css } from 'styled-components';
import { fontSize, FontSizeProps } from 'styled-system';
import Flex from '../Flex';

interface ILabelProps extends FontSizeProps {
  sronly?: boolean;
}

/**
 * @render react
 * @name Label component
 * @description Label component.
 * @example
 *  <Label>{label}</Label>
 */

const Label = styled(Flex)<ILabelProps>`
  ${fontSize};

  ${({ sronly }) =>
    sronly &&
    css`
      height: 0;
      opacity: 0;
      position: absolute;
    `}
`;

Label.defaultProps = {
  sronly: false,
};

export default Label;
