import React, { FC } from 'react';
import { StyledSystemProps } from 'styled-system';
import { useQuery } from '@apollo/react-hooks';
// Styles
import Wrapper from './styles';
import Card from '../Card';
import { GET_PLAYLISTS } from '@app/graphql';
import { Plus, MoreHorizontal } from 'react-feather';
import Button from '../Button';
import Flex from '../Flex';
import { H6 } from '@app/typography';
import Modal from '../Modal';
import Box from '../Box';
import Playlist from '../Playlist';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Album');

interface IAlbumProps extends StyledSystemProps {
  data: IAlbum;
}

/**
 * @render react
 * @name Album component
 * @description Album component.
 * @example
 * <Album data={album} />
 */

const Album: FC<IAlbumProps> = ({ data: album, ...rest }) => {
  const { data, loading: loadingPlaylists } = useQuery(GET_PLAYLISTS);

  return (
    <Wrapper {...rest}>
      <Card image="../" contentPadding={0}>
        <Flex alignItems="center">
          <Flex flex="1" px="2" py="1">
            <H6 m="0">{album.name}</H6>
          </Flex>
          <Flex flex="none" p="1">
            <Modal
              fullscreen={true}
              trigger={<Button variant="icon" icon={<Plus />} />}
              modalTitle="Add to a Playlist"
            >
              {!loadingPlaylists && data.playlists.edges.length < 1 ? (
                <Box>
                  <Card title="No playlists" />
                </Box>
              ) : (
                data.playlists.edges.map(({ node }: IPlaylist) => (
                  <Flex key={node.id} alignItems="center">
                    <Playlist data={node} />
                  </Flex>
                ))
              )}
            </Modal>
            <Button variant="icon" icon={<MoreHorizontal />} />
          </Flex>
        </Flex>
      </Card>
    </Wrapper>
  );
};

Album.defaultProps = {
  alignItems: 'center',
};

export default Album;

{
  /* <WrappedMutation
  mutation={DELETE_ALBUM}
  awaitRefetchQueries={true}
  refetchQueries={() => {
    return [{ query: GET_ALBUMS }];
  }}
>
  {(deleteAlbum) => (
    <Button
      variant="icon"
      icon={<FiTrash2 />}
      onClick={async () => {
        try {
          await deleteAlbum({
            variables: { id: album.id },
          });
        } catch (error) {
          return error;
        }
      }}
    />
  )}
</WrappedMutation>; */
}
