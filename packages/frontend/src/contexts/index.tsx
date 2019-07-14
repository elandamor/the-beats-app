import React, { FC } from 'react';

import AuthenticationProvider from './AuthenticationProvider.context';
import NetworkStatusProvider from './NetworkStatusProvider.context';
import ThemeProvider from './ThemeProvider.context';

interface IAppProvider {
  children: React.ReactNode;
}

export const AppProvider: FC<IAppProvider> = ({ children }) => {
  return (
    <AuthenticationProvider>
      <ThemeProvider>
        <NetworkStatusProvider>{children}</NetworkStatusProvider>
      </ThemeProvider>
    </AuthenticationProvider>
  );
};
