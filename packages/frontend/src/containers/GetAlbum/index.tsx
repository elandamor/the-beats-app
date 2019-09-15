import { useQuery } from '@apollo/react-hooks';
import { Box, Image, Inner, Track } from '@app/components';
import { IRouteProps } from '@app/components/Routes';
import { GET_ALBUM } from '@app/graphql';
import { H4, H6, Text } from '@app/typography';
import { makeDebugger } from '@app/utils';
import React, { FC } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Placeholder from './placeholder';

const debug = makeDebugger('GetAlbum');

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
  const { data, loading } = useQuery(GET_ALBUM, {
    variables: {
      id: params.albumId,
    },
  });

  if (loading) {
    return <Placeholder />;
  }

  const {
    album: { artwork, name, artists, tracks },
  } = data;

  debug({ artists });

  return (
    <Inner p="0">
      <Box>
        <Box>
          <Image src={artwork && artwork.url} />
        </Box>
        <Box>
          <Box px="2">
            <H4 mt="3" mb="1">
              {name}
            </H4>
            <H6 mt="0" mb="3">
              {artists
                .map((artist: IArtist) => (
                  <Text as="span" key={artist.id}>
                    <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                  </Text>
                ))
                .reduce((prev: any, curr: any) => [prev, ', ', curr])}
            </H6>
          </Box>
          {tracks.map((track: ITrack) => (
            <Track key={track.id} data={track} />
          ))}
        </Box>
      </Box>
    </Inner>
  );
};

export default GetAlbum;
