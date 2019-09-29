import gql from 'graphql-tag';
import { TRACK } from './track';

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
      ...track
    }
    numTracks
    duration
    releaseDate
    releaseType
    artwork {
      url
    }
  }
  ${TRACK}
`;
