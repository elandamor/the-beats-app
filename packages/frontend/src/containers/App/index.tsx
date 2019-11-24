import {
  Box,
  ErrorBoundary,
  Header,
  Routes,
  ScrollView,
} from '@app/components';
import Player from '@app/components/Player';
import { AppProvider } from '@app/contexts';
import GlobalStyles from '@app/global-styles';
import { useAuthentication } from '@app/hooks';
import routes from '@app/routes';
import { makeDebugger } from '@app/utils';
import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';

const debug = makeDebugger('App');

export interface IAppProps extends RouteComponentProps {}

/**
 * @render react
 * @name App container
 * @description The skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar).
 */

const App: FC<IAppProps> = (props) => {
  const Auth = useAuthentication();
  debug({ Auth });

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
        <Box borderRadius="4px" flex="none" height="64px" overflow="hidden">
          <ErrorBoundary>
            <Player />
          </ErrorBoundary>
        </Box>
      </Box>
    </AppProvider>
  );
};

export default withRouter(App);
