import React, { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';
import { PlusCircle } from 'react-feather';
import { Album, Flex, Box, Button, Modal, Card, Inner } from '@app/components';
import { GET_ALBUMS } from '@app/graphql';
import { useRouter } from '@app/hooks';
import AddAlbum from '../AddAlbum';
import { IRouteProps } from '@app/components/Routes';

import { makeDebugger } from '@app/utils';
const debug = makeDebugger('GetAlbums');

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
  const routeProps = useRouter();
  const { data, loading } = useQuery(GET_ALBUMS);

  if (!loading && data.albums.edges.length < 1) {
    return (
      <Box>
        <Card title="No albums" />
        <Modal
          trigger={
            <Box position="absolute" right="8px" bottom="8px">
              <Button variant="icon" icon={<PlusCircle />} />
            </Box>
          }
          fullscreen={true}
        >
          <AddAlbum {...routeProps} />
        </Modal>
      </Box>
    );
  }

  const albums = data.albums && data.albums.edges;

  debug({ albums });

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
