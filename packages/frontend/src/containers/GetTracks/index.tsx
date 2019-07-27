import React, { FC } from 'react';
import { WrappedQuery, Track } from '@app/components';
import { GET_TRACKS } from '@app/graphql';

interface IGetTracksProps {}

/**
 * @render react
 * @name GetTracks component
 * @description GetTracks component.
 * @example
 * <GetTracks />
 */

const GetTracks: FC<IGetTracksProps> = () => (
  <WrappedQuery query={GET_TRACKS}>
    {({ data }) =>
      data.tracks.edges.map(({ node }: ITrack) => (
        <Track key={node.id} data={node} />
      ))
    }
  </WrappedQuery>
);

export default GetTracks;
