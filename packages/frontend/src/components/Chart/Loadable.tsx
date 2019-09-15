/**
 *
 * Asynchronously loads the component for Chart
 *
 */

import Loadable from '@app/utils/loadable';

export default Loadable(() => import('./index'));
