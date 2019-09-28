import React, { FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper, { Bar1, Bar2 } from './styles';

/**
 * @render react
 * @name Equalizer component
 * @description Equalizer component.
 * @example
 * <Equalizer />
 */

interface IProps {
  className?: string;
  loading?: boolean;
  pause?: boolean;
}

const Equalizer: FC<IProps> = ({ className, pause }) => (
  <Wrapper
    className={classNames('c-equalizer', className, { '-paused': pause } )}
  >
    <Bar1 />
    <Bar2 />
  </Wrapper>
);

export default Equalizer;
