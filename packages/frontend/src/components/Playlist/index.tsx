import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { StyledSystemProps } from 'styled-system';
// Styles
import Wrapper from './styles';
import Flex from '../Flex';
import Box from '../Box';
import { Text } from '@app/typography';

interface IPlaylistProps extends StyledSystemProps {
  data: IPlaylist;
}

/**
 * @render react
 * @name Playlist component
 * @description Playlist component.
 * @example
 * <Playlist data={playlist} />
 */

const Playlist: FC<IPlaylistProps> = ({ data: playlist, ...rest }) => (
  <Wrapper {...rest}>
    <Helmet title={`${playlist.name}`} />
    <Flex mr="2" flex="none">
      <Box bg="cardBorderColor" size="80px" />
    </Flex>
    <Box flex="1">
      <Text>{playlist.name}</Text>
    </Box>
  </Wrapper>
);

Playlist.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
};

export default Playlist;
