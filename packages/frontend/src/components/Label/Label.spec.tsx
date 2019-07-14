// Label.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Label from './index';

describe('Label', () => {
  it('should render without crashing', () => {
    render(<Label />);
  });
});
