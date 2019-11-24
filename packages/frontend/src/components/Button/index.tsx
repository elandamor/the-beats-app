import React, { FC } from 'react';
import { StyledSystemProps } from 'styled-system';
import LoadingBar from '../LoadingBar';
// Styles
import Wrapper from './styles';

export interface IButtonProps extends StyledSystemProps {
  ariaLabel?: string;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconSize?: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
  type?: 'button' | 'submit';
  variant?: string;
  loading?: boolean;
}

/**
 * @render react
 * @name Button component
 * @description Defines a clickable button.
 * @example
 * <Button text="Test" />
 */

const Button: FC<IButtonProps> = ({ text, loading, ...rest }) => (
  <Wrapper aria-label={rest['ariaLabel']} {...rest}>
    {loading ? (
      <LoadingBar />
    ) : (
      <React.Fragment>
        {rest.icon && <i>{rest.icon}</i>}
        {rest.variant !== 'icon' && <label>{text}</label>}
      </React.Fragment>
    )}
  </Wrapper>
);

Button.defaultProps = {
  ariaLabel: 'Button',
  bg: 'transparent',
  color: 'text',
  disabled: false,
  iconSize: 18,
  onClick: () => null,
  text: 'Button',
  type: 'button',
};

export default Button;
