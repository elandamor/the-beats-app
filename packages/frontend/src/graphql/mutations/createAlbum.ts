import gql from 'graphql-tag';

export const CREATE_ALBUM = gql`
  mutation createAlbum($input: AlbumCreatePayload!) {
    album: createAlbum(input: $input) {
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
