// PrivateRoute.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';
import { BrowserRouter, Switch } from 'react-router-dom';

import PrivateRoute from './index';

const PrivateComponent = () => <div>Private</div>;

describe('PrivateRoute', () => {
  it('should render without crashing', () => {
    render(
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/private" component={PrivateComponent} />
        </Switch>
      </BrowserRouter>,
    );
  });
});
