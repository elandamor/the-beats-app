/**
 *
 * Asynchronously loads the component for Album
 *
 */

import Loadable from '@app/utils/loadable';

export default Loadable(() => import('./index'));
