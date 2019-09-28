import React, { ChangeEvent, FC } from 'react';
// Styles
import Wrapper from './styles';

/**
 * @render react
 * @name VolumeBar component
 * @description VolumeBar component.
 * @example
 * <VolumeBar />
 */

interface IProps {
  className?: string;
  onChange?: (event:  ChangeEvent<HTMLInputElement>) => void;
  volume: number;
  volumeMax?: number;
};

const defaultVolumeMax = 10;
const defaultVolume = 10;

const VolumeBar: FC<IProps> = ({
  volume = defaultVolume,
  volumeMax = defaultVolumeMax,
  onChange: handleChange
}) => (
  <Wrapper>
    <progress max={volumeMax} value={volume} />
    <input
      type="range"
      id="volume"
      name="volume"
      min="0"
      max={volumeMax}
      // @ts-ignore
      defaultValue={volume}
      onChange={handleChange}
    />
  </Wrapper>
);

VolumeBar.defaultProps = {
  onChange: () => null,
};

export default VolumeBar;
