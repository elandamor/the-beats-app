/**
 *
 * Asynchronously loads the component for HorizontalScroller
 *
 */

import Loadable from '@app/utils/loadable';

export default Loadable(() => import('./index'));
