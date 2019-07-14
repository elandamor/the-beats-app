// Lottie.spec.tsx
import * as React from 'react';
import { render } from '@app/utils/test-utils';

import Lottie from './index';

describe('Lottie', () => {
  it('should render without crashing', () => {
    render(<Lottie />);
  });
});
