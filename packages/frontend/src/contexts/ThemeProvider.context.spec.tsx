// ThemeProvider.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import ThemeProvider from './ThemeProvider.context';

const ThemeConsumer = () => <div>Theme Consumer</div>;

describe('ThemeProvider', () => {
  it('should render without crashing', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );
  });
});
