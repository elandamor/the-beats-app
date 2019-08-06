import React, { FC, useEffect } from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { IRouteProps } from '../Routes';
import ErrorBoundary from '../ErrorBoundary';
import { useCurrentRoute } from '@app/hooks';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('PublicRoute');

interface IPublicRouteProps extends RouteProps {
  component?: React.ComponentType<any>;
  routes?: IRouteProps[];
}

/**
 * @render react
 * @name PublicRoute component
 * @description PublicRoute component.
 * @example
 * <PublicRoute />
 */

const PublicRoute: FC<IPublicRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { setCurrentRoute } = useCurrentRoute();

  useEffect(() => setCurrentRoute(rest), []);

  return (
    <ErrorBoundary>
      <Route
        {...rest}
        render={(props) =>
          Component && <Component routes={rest.routes} {...props} />
        }
      />
    </ErrorBoundary>
  );
};

export default PublicRoute;
