/**
 *
 * Asynchronously loads the component for Authentication
 *
 */

import Loadable from '@app/utils/loadable';

export default Loadable(() => import('./index'));
