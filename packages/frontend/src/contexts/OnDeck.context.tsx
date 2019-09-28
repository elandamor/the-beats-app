import { makeDebugger } from '@app/utils';
import React, { FC, useState } from 'react';

const debug = makeDebugger('OnDeckContext');

interface IState {
  isPlaying: boolean;
  playState: string;
  reset: () => void;
  setOnDeck: (source: ITrack) => void;
  source: ITrack;
  updatePlayState: (playState: string) => void;
}

const DEFAULT_STATE: IState = {
  isPlaying: false,
  playState: 'idle',
  reset: () => null,
  setOnDeck: () => null,
  source: { id: '-1' },
  updatePlayState: () => null,
};

export const OnDeckContext = React.createContext(DEFAULT_STATE);

interface IProviderProps {
  children: React.ReactNode;
}

const Provider: FC<IProviderProps> = (props) => {
  const [state, setState] = useState(DEFAULT_STATE);
  const [source, setSource] = useState({ id: '-1' });

  /**
   * Resets state to DEFAULT_STATE
   */
  const reset = () => {
    setState(DEFAULT_STATE);
  };

  /**
   * Updates nowPlaying (onDeck) with a source
   */
  const setOnDeck = (incomingSource: ITrack) => {
    debug(incomingSource.id === source.id);

    if (incomingSource.id === source.id) {
      return false;
    }
    debug('Setting onDeck...');
    reset();
    setSource(incomingSource);

    return true;
  };

  /**
   * Updates the playback state of nowPlaying source in UI
   */
  const updatePlayState = (playState: string) => {
    if (typeof playState !== 'string') {
      return false;
    }
    debug('Updating playState...');

    setState({
      ...state,
      isPlaying: Boolean(playState === 'playing'),
      playState,
    });

    return true;
  };

  return (
    <OnDeckContext.Provider
      value={{
        ...state,
        source,
        reset,
        setOnDeck,
        updatePlayState,
      }}
    >
      {props.children}
    </OnDeckContext.Provider>
  );
};

export default Provider;
