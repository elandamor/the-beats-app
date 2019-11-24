/**
 *
 * Asynchronously loads the component for Header
 *
 */

import { Loadable } from '../../utils';

export default Loadable(() => import('./index'));
