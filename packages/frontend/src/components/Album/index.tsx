import { H6 } from '@app/typography';
import React, { FC } from 'react';
import { MoreHorizontal } from 'react-feather';
import { Link } from 'react-router-dom';
import { StyledSystemProps } from 'styled-system';
import Button from '../Button';
import Card from '../Card';
import Flex from '../Flex';
// Styles
import Wrapper from './styles';

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
  return (
    <Wrapper {...rest}>
      <Card contentPadding={0}>
        <Flex alignItems="center">
          <Flex flex="1" px="2" py="1">
            <Link to={`/dashboard/albums/${album.id}`}>
              <H6 m="0">{album.name}</H6>
            </Link>
          </Flex>
          <Flex flex="none" p="1">
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
