import gql from 'graphql-tag';

export const CREATE_USER = gql`
  mutation createUser($input: UserCreatePayload!) {
    user: createUser(input: $input) {
      token
    }
  }
`;
