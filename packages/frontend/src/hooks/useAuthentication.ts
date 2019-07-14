import React from 'react';
import { AuthenticationContext } from '@app/contexts/AuthenticationProvider.context';

export default function useAuthentication() {
  const context = React.useContext(AuthenticationContext);

  if (context === undefined) {
    throw new Error(
      'useAuthentication must be used within an AuthenticationProvider',
    );
  }

  return context;
}
