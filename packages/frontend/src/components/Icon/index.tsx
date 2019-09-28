import React, { FC } from 'react';
import classNames from 'classnames';

import { ICONS } from './constants';
// Styles
import Wrapper from './styles';

interface IProps {
  className?: string;
  [key: string]: any;
};

/**
 * @render react
 * @name Icon component
 * @description Icon component.
 * @example
 * <Icon />
 */

const Icon: FC<IProps> = ({
  className,
  icon,
  // tslint:disable-next-line:no-magic-numbers
  size = 24,
  viewBox = '0 0 24 24',
  ...rest
}) => (
  <Wrapper
    className={classNames('', className)}
    aria-hidden="true"
  >
    <svg
      width={`${size}`}
      height={`${size}`}
      viewBox={`${viewBox}`}
      {...rest}
    >
      <path
        d={ICONS[icon]}
      />
    </svg>
  </Wrapper>
);

export default Icon;
