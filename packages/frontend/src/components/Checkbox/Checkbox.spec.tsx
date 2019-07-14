// Checkbox.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Checkbox from './index';

describe('Checkbox', () => {
  it('should render without crashing', () => {
    render(<Checkbox />);
  });
});
