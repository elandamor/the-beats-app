// Select.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Select from './index';

describe('Select', () => {
  it('should render without crashing', () => {
    render(<Select />);
  });
});
