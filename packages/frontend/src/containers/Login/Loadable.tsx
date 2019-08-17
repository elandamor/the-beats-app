/**
 *
 * Asynchronously loads the component for LoginForm
 *
 */

import Loadable from '@app/utils/loadable';

export default Loadable(() => import('./index'));
