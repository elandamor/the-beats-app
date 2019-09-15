import React, { FC, useState, useEffect } from 'react';
import { decode } from 'jsonwebtoken';
import { useMutation } from '@apollo/react-hooks';
import { JWT_LOCAL_STORAGE_KEY } from '@app/constants';
import { AUTHENTICATE_USER, CREATE_USER } from '@app/graphql';

const DEFAULT_STATE = {
  authenticating: true,
  isAuthenticated: false,
  signIn: (_email: string, _password: string) => {},
  signUp: (_email: string, _password: string) => {},
};

export const AuthenticationContext = React.createContext(DEFAULT_STATE);

const Provider: FC = (props) => {
  const [authenticateUser] = useMutation(AUTHENTICATE_USER, {
    onCompleted: ({ authenticatedUser }) => {
      setJWT(authenticatedUser.token);
    },
  });
  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: ({ user }) => {
      setJWT(user.token);
    },
  });

  const [authenticating, setAuthenticating] = useState(
    DEFAULT_STATE.authenticating,
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    DEFAULT_STATE.isAuthenticated,
  );

  /**
   * signIn
   */
  const signIn = async (email: string, password: string) => {
    try {
      const {
        data: { authenticatedUser },
      } = await authenticateUser({
        variables: { input: { email, password } },
      });
      return authenticatedUser;
    } catch (error) {
      return error;
    }
  };

  /**
   * signUp
   */
  const signUp = async (email: string, password: string) => {
    try {
      const {
        data: { user },
      } = await createUser({
        variables: { input: { email, password } },
      });
      return user;
    } catch (error) {
      return error;
    }
  };

  /**
   * Validate JWT
   */
  const validateJWT = (token: string | null) => {
    if (!token) {
      setIsAuthenticated(false);
      setAuthenticating(false);
      return false;
    }

    try {
      const decodedJWT: any = decode(token);
      const EXP = decodedJWT.exp;
      const NOW = parseInt((Date.now() / 1000).toString(), 10);

      if (NOW >= EXP) {
        throw new Error('jwt:expired');
      }

      setIsAuthenticated(true);
      return true;
    } catch (e) {
      setIsAuthenticated(false);
      return e;
    } finally {
      setAuthenticating(false);
    }
  };

  /**
   * Get JWT from localStorage.
   */
  const getJWT = () => window.localStorage.getItem(JWT_LOCAL_STORAGE_KEY);

  /**
   * Set JWT in localStorage.
   */
  const setJWT = (JWT: string) => {
    try {
      window.localStorage.setItem(JWT_LOCAL_STORAGE_KEY, JWT);
      setIsAuthenticated(true);
      setAuthenticating(false);
      return true;
    } catch (e) {
      setIsAuthenticated(false);
      setAuthenticating(false);
      return false;
    }
  };

  /**
   * Logout the user.
   */
  // const logout = async () => {
  //   try {
  //     const isJWTRemoved = await removeJWT();

  //     if (isJWTRemoved) {
  //       setIsAuthenticated(false);
  //       setAuthenticating(false);
  //     }
  //   } catch (e) {
  //     return e;
  //   }
  // };

  useEffect(() => {
    validateJWT(getJWT());
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{ authenticating, isAuthenticated, signIn, signUp }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export default Provider;
