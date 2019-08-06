import React, { FC } from 'react';

import AuthenticationProvider from './AuthenticationProvider.context';
import NetworkStatusProvider from './NetworkStatusProvider.context';
import ThemeProvider from './ThemeProvider.context';
import CurrentRouteProvider from './CurrentRouteProvider.context';

interface IAppProvider {
  children: React.ReactNode;
}

export const AppProvider: FC<IAppProvider> = ({ children }) => {
  return (
    <AuthenticationProvider>
      <ThemeProvider>
        <NetworkStatusProvider>
          <CurrentRouteProvider>{children}</CurrentRouteProvider>
        </NetworkStatusProvider>
      </ThemeProvider>
    </AuthenticationProvider>
  );
};
