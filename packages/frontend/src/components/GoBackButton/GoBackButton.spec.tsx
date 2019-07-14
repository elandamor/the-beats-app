// GoBackButton.spec.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@app/utils/test-utils';

import GoBackButton from './index';

describe('GoBackButton', () => {
  it('should render without crashing', () => {
    render(
      <BrowserRouter>
        <GoBackButton show={true} />,
      </BrowserRouter>,
    );
  });
});
