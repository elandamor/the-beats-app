/**
 *
 * Asynchronously loads the component for GetArtist
 *
 */

import Loadable from '@app/utils/loadable';

export default Loadable(() => import('./index'));
