// NetworkStatusProvider.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import NetworkStatusProvider from './NetworkStatusProvider.context';

const NetworkStatusConsumer = () => <div>NetworkStatus Consumer</div>;

describe('NetworkStatusProvider', () => {
  it('should render without crashing', () => {
    render(
      <NetworkStatusProvider>
        <NetworkStatusConsumer />
      </NetworkStatusProvider>,
    );
  });
});
