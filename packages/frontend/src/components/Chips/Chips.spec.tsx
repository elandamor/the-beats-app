// Chips.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Chips from './index';

describe('Chips', () => {
  it('should render without crashing', () => {
    render(<Chips value={[]} />);
  });
});
