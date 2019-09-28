import { makeDebugger } from '@app/utils';
import React, { FC, useContext, useEffect, useState } from 'react';
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
  const [source, setSource] = useState({ id: '-1' });

  const addToPlaylist = (source: ITrack) => {
    if (!source) {
      return false;
    }
    setSource(source);

    const inPlaylist = Boolean(
      playlist.find((track: ITrack) => track.id === source.id),
    );

    if (!inPlaylist) {
      debug('Adding to playlist...', source);
      setPlaylist([...playlist, source]);
    }

    return true;
  };

  useEffect(() => {
    debug({ playlist });
    onDeckCtx.setOnDeck(source);
  }, [playlist]);

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
