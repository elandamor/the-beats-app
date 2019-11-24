import React, { FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('GetPlaylist');

interface IGetPlaylistProps {
  className?: string;
};

/**
 * @render react
 * @name GetPlaylist component
 * @description GetPlaylist component.
 * @example
 * <GetPlaylist />
 */

const GetPlaylist: FC<IGetPlaylistProps> = ({ className }) => (
  <Wrapper className={classNames('', className)} />
);

export default GetPlaylist;
