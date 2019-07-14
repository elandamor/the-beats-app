/**
 *
 * Asynchronously loads the component for PrivateRoute
 *
 */

import Loadable from '@app/utils/loadable';

export default Loadable(() => import('./index'));
