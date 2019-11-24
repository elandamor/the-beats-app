import { useQuery } from '@apollo/react-hooks';
import { LoadingBar } from '@app/components';
import { GET_PLAYLISTS } from '@app/graphql';
import { makeDebugger } from '@app/utils';
import classNames from 'classnames';
import React, { FC } from 'react';
import Wrapper from './styles';

const debug = makeDebugger('GetPlaylists');

interface IGetPlaylistsProps {
  className?: string;
}

/**
 * @render react
 * @name GetPlaylists component
 * @description GetPlaylists component.
 * @example
 * <GetPlaylists />
 */

const GetPlaylists: FC<IGetPlaylistsProps> = ({ className }) => {
  const { data, loading } = useQuery<any>(GET_PLAYLISTS);

  if (loading) {
    return <LoadingBar />;
  }

  const playlists = data.playlists && data.playlists.edges;
  debug({ playlists });

  return <Wrapper className={classNames('', className)} />;
};

export default GetPlaylists;
