import gql from 'graphql-tag';

export const GET_PLAYLISTS = gql`
  query getPlaylists {
    playlists {
      edges {
        node {
          id
          name
          numTracks
          duration
          tracks {
            id
            track {
              id
              name
            }
          }
        }
      }
    }
  }
`;
