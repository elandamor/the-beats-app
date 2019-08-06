import React, { FC, createContext, useState } from 'react';
import { IRouteProps } from '@app/components/Routes';

interface IState {
  currentRoute: IRouteProps;
  setCurrentRoute: (_route: IRouteProps) => void;
}

const DEFAULT_STATE: IState = {
  currentRoute: {},
  setCurrentRoute: (_route: IRouteProps) => {},
};

export const ExperimentalCurrentRouteContext = createContext(DEFAULT_STATE);

const CurrentRouteProvider: FC = ({ children }) => {
  const [currentRoute, setRoute] = useState(DEFAULT_STATE.currentRoute);

  const setCurrentRoute = (route: IRouteProps) => {
    if (route.title === currentRoute.title) {
      return;
    }
    setRoute(route);
  };

  return (
    <ExperimentalCurrentRouteContext.Provider
      value={{ currentRoute, setCurrentRoute }}
    >
      {children}
    </ExperimentalCurrentRouteContext.Provider>
  );
};

export default CurrentRouteProvider;
