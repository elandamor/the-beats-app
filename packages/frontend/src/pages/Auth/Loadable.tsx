/**
 *
 * Asynchronously loads the component for Authenticator
 *
 */

import React from 'react';
import { Loadable } from '@app/utils';
import LoadingBar from '@app/components/LoadingBar';

export default Loadable(() => import('./index'), {
  fallback: <LoadingBar />,
});
