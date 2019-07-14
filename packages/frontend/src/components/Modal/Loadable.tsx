/**
 *
 * Asynchronously loads the component for Modal
 *
 */

import Loadable from '@app/utils/loadable';

export default Loadable(() => import('./index'));
