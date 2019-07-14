import React, { FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

export interface IGridProps {
  children: React.ReactNode;
  className?: string;
  columns: number;
  gap?: number;
}

/**
 * @render react
 * @name Grid component
 * @description Grid component.
 * @example
 * <Grid
 *  columns={2}
 *  gap={24}
 * >
 *  <Component />
 *  <Component />
 * </Grid>
 */

const Grid: FC<IGridProps> = ({ children, className, columns, gap }) => (
  <Wrapper
    className={classNames('c-grid', className)}
    columns={columns}
    gap={gap}
  >
    {children}
  </Wrapper>
);

export default Grid;
