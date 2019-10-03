import { makeDebugger } from '@app/utils';
import React, { FC, useEffect, useState } from 'react';

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
  const [state, updateState] = useState(DEFAULT_STATE);
  const [source, setSource] = useState(DEFAULT_STATE.source);

  /**
   * Resets state to DEFAULT_STATE
   */
  const reset = () => {
    updateState(DEFAULT_STATE);
  };

  /**
   * Updates nowPlaying (onDeck) with a source
   */
  const setOnDeck = (incomingSource: ITrack) => {
    setSource(incomingSource);
  };

  /**
   * Updates the playback state of nowPlaying source in UI
   */
  const updatePlayState = (playState: string) => {
    if (typeof playState !== 'string') {
      return false;
    }

    updateState({
      ...state,
      isPlaying: Boolean(playState === 'playing'),
      playState,
    });

    return true;
  };

  useEffect(() => {
    updateState({
      ...state,
      source,
    });
  }, [source]);

  return (
    <OnDeckContext.Provider
      value={{
        ...state,
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
