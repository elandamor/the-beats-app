import { useQuery } from '@apollo/react-hooks';
import { LoadingBar } from '@app/components';
import { GET_ARTISTS } from '@app/graphql';
import { makeDebugger } from '@app/utils';
import classNames from 'classnames';
import React, { FC } from 'react';
// Styles
import Wrapper from './styles';

const debug = makeDebugger('GetArtists');

interface IGetArtistsProps {
  className?: string;
}

/**
 * @render react
 * @name GetArtists component
 * @description GetArtists component.
 * @example
 * <GetArtists />
 */

const GetArtists: FC<IGetArtistsProps> = ({ className }) => {
  const { data, loading } = useQuery<any>(GET_ARTISTS);

  if (loading) {
    return <LoadingBar />;
  }

  const artists = data.artists && data.artists.edges;
  debug({ artists });

  return <Wrapper className={classNames('', className)} />;
};

export default GetArtists;
