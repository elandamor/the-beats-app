import gql from 'graphql-tag';

export const TRACK = gql`
  fragment track on Track {
    id
    artists {
      id
      name
    }
    featuring {
      id
      name
    }
    name
    duration
    trackNumber
    album {
      id
      artwork {
        id
        url
      }
    }
  }
`;
