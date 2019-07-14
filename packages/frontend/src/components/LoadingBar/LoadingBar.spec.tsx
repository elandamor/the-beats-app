// LoadingBar.spec.tsx
import * as React from 'react';
import { render } from '@app/utils/test-utils';

import LoadingBar from './index';

describe('LoadingBar', () => {
  it('should render loading bar (loading)', () => {
    render(<LoadingBar />);
  });
});
