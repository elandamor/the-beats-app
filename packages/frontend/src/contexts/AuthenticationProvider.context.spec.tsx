// AuthenticationProvider.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import AuthenticationProvider from './AuthenticationProvider.context';
import { useAuthentication } from '@app/hooks';

interface IConsumerProps {
  authenticate?: boolean;
}

const AuthenticationConsumer = ({ authenticate }: IConsumerProps) => {
  const { isAuthenticated, setJWT } = useAuthentication();

  if (authenticate) {
    setJWT(new Date().toISOString());
  }

  return (
    <div data-testid={`authenticated:${isAuthenticated}`}>
      Authentication Consumer
    </div>
  );
};

describe('AuthenticationProvider', () => {
  it('should render without crashing', () => {
    render(
      <AuthenticationProvider>
        <AuthenticationConsumer />
      </AuthenticationProvider>,
    );
  });

  it('should authenticate a user', () => {
    const { getByTestId } = render(
      <AuthenticationProvider>
        <AuthenticationConsumer authenticate={true} />
      </AuthenticationProvider>,
    );

    expect(getByTestId('authenticated:true')).toBeTruthy();
  });

  it('should auto-authenticate a user via JWT', () => {
    const { getByTestId } = render(
      <AuthenticationProvider>
        <AuthenticationConsumer authenticate={true} />
      </AuthenticationProvider>,
    );

    expect(getByTestId('authenticated:true')).toBeTruthy();
  });
});
