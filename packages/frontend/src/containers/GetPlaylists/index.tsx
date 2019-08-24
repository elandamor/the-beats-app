import React, { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Helmet } from 'react-helmet';
import { Flex, Box, Card, Inner, Playlist } from '@app/components';
import { GET_PLAYLISTS } from '@app/graphql';

interface IGetPlaylistsProps {}

/**
 * @render react
 * @name GetPlaylists component
 * @description GetPlaylists component.
 * @example
 * <GetPlaylists />
 */

const GetPlaylists: FC<IGetPlaylistsProps> = () => {
  const { data, loading } = useQuery(GET_PLAYLISTS);

  if (!loading && data.playlists.edges.length < 1) {
    return (
      <Box>
        <Card title="No playlists" />
      </Box>
    );
  }

  return (
    <Inner p={2}>
      <Helmet>
        <title>Playlists</title>
      </Helmet>
      {data.playlists.edges.map(({ node }: IPlaylist) => (
        <Flex key={node.id} alignItems="center">
          <Playlist data={node} />
        </Flex>
      ))}
    </Inner>
  );
};

export default GetPlaylists;
