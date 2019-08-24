import React, { FC } from 'react';
import classNames from 'classnames';
import { WifiOff } from 'react-feather';
// Styles
import Wrapper from './styles';

interface IProps {
  className?: string;
}

/**
 * @render react
 * @name OfflineIndicator component
 * @description OfflineIndicator component.
 * @example
 * <OfflineIndicator />
 */

const OfflineIndicator: FC<IProps> = ({ className }) => (
  <Wrapper className={classNames('', className)}>
    <WifiOff />
  </Wrapper>
);

export default OfflineIndicator;
