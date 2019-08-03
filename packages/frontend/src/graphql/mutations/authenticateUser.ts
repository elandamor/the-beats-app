import gql from 'graphql-tag';

export const AUTHENTICATE_USER = gql`
  mutation authenticateUser($input: LoginUserPayload!) {
    authenticatedUser: authenticateUser(input: $input) {
      token
    }
  }
`;
