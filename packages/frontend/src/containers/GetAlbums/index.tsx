import React, { FC } from 'react';
import { WrappedQuery, Album, Flex, Button } from '@app/components';
import { GET_ALBUMS, DELETE_ALBUM } from '@app/graphql';
import WrappedMutation from '@app/components/WrappedMutation';
import { FiTrash2 } from 'react-icons/fi';

interface IGetAlbumsProps {}

/**
 * @render react
 * @name GetAlbums component
 * @description GetAlbums component.
 * @example
 * <GetAlbums />
 */

const GetAlbums: FC<IGetAlbumsProps> = () => (
  <WrappedQuery query={GET_ALBUMS}>
    {({ data }) =>
      data.albums.edges.map(({ node }: IAlbum) => (
        <Flex key={node.id} alignItems="center">
          <Flex>
            <Album data={node} />
          </Flex>
          <Flex flex="none">
            <WrappedMutation
              mutation={DELETE_ALBUM}
              awaitRefetchQueries={true}
              refetchQueries={() => {
                return [{ query: GET_ALBUMS }];
              }}
              onCompleted={(data) => console.log(data)}
            >
              {(deleteAlbum) => (
                <Button
                  variant="icon"
                  icon={<FiTrash2 />}
                  onClick={async () => {
                    try {
                      await deleteAlbum({
                        variables: { id: node.id },
                      });
                    } catch (error) {
                      return error;
                    }
                  }}
                />
              )}
            </WrappedMutation>
          </Flex>
        </Flex>
      ))
    }
  </WrappedQuery>
);

export default GetAlbums;
