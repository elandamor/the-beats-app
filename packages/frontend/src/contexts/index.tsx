import React, { FC } from 'react';
import AuthenticationProvider from './AuthenticationProvider.context';
import CurrentRouteProvider from './CurrentRouteProvider.context';
import NetworkStatusProvider from './NetworkStatusProvider.context';
import OnDeckProvider from './OnDeck.context';
import PlaylistProvider from './Playlist.context';
import ThemeProvider from './ThemeProvider.context';

interface IAppProvider {
  children: React.ReactNode;
}

export const AppProvider: FC<IAppProvider> = ({ children }) => {
  return (
    <AuthenticationProvider>
      <ThemeProvider>
        <NetworkStatusProvider>
          <CurrentRouteProvider>
            <OnDeckProvider>
              <PlaylistProvider>{children}</PlaylistProvider>
            </OnDeckProvider>
          </CurrentRouteProvider>
        </NetworkStatusProvider>
      </ThemeProvider>
    </AuthenticationProvider>
  );
};
