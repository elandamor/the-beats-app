import React from 'react';
import { storiesOf } from '@storybook/react';

import Snackbar from './index';
import Button from '../Button';
import theme from '../../theme';

storiesOf('Snackbar', module)
  .add('single-line message', () => <Snackbar text="Single-line message." />)
  .add('single-line message (leading)', () => (
    <Snackbar leading text="Single-line message." />
  ))
  .add('single-line message with action', () => (
    <Snackbar
      pr={1}
      py="6px"
      text="Single-line message with action."
      actions={<Button color={theme.colors.primaryLight} text="Action" />}
    />
  ))
  .add('single-line message with action (leading)', () => (
    <Snackbar
      leading
      pr={1}
      py="6px"
      text="Single-line message with action."
      actions={<Button color={theme.colors.primaryLight} text="Action" />}
    />
  ));
