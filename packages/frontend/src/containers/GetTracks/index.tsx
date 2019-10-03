import { useQuery } from '@apollo/react-hooks';
import { Box, Card, Inner, Track } from '@app/components';
import { IRouteProps } from '@app/components/Routes';
import { OnDeckContext } from '@app/contexts/OnDeck.context';
import { PlaylistContext } from '@app/contexts/Playlist.context';
import { GET_TRACKS } from '@app/graphql';
import { makeDebugger } from '@app/utils';
import React, { FC, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';

const debug = makeDebugger('GetTracks');

interface IGetTracksProps extends RouteComponentProps {
  routes?: IRouteProps[];
}

/**
 * @render react
 * @name GetTracks component
 * @description GetTracks component.
 * @example
 * <GetTracks />
 */

const GetTracks: FC<IGetTracksProps> = () => {
  const { data, loading } = useQuery(GET_TRACKS);
  const onDeckCtx = useContext(OnDeckContext);
  const playlistCtx = useContext(PlaylistContext);

  if (!loading && data.tracks.edges.length < 1) {
    return (
      <Box>
        <Card title="No tracks" />
      </Box>
    );
  }

  const tracks = data.tracks && data.tracks.edges;

  debug({ tracks });

  return (
    <Inner py="1">
      <Helmet>
        <title>Tracks</title>
        <meta name="description" content="Browse tracks on the-beats-app" />
      </Helmet>
      {tracks &&
        tracks.map(({ node: track }: ITrack) => (
          <Track
            key={track.id}
            current={onDeckCtx.source.id === track.id}
            data={track}
            onSelect={() => playlistCtx.addToPlaylist(track)}
            hideAlbumCover={false}
            hideTrackNumber={true}
          />
        ))}
    </Inner>
  );
};

export default GetTracks;
