import React, { FC } from 'react';
import { StyledSystemProps } from 'styled-system';
// Styles
import Wrapper from './styles';

export interface IButtonProps extends StyledSystemProps {
  ariaLabel?: string;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconOnly?: boolean;
  iconSize?: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
  type?: 'button' | 'submit';
  // Variants
  flat?: boolean;
  outlined?: boolean;
  primary?: boolean;
  raised?: boolean;
  secondary?: boolean;
  variant?: 'flat' | 'outlined' | 'primary' | 'raised' | 'secondary' | 'text';
}

/**
 * @render react
 * @name Button component
 * @description Defines a clickable button.
 * @example
 * <Button text="Test" />
 */

const Button: FC<IButtonProps> = ({ text, ...rest }) => (
  // @ts-ignore
  <Wrapper {...rest}>
    {rest.icon && <i>{rest.icon}</i>}
    {!rest.iconOnly && <label>{text}</label>}
  </Wrapper>
);

Button.defaultProps = {
  ariaLabel: 'Button',
  bg: 'transparent',
  color: 'text',
  disabled: false,
  iconOnly: false,
  iconSize: 18,
  minWidth: 64,
  onClick: () => null,
  text: 'Button',
  type: 'button',
  variant: 'text',
};

export default Button;
