// Logo.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Logo from './index';

describe('Logo', () => {
  it('should render without crashing', () => {
    render(<Logo />);
  });
});
