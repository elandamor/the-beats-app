/**
 *
 * Asynchronously loads the component for GetArtists
 *
 */

import Loadable from '@app/utils/loadable';

export default Loadable(() => import('./index'));
