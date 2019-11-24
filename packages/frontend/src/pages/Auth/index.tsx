import { Box, Inner, ScrollView } from '@app/components';
import { IRouteProps } from '@app/components/Routes';
import { useAuthentication } from '@app/hooks';
import React from 'react';
import { Lock } from 'react-feather';
import { Helmet } from 'react-helmet';
import { Redirect, RouteComponentProps } from 'react-router-dom';

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
  const { signIn, isAuthenticated } = useAuthentication();

  return !isAuthenticated ? (
    <Box
      position="fixed"
      top="0"
      left="0"
      height="100%"
      width="100%"
      zIndex={10}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        height="100%"
        width="100%"
        bg="background"
        opacity={0.875}
        zIndex={0}
      />
      <ScrollView justifyContent="center" alignItems="center" zIndex={1}>
        <Inner p={2}>
          <Helmet>
            <title>Auth</title>
          </Helmet>
          <Box
            onClick={() => {
              const payload = {
                email: 'mpofuthandolwethu@gmail.com',
                password: 'Pass123!',
              };

              signIn(payload.email, payload.password);
            }}
          >
            <Lock size={56} />
          </Box>
        </Inner>
      </ScrollView>
    </Box>
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
