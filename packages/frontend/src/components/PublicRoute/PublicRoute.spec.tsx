// PublicRoute.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';
import { BrowserRouter, Switch } from 'react-router-dom';

import PublicRoute from './index';

const PublicComponent = () => <div>Public</div>;

describe('PublicRoute', () => {
  it('should render without crashing', () => {
    render(
      <BrowserRouter>
        <Switch>
          <PublicRoute path="/Public" component={PublicComponent} />
        </Switch>
      </BrowserRouter>,
    );
  });
});
