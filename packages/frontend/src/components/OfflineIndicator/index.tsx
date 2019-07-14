import React, { FC } from 'react';
import classNames from 'classnames';
import { FiWifiOff } from 'react-icons/fi';
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
    <FiWifiOff />
  </Wrapper>
);

export default OfflineIndicator;
