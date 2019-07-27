import React, { FC } from 'react';
import { WrappedQuery, Artist } from '@app/components';
import { GET_ARTISTS } from '@app/graphql';

interface IGetArtistsProps {}

/**
 * @render react
 * @name GetArtists component
 * @description GetArtists component.
 * @example
 * <GetArtists />
 */

const GetArtists: FC<IGetArtistsProps> = () => (
  <WrappedQuery query={GET_ARTISTS}>
    {({ data }) =>
      data.artists.edges.map(({ node }: IArtist) => (
        <Artist key={node.id} data={node} />
      ))
    }
  </WrappedQuery>
);

export default GetArtists;
