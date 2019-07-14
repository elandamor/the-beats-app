/**
 *
 * Asynchronously loads the component for Chip
 *
 */

import React from 'react';
import { Loadable } from '../../utils';
import LoadingBar from '../LoadingBar';

export default Loadable(() => import('./index'), {
  fallback: <LoadingBar />,
});
