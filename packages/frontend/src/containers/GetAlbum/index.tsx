import { useQuery } from '@apollo/react-hooks';
import { Box, Inner, Track } from '@app/components';
import { IRouteProps } from '@app/components/Routes';
import { OnDeckContext } from '@app/contexts/OnDeck.context';
import { PlaylistContext } from '@app/contexts/Playlist.context';
import { GET_ALBUM } from '@app/graphql';
import { H4 } from '@app/typography';
import React, { FC, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Placeholder from './placeholder';

// const debug = makeDebugger('GetAlbum');

interface MatchParams {
  albumId: string;
}

interface IGetAlbumProps extends RouteComponentProps<MatchParams> {
  routes?: IRouteProps[];
}

/**
 * @render react
 * @name GetAlbum component
 * @description GetAlbum component.
 * @example
 * <GetAlbum />
 */

const GetAlbum: FC<IGetAlbumProps> = ({ match: { params } }) => {
  const onDeckCtx = useContext(OnDeckContext);
  const playlistCtx = useContext(PlaylistContext);

  const { data, loading } = useQuery(GET_ALBUM, {
    variables: {
      id: params.albumId,
    },
  });

  if (loading) {
    return <Placeholder />;
  }

  const {
    album: { artwork, name, tracks },
  } = data;

  return (
    <Inner p="0">
      <Box>
        <Box>
          <Box px="2">
            <H4 mt="3" mb="1">
              {name}
            </H4>
          </Box>
          {tracks.map((track: ITrack) => (
            <Track
              key={track.id}
              current={onDeckCtx.source.id === track.id}
              data={track}
              onSelect={() =>
                playlistCtx.addToPlaylist(
                  Object.assign({}, track, {
                    album: {
                      artwork: { ...artwork },
                    },
                  }),
                )
              }
              playState={onDeckCtx.playState}
            />
          ))}
        </Box>
      </Box>
    </Inner>
  );
};

export default GetAlbum;
