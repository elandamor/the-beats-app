// Dropzone.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Dropzone from './index';

describe('Dropzone', () => {
  it('should render without crashing', () => {
    render(<Dropzone />);
  });
});
