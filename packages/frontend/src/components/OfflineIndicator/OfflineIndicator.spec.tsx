// OfflineIndicator.spec.tsx
import * as React from 'react';
import { render } from '@app/utils/test-utils';

import OfflineIndicator from './index';

describe('<OfflineIndicator />', () => {
  it('should render an offline indicator', () => {
    render(<OfflineIndicator />);
  });
});
