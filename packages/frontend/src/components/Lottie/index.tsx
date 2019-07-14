import React, { FC } from 'react';
import classNames from 'classnames';
import ILottie from 'react-lottie';
// Styles
import Wrapper from './styles';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('Lottie');

interface IProps {
  animationData?: object;
  autoplay?: boolean;
  className?: string;
  height?: number;
  loop?: boolean;
  size?: number;
  width?: number;
}

/**
 * @render react
 * @name Lottie component
 * @description Lottie component.
 * @example
 * <Lottie />
 */

const Lottie: FC<IProps> = ({
  animationData,
  autoplay,
  className,
  height,
  loop,
  size,
  width,
}) => {
  const defaultOptions = {
    loop,
    autoplay,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Wrapper className={classNames('', className)}>
      <ILottie
        options={defaultOptions}
        height={size || height}
        width={size || width}
      />
    </Wrapper>
  );
};

Lottie.defaultProps = {
  animationData: require('@app/assets/lottie/react-logo.json'),
  autoplay: true,
  height: 400,
  loop: true,
  width: 400,
};

export default Lottie;
