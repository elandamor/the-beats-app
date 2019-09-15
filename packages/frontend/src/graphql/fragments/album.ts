import gql from 'graphql-tag';

export const ALBUM = gql`
  fragment album on Album {
    id
    name
    artists {
      id
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
`;
