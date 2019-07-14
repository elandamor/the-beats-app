// Chip.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Chip from './index';

describe('Chip', () => {
  it('should render without crashing', () => {
    render(<Chip />);
  });
});
