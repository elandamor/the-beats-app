// Navigation.spec.tsx
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@app/utils/test-utils';

import Navigation from './index';

describe('Navigation', () => {
  it('should render without crashing', () => {
    const props = {
      links: [
        { exact: true, href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
      ],
    };

    render(
      <Router>
        <Navigation {...props} />
      </Router>,
    );
  });
});
