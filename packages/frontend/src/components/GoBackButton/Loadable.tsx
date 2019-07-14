/**
 *
 * Asynchronously loads the component for GoBackButton
 *
 */

import React from 'react';
import { Loadable } from '@app/utils';
import LoadingBar from '../LoadingBar';

export default Loadable(() => import('./index'), {
  fallback: <LoadingBar />,
});
