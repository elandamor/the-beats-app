import gql from 'graphql-tag';
import { TRACK } from '../fragments/track';

export const GET_TRACKS = gql`
  query getTracks {
    tracks {
      edges {
        node {
          ...track
        }
      }
    }
  }
  ${TRACK}
`;
