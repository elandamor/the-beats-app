import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { StyledSystemProps } from 'styled-system';
// Styles
import Wrapper from './styles';
import Flex from '../Flex';
import Box from '../Box';
import { Text } from '@app/typography';

interface IArtistProps extends StyledSystemProps {
  data: IArtist;
}

/**
 * @render react
 * @name Artist component
 * @description Artist component.
 * @example
 * <Artist data={artist} />
 */

const Artist: FC<IArtistProps> = ({ data: artist, ...rest }) => (
  <Wrapper {...rest}>
    <Helmet title={`${artist.name}`} />
    <Flex mr="2" flex="none">
      <Box bg="cardBorderColor" size="40px" />
    </Flex>
    <Box flex="1">
      <Text>{artist.name}</Text>
    </Box>
  </Wrapper>
);

Artist.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
};

export default Artist;
