import { useQuery } from '@apollo/react-hooks';
import { Album, Flex, Inner, LoadingBar } from '@app/components';
import { IRouteProps } from '@app/components/Routes';
import { GET_ALBUMS } from '@app/graphql';
import { Text } from '@app/typography';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';

interface IGetAlbumsProps extends RouteComponentProps {
  routes?: IRouteProps[];
}

/**
 * @render react
 * @name GetAlbums component
 * @description GetAlbums component.
 * @example
 * <GetAlbums />
 */

const GetAlbums: FC<IGetAlbumsProps> = () => {
  const { data, error, loading } = useQuery<any>(GET_ALBUMS);

  if (error) {
    return <Text>An error has occurred</Text>;
  }

  if (loading) {
    return <LoadingBar />;
  }

  const albums = data.albums && data.albums.edges;

  return (
    <Inner p={2}>
      <Helmet>
        <title>Albums</title>
        <meta
          name="description"
          content="Browse music albums on the-beats-app"
        />
      </Helmet>
      {albums &&
        albums.map(({ node }: IAlbum) => (
          <Flex key={node.id} alignItems="center">
            <Album data={node} mb="2" />
          </Flex>
        ))}
    </Inner>
  );
};

export default GetAlbums;
