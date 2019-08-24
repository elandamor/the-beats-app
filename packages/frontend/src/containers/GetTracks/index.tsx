import React, { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Track } from '@app/components';
import { GET_TRACKS } from '@app/graphql';

interface IGetTracksProps {}

/**
 * @render react
 * @name GetTracks component
 * @description GetTracks component.
 * @example
 * <GetTracks />
 */

const GetTracks: FC<IGetTracksProps> = () => {
  const { data } = useQuery(GET_TRACKS);

  return data.tracks.edges.map(({ node }: ITrack) => (
    <Track key={node.id} data={node} />
  ));
};

export default GetTracks;
