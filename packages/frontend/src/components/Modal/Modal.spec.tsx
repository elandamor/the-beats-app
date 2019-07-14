// Modal.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Modal from './index';

describe('Modal', () => {
  it('should render without crashing', () => {
    render(<Modal trigger={<button>Modal</button>} />);
  });
});
