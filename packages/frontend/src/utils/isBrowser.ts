import isNil from 'lodash/isNil';

const hasDocument = typeof document === 'object' && document !== null;
const hasWindow =
  typeof window === 'object' && window !== null && window.self === window;

const isBrowser: Function = () =>
  // @ts-ignore - Property 'override' does not exist on type 'Function'
  !isNil(isBrowser.override) ? isBrowser.override : hasDocument && hasWindow;

export default isBrowser;
