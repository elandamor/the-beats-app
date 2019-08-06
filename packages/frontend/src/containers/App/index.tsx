import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
// Components
import {
  Box,
  ErrorBoundary,
  Header,
  NavigationBar,
  Routes,
} from '@app/components';
// Contexts
import { AppProvider } from '@app/contexts';
// Routes
import routes from '@app/routes';

import GlobalStyles from '@app/global-styles';
import { FiCircle } from 'react-icons/fi';

export interface IAppProps extends RouteComponentProps {}

/**
 * @render react
 * @name App container
 * @description The skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar).
 */

const App: FC<IAppProps> = (props) => {
  return (
    <AppProvider>
      <Box height="100%" overflow="hidden">
        <Normalize />
        <GlobalStyles />
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <Box>
          <ErrorBoundary>
            <Routes location={props.location} routes={routes} />
          </ErrorBoundary>
        </Box>
        <ErrorBoundary>
          <NavigationBar
            links={[
              { exact: true, href: '/', icon: <FiCircle /> },
              { href: '/dashboard', icon: <FiCircle /> },
            ]}
            height="64px"
          />
        </ErrorBoundary>
      </Box>
    </AppProvider>
  );
};

export default withRouter(App);
