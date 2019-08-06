import React, { FC } from 'react';
import { StyledSystemProps } from 'styled-system';
// Styles
import Wrapper from './styles';
import Card from '../Card';
import { DELETE_ALBUM, GET_ALBUMS } from '@app/graphql';
import { FiTrash2 } from 'react-icons/fi';
import WrappedMutation from '../WrappedMutation';
import Button from '../Button';
import Box from '../Box';

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

const Album: FC<IAlbumProps> = ({ data: album, ...rest }) => (
  <Wrapper {...rest}>
    <Card image="../" title={album.name} />
    <Box position="absolute" right="8px" bottom="8px">
      <WrappedMutation
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
      </WrappedMutation>
    </Box>
  </Wrapper>
);

Album.defaultProps = {
  alignItems: 'center',
};

export default Album;
