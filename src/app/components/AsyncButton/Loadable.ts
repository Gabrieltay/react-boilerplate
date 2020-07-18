/**
 *
 * Asynchronously loads the component for AsyncButton
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AsyncButton = lazyLoad(
  () => import('./index'),
  module => module.AsyncButton,
);
