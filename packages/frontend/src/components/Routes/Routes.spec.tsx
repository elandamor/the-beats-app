// Routes.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Routes from './index';
import routes from '../../routes';
import LoadingBar from '../LoadingBar';

describe('Routes', () => {
  it('should render app routes without crashing', () => {
    render(
      <Router>
        <Route
          render={(props) => (
            <React.Suspense fallback={<LoadingBar />}>
              <Routes location={props.location} routes={routes} />
            </React.Suspense>
          )}
        />
      </Router>,
    );
  });
});
