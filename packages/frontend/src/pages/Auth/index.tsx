import React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps, Redirect } from 'react-router-dom';

import { Button, Inner, Page, WrappedMutation } from '@app/components';
import { H2 } from '@app/typography';
import { useAuthentication } from '@app/hooks';
import { AUTHENTICATE_USER } from '@app/graphql';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Auth');

interface IAuthProps extends RouteComponentProps {}

/**
 * @render react
 * @name Auth page
 * @description Auth page.
 */

const Auth = ({ location }: IAuthProps) => {
  const { isAuthenticated, setJWT } = useAuthentication();

  return !isAuthenticated ? (
    <Page>
      <Helmet>
        <title>Auth</title>
        <meta name="description" content="The page authenticates a user" />
      </Helmet>
      <Inner p={2}>
        <H2 mb={0}>Authenticator</H2>
        <WrappedMutation
          mutation={AUTHENTICATE_USER}
          onCompleted={({ authenticatedUser }) => {
            setJWT(authenticatedUser.token);
          }}
        >
          {(authenticateUser) => {
            return (
              <Button
                text="Authenticate"
                onClick={async () => {
                  const payload = {
                    email: 'mpofuthandolwethu@gmail.com',
                    password: 'Pass123!',
                  };

                  try {
                    await authenticateUser({
                      variables: { input: payload },
                    });
                  } catch (error) {
                    return error;
                  }
                }}
              />
            );
          }}
        </WrappedMutation>
      </Inner>
    </Page>
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
