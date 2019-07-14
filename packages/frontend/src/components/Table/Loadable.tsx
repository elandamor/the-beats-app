/**
 *
 * Asynchronously loads the component for Table
 *
 */

import Loadable from '@app/utils/loadable';

export default Loadable(() => import('./index'));
