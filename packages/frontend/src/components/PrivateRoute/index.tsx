import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAuthentication } from '@app/hooks';
import { IRouteProps } from '../Routes';
import LoadingBar from '../LoadingBar';
import ErrorBoundary from '../ErrorBoundary';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('PrivateRoute');

interface IPrivateRouteProps extends RouteProps {
  component?: React.ComponentType<any>;
  routes?: IRouteProps[];
}

/**
 * @render react
 * @name PrivateRoute component
 * @description PrivateRoute component.
 * @example
 * <PrivateRoute />
 */

const PrivateRoute: FC<IPrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { authenticating, isAuthenticated } = useAuthentication();

  return !authenticating ? (
    <ErrorBoundary>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            Component && <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/auth/login',
                state: { from: props.location },
              }}
            />
          )
        }
      />
    </ErrorBoundary>
  ) : (
    <LoadingBar />
  );
};

export default PrivateRoute;
