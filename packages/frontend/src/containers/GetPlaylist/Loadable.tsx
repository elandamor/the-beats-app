/**
 *
 * Asynchronously loads the component for GetPlaylist
 *
 */

import Loadable from '@app/utils/loadable';

export default Loadable(() => import('./index'));
