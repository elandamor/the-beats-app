import React, { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';
import { PlusCircle } from 'react-feather';
import {
  Album,
  Flex,
  Box,
  Button,
  Modal,
  Card,
  Inner,
  Routes,
} from '@app/components';
import { GET_ALBUMS } from '@app/graphql';
import { useRouter } from '@app/hooks';
import AddAlbum from '../AddAlbum';
import { IRouteProps } from '@app/components/Routes';

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

const GetAlbums: FC<IGetAlbumsProps> = (props) => {
  const routeProps = useRouter();
  const { data, loading } = useQuery(GET_ALBUMS);
  const { location, match, routes } = props;
  const hasSubRoutes = routes && routes.length > 0;

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

  return (
    <Inner p={2}>
      {match.isExact && (
        <React.Fragment>
          <Helmet>
            <title>Albums</title>
            <meta
              name="description"
              content="Browse music albums on the-beats-app"
            />
          </Helmet>
          {data.albums.edges.map(({ node }: IAlbum) => (
            <Flex key={node.id} alignItems="center">
              <Album data={node} mb="2" />
            </Flex>
          ))}
        </React.Fragment>
      )}

      {hasSubRoutes && (
        <Routes location={location} routes={routes} subRoutes={true} />
      )}
    </Inner>
  );
};

export default GetAlbums;
