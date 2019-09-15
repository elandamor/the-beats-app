import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { Circle } from 'react-feather';
// Components
import {
  Box,
  ErrorBoundary,
  Header,
  NavigationBar,
  Routes,
  ScrollView,
} from '@app/components';
// Contexts
import { AppProvider } from '@app/contexts';
// Routes
import routes from '@app/routes';

import GlobalStyles from '@app/global-styles';

import { makeDebugger } from '@app/utils';
const debug = makeDebugger('App');

export interface IAppProps extends RouteComponentProps {}

/**
 * @render react
 * @name App container
 * @description The skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar).
 */

const App: FC<IAppProps> = (props) => {
  debug({ props });

  return (
    <AppProvider>
      <Box height="100%" overflow="hidden">
        <Normalize />
        <GlobalStyles />
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <ScrollView>
          <ErrorBoundary>
            <Routes location={props.location} routes={routes} />
          </ErrorBoundary>
        </ScrollView>
        <ErrorBoundary>
          <NavigationBar
            links={[
              { exact: true, href: '/', icon: <Circle size="20" /> },
              { href: '/dashboard', icon: <Circle size="20" /> },
            ]}
            height="64px"
          />
        </ErrorBoundary>
      </Box>
    </AppProvider>
  );
};

export default withRouter(App);
