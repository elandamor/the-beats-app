import React, { FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Authentication');

interface IAuthenticationProps {
  className?: string;
};

/**
 * @render react
 * @name Authentication component
 * @description Authentication component.
 * @example
 * <Authentication />
 */

const Authentication: FC<IAuthenticationProps> = ({ className }) => (
  <Wrapper className={classNames('', className)} />
);

export default Authentication;
