import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { StyledSystemProps } from 'styled-system';
// Styles
import Wrapper from './styles';
import Flex from '../Flex';
import Box from '../Box';
import { Text } from '@app/typography';

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
    <Helmet title={`${album.name}`} />
    <Flex mr="2" flex="none">
      <Box bg="cardBorderColor" size="40px" />
    </Flex>
    <Box flex="1">
      <Text>{album.name}</Text>
    </Box>
  </Wrapper>
);

Album.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
};

export default Album;
