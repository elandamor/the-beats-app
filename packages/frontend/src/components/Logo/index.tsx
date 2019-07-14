import React, { FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

export interface IProps {
  className?: string;
}

/**
 * @render react
 * @name Logo component
 * @description Logo component.
 * @example
 * <Logo />
 */

const Logo: FC<IProps> = ({ className }) => (
  <Wrapper className={classNames('c-logo', className)}>
    <div id="react">
      <div id="react-inner" />
      <div id="react-innerdot" />
    </div>
  </Wrapper>
);

export default Logo;
