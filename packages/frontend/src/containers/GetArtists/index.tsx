import React, { FC } from 'react';
import { useQuery } from 'react-apollo';
import { Artist } from '@app/components';
import { GET_ARTISTS } from '@app/graphql';

interface IGetArtistsProps {}

/**
 * @render react
 * @name GetArtists component
 * @description GetArtists component.
 * @example
 * <GetArtists />
 */

const GetArtists: FC<IGetArtistsProps> = () => {
  const { data } = useQuery(GET_ARTISTS);

  return data.artists.edges.map(({ node }: IArtist) => (
    <Artist key={node.id} data={node} />
  ));
};

export default GetArtists;
