import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { StyledSystemProps } from 'styled-system';
// Styles
import Wrapper from './styles';
import Flex from '../Flex';
import Box from '../Box';
import { Text } from '@app/typography';

interface ITrackProps extends StyledSystemProps {
  data: ITrack;
}

/**
 * @render react
 * @name Track component
 * @description Track component.
 * @example
 * <Track data={track} />
 */

const Track: FC<ITrackProps> = ({ data: track, ...rest }) => (
  <Wrapper {...rest}>
    <Helmet title={`${track.name}`} />
    <Flex mr="2" flex="none">
      <Box bg="cardBorderColor" size="40px" />
    </Flex>
    <Box flex="1">
      <Text>{track.name}</Text>
    </Box>
  </Wrapper>
);

Track.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
};

export default Track;
