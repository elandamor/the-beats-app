// App.spec.tsx
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import App from './index';
import client from '../../apollo.config';

describe('App', () => {
  it('should render app without crashing', () => {
    render(
      <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>,
    );
  });
});
