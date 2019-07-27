import gql from 'graphql-tag';

export const GET_ALBUMS = gql`
  query getAlbums {
    albums {
      edges {
        node {
          id
          name
          artists {
            name
          }
          artwork {
            url
          }
          genres
          tracks {
            id
            name
            artists {
              name
            }
            featuring {
              name
            }
            trackNumber
          }
          numTracks
          duration
          releaseDate
          releaseType
          artwork {
            url
          }
        }
      }
    }
  }
`;
