import React, { FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('GetArtist');

interface IGetArtistProps {
  className?: string;
};

/**
 * @render react
 * @name GetArtist component
 * @description GetArtist component.
 * @example
 * <GetArtist />
 */

const GetArtist: FC<IGetArtistProps> = ({ className }) => (
  <Wrapper className={classNames('', className)} />
);

export default GetArtist;
