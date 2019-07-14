/**
 *
 * Asynchronously loads the component for ScrollView
 *
 */

import Loadable from '@app/utils/loadable';

export default Loadable(() => import('./index'));
