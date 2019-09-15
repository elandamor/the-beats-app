import React, { FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { IRouteProps } from '../Routes';
import ErrorBoundary from '../ErrorBoundary';

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
  return (
    <ErrorBoundary>
      <Route
        {...rest}
        render={(props) => Component && <Component {...props} />}
      />
    </ErrorBoundary>
  );
};

export default PublicRoute;
