import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { FiPlusCircle } from 'react-icons/fi';
import {
  WrappedQuery,
  Album,
  Flex,
  Box,
  Button,
  Modal,
  Card,
  Inner,
} from '@app/components';
import { GET_ALBUMS } from '@app/graphql';
import { useRouter } from '@app/hooks';
import AddAlbum from '../AddAlbum';

interface IGetAlbumsProps {}

/**
 * @render react
 * @name GetAlbums component
 * @description GetAlbums component.
 * @example
 * <GetAlbums />
 */

const GetAlbums: FC<IGetAlbumsProps> = () => {
  const routeProps = useRouter();

  return (
    <Inner p={2}>
      <Helmet>
        <title>Albums</title>
        <meta
          name="description"
          content="Browse music albums on the-beats-app"
        />
      </Helmet>
      <WrappedQuery query={GET_ALBUMS}>
        {({ data, loading }) => {
          if (!loading && data.albums.edges.length < 1) {
            return (
              <Box>
                <Card title="No albums" />
                <Modal
                  trigger={
                    <Box position="absolute" right="8px" bottom="8px">
                      <Button variant="icon" icon={<FiPlusCircle />} />
                    </Box>
                  }
                  fullscreen={true}
                >
                  <AddAlbum {...routeProps} />
                </Modal>
              </Box>
            );
          }

          return data.albums.edges.map(({ node }: IAlbum) => (
            <Flex key={node.id} alignItems="center">
              <Album data={node} />
            </Flex>
          ));
        }}
      </WrappedQuery>
    </Inner>
  );
};

export default GetAlbums;
