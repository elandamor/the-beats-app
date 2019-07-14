// Header.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Header from './index';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  it('should render without crashing', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
  });
});
