import React, { FC, useState, useEffect } from 'react';
import { differenceInMinutes } from 'date-fns';
import { JWT_LOCAL_STORAGE_KEY } from '@app/constants';

const DEFAULT_STATE = {
  authenticating: true,
  isAuthenticated: false,
  setJWT: (JWT: string) => true,
};

export const AuthenticationContext = React.createContext(DEFAULT_STATE);

interface IProps {
  children: React.ReactNode;
}

const Provider: FC<IProps> = (props) => {
  const [authenticating, setAuthenticating] = useState(
    DEFAULT_STATE.authenticating,
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    DEFAULT_STATE.isAuthenticated,
  );

  /**
   * Remove JWT from localStorage.
   */
  const removeJWT = () => {
    try {
      window.localStorage.removeItem(JWT_LOCAL_STORAGE_KEY);
      return true;
    } catch (e) {
      return false;
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
      const isValid = differenceInMinutes(new Date().toISOString(), token) < 1;

      if (!isValid) {
        throw new Error('jwt:expired');
      }

      setIsAuthenticated(true);
      return true;
    } catch (e) {
      if (e.message === 'jwt:expired') {
        removeJWT();
      }
      setIsAuthenticated(false);
      return false;
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
      value={{ authenticating, isAuthenticated, setJWT }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export default Provider;
