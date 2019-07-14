import styled, { css } from 'styled-components';

export interface ISpacerProps {
  spacing: number;
  vertical?: boolean;
}

/**
 * @render react
 * @name Spacer component
 * @description Spacer component.
 * @example
 *  <Spacer spacing={24} />
 */

const Spacer = styled.div<ISpacerProps>`
  ${({ spacing, vertical }) =>
    vertical
      ? css`
          width: ${spacing}px;
        `
      : css`
          height: ${spacing}px;
        `}
`;

export default Spacer;
