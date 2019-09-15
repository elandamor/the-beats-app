import React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps, Redirect } from 'react-router-dom';

import { Inner } from '@app/components';
import { IRouteProps } from '@app/components/Routes';
import { H2 } from '@app/typography';
import { useAuthentication } from '@app/hooks';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Auth');

interface IAuthProps extends RouteComponentProps {
  routes?: IRouteProps[];
}

/**
 * @render react
 * @name Auth page
 * @description Auth page.
 */

const Auth = ({ location, match, routes }: IAuthProps) => {
  const { isAuthenticated } = useAuthentication();

  return !isAuthenticated ? (
    <Inner p={2}>
      <Helmet>
        <title>Auth</title>
        <meta name="description" content="The page authenticates a user" />
      </Helmet>
      {match.isExact && (
        <Inner p={2}>
          <H2 mb={0}>Authenticator</H2>
        </Inner>
      )}
    </Inner>
  ) : (
    <Redirect
      to={
        location && location.state && location.state.from
          ? location.state.from
          : '/'
      }
    />
  );
};

export default Auth;
