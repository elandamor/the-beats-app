/**
 *
 * Asynchronously loads the component for GetPlaylists
 *
 */

import Loadable from '@app/utils/loadable';

export default Loadable(() => import('./index'));
