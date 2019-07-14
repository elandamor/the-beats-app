import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
// Components
import { Box, ErrorBoundary, Header } from '@app/components';
import Routes from '@app/components/Routes/Loadable';
// Contexts
import { AppProvider } from '@app/contexts';
// Routes
import routes from '@app/routes';

import GlobalStyles from '@app/global-styles';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('App');

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
      </Box>
    </AppProvider>
  );
};

export default withRouter(App);
