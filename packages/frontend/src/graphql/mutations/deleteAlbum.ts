import gql from 'graphql-tag';

export const DELETE_ALBUM = gql`
  mutation deleteAlbum($id: ID!) {
    album: deleteAlbum(id: $id) {
      id
      alias
      name
      duration
      tracks {
        id
        name
        duration
        trackNumber
      }
    }
  }
`;
