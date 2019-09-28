import Flex from '@app/components/Flex';
import React, { FC, useContext } from 'react';
import { OnDeckContext } from '../../contexts/OnDeck.context';
import Button from '../Button';
import Icon from '../Icon';
// Styles
import { PlayPauseButton } from './styles';

/**
 * @render react
 * @name Controls component
 * @description Controls component.
 * @example
 * <Controls />
 */

interface IProps {
  minimal?: boolean;
  onChange: (action: string) => void;
}

const Controls: FC<IProps> = ({ minimal, onChange: handleChange }) => {
  const { isPlaying } = useContext(OnDeckContext);

  return (
    <Flex alignItems="center" justifyContent="center">
      {!minimal && (
        <Button
          className="-prev"
          onClick={() => handleChange('prev')}
          icon={<Icon icon="fastBackward" viewBox="0 0 21 13" />}
          iconSize={20}
          variant="icon"
        />
      )}
      <PlayPauseButton
        bg="blacks.3"
        borderRadius={100}
        className={`-${isPlaying ? 'pause' : 'play'}`}
        onClick={() => handleChange(isPlaying ? 'pause' : 'play')}
        icon={
          isPlaying ? (
            <Icon icon="pause" viewBox="0 0 16 18" />
          ) : (
            <Icon icon="play" viewBox="0 0 20 22" />
          )
        }
        iconSize={16}
        mx={1}
        size={48}
        variant="icon"
      />
      {!minimal && (
        <Button
          className="-next"
          onClick={() => handleChange('next')}
          icon={<Icon icon="fastForward" viewBox="0 0 21 13" />}
          iconSize={20}
          variant="icon"
        />
      )}
    </Flex>
  );
};

export default Controls;
