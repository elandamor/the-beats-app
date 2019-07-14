// Toggle.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Toggle from './index';

describe('Toggle', () => {
  it('should render without crashing', () => {
    render(<Toggle />);
  });
});
