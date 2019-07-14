import { render } from '@testing-library/react';
import { AppProvider } from '@app/contexts';

// TODO: Make customRender type-safe.
const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AppProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
