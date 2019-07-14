import React, { FC } from 'react';
import classNames from 'classnames';
import { SpaceProps } from 'styled-system';
// Styles
import Wrapper from './styles';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('HorizontalScroller');

interface IHorizontalScrollerProps extends SpaceProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * @render react
 * @name HorizontalScroller component
 * @description HorizontalScroller component.
 * @example
 * <HorizontalScroller />
 */

const HorizontalScroller: FC<IHorizontalScrollerProps> = ({
  children,
  className,
  ...rest
}) => (
  <Wrapper className={classNames('', className)} {...rest}>
    {children}
  </Wrapper>
);

export default HorizontalScroller;
