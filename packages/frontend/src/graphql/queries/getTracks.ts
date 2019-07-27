import gql from 'graphql-tag';

export const GET_TRACKS = gql`
  query getTracks {
    tracks {
      edges {
        node {
          id
          name
          artists {
            name
          }
          duration
        }
      }
    }
  }
`;
