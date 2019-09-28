import React, { ChangeEvent, FC } from 'react';
import { SpaceProps } from 'styled-system';
// Styles
import Wrapper from './styles';

/**
 * @render react
 * @name ProgressBar component
 * @description ProgressBar component.
 * @example
 * <ProgressBar progress={number} />
 */

interface IProgressBarProps extends SpaceProps {
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  progress: number;
  progressMax?: number;
};

const ProgressBar: FC<IProgressBarProps> = ({
  progress,
  progressMax,
  onChange: handleChange,
  ...rest
}) => (
  <Wrapper {...rest}>
    <progress max="100" value={progress} />
    <input
      type="range"
      id="progress"
      name="progress"
      min="0"
      max={progressMax}
      value={progress}
      onChange={handleChange}
    />
  </Wrapper>
);

ProgressBar.defaultProps = {
  onChange: () => null,
  progressMax: 100,
};

export default ProgressBar;
