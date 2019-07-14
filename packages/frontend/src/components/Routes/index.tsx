import React, { FC } from 'react';
import { RouteProps, Switch, SwitchProps } from 'react-router-dom';
import { useTransition } from 'react-spring';
import styled from 'styled-components';
import AnimatedWrapper from '../AnimatedWrapper';
import Box from '../Box';

import PrivateRoute from '../PrivateRoute/Loadable';
import PublicRoute from '../PublicRoute/Loadable';

export interface IRouteProps extends RouteProps {
  secure?: boolean;
  routes?: IRouteProps[];
}

interface IRoutesProps extends SwitchProps {
  routes: IRouteProps[];
}

const Wrapper = styled(Box)`
  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    will-change: transform, opacity;
  }
`;

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
  const routeTransitions = useTransition(
    location,
    (location) => location.pathname,
    {
      from: { opacity: 0, transform: 'translateY(64px)' },
      enter: { opacity: 1, transform: 'translateY(0)' },
      leave: { opacity: 0, transform: 'translateY(32px)' },
    },
  );

  return (
    <Wrapper as="main">
      {routeTransitions.map(({ item, props: styleProps, key }) => (
        <AnimatedWrapper key={key} style={styleProps}>
          <Switch location={item}>
            {routes.map(({ secure, ...rest }: IRouteProps, index: number) =>
              secure ? (
                <PrivateRoute key={index} {...rest} />
              ) : (
                <PublicRoute key={index} {...rest} />
              ),
            )}
          </Switch>
        </AnimatedWrapper>
      ))}
    </Wrapper>
  );
};

export default Routes;
