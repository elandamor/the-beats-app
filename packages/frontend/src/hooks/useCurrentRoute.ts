import React from 'react';
import { ExperimentalCurrentRouteContext } from '@app/contexts/CurrentRouteProvider.context';

export default function useCurrentRoute() {
  const context = React.useContext(ExperimentalCurrentRouteContext);

  if (context === undefined) {
    throw new Error(
      'useCurrentRoute must be used within an CurrentRouteProvider',
    );
  }

  return context;
}
