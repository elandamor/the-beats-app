import React, { FC } from 'react';
import { StyledSystemProps } from 'styled-system';
// Styles
import Wrapper, { Actions, Surface } from './styles';
import Label from '../Label';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('Snackbar');

export interface ISnackbarProps extends StyledSystemProps {
  actions?: React.ReactNode;
  leading?: boolean;
  text?: string;
}

/**
 * @render react
 * @name Snackbar component
 * @description Snackbar component.
 * @example
 * <Snackbar text="Single-line message." />
 */

const Snackbar: FC<ISnackbarProps> = ({ leading, m, text, ...rest }) => (
  <Wrapper m={m} leading={leading}>
    <Surface size={0}>
      <Label role="status" aria-live="polite">
        {text}
      </Label>
      <Actions ml={1} size={0}>
        {rest.actions && rest.actions}
      </Actions>
    </Surface>
  </Wrapper>
);

Snackbar.defaultProps = {
  alignItems: 'center',
  justifyContent: 'flex-start',
  leading: false,
  m: 1,
  p: 2,
};

export default Snackbar;
