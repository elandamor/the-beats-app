/**
 *
 * Asynchronously loads the component for Totaliser
 *
 */

import Loadable from '@app/utils/loadable';

export default Loadable(() => import('./index'));
