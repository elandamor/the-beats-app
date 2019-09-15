import gql from 'graphql-tag';
import { ALBUM } from '../fragments/album';

export const GET_ALBUM = gql`
  query getAlbum($id: ID!) {
    album(id: $id) {
      ...album
    }
  }
  ${ALBUM}
`;
