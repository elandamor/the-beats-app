// Snackbar.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Snackbar from './index';

describe('Snackbar', () => {
  it('should render without crashing', () => {
    render(<Snackbar />);
  });
});
