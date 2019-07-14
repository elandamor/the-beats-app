import React, { FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('Checkbox');

interface ICheckboxProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLElement>) => void;
}

/**
 * @render react
 * @name Checkbox component
 * @description Checkbox component.
 * @example
 * <Checkbox />
 */

const Checkbox: FC<ICheckboxProps> = ({ className }) => (
  <Wrapper className={classNames('', className)} />
);

export default Checkbox;
