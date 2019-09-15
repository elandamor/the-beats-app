import React, { FC } from 'react';
import { RouteProps, Switch, SwitchProps } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute/Loadable';
import PublicRoute from '../PublicRoute/Loadable';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Routes');

export interface IRouteProps extends RouteProps {
  isSubRoute?: boolean;
  secure?: boolean;
  routes?: IRouteProps[];
  title?: string;
}

interface IRoutesProps extends SwitchProps {
  routes: IRouteProps[];
}

/**
 * @render react
 * @name Routes component
 * @description Routes component.
 * @example
 * <Routes
 *  routes={[
 *    {
 *      exact: true,
 *      path: '/',
 *      component: Home,
 *    }
 *  ]}
 * />
 */

const Routes: FC<IRoutesProps> = ({ location, routes }) => {
  if (!routes) {
    return null;
  }

  return (
    <Switch location={location}>
      {routes.map(({ secure, ...rest }: IRouteProps, index: number) =>
        secure ? (
          <PrivateRoute key={index} {...rest} />
        ) : (
          <PublicRoute key={index} {...rest} />
        ),
      )}
    </Switch>
  );
};

export default Routes;
