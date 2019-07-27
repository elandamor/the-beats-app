import gql from 'graphql-tag';

export const GET_ARTISTS = gql`
  query getArtists {
    artists {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
