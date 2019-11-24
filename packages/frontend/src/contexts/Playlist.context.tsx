import { makeDebugger } from '@app/utils';
import React, { FC, useContext, useState } from 'react';
import { OnDeckContext } from './OnDeck.context';

const debug = makeDebugger('PlaylistContext');

interface IState {
  playlist: ITrack[];
  addToPlaylist: (source: ITrack) => void;
}

const DEFAULT_STATE: IState = {
  playlist: [],
  addToPlaylist: () => null,
};

export const PlaylistContext = React.createContext(DEFAULT_STATE);

interface IProviderProps {
  children: React.ReactNode;
}

const Provider: FC<IProviderProps> = (props) => {
  const onDeckCtx = useContext(OnDeckContext);

  const [playlist, setPlaylist] = useState(DEFAULT_STATE.playlist);

  const addToPlaylist = (source: ITrack) => {
    if (!source) {
      return false;
    }

    const inPlaylist = Boolean(
      playlist.find((track: ITrack) => track.id === source.id),
    );

    if (!inPlaylist) {
      debug('setPlaylist');
      setPlaylist([source]);
      onDeckCtx.setOnDeck(source);
    }

    return true;
  };

  // useEffect(() => {
  //   debug('uE');
  // }, [onDeckCtx.source]);

  return (
    <PlaylistContext.Provider
      value={{
        playlist,
        addToPlaylist,
      }}
    >
      {props.children}
    </PlaylistContext.Provider>
  );
};

export default Provider;
