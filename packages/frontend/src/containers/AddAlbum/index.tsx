import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, Form, Field, FieldProps } from 'formik';
import { useMutation } from 'react-apollo';
import Uppy from '@uppy/core';
import { DragDrop } from '@uppy/react';
import XHRUpload from '@uppy/xhr-upload';
// Styles
import Wrapper from './styles';
import { Input } from '@app/components';
import { CREATE_ALBUM, GET_ALBUMS } from '@app/graphql';

interface IProps extends RouteComponentProps {
  closeModal?: () => void;
}

interface AlbumFormValues {
  artwork?: [];
}

const INITIAL_VALUES: AlbumFormValues = {
  artwork: [],
};

export const ALBUM_PAYLOAD = {
  artists: [
    {
      name: 'Khalid',
    },
  ],
  name: 'Free Spirit',
  releaseDate: '2019-06-10',
  releaseType: 'ALBUM',
  tracks: [
    {
      artists: [
        {
          name: 'Khalid',
        },
      ],
      name: 'Better',
      duration: '3:49',
      trackNumber: 4,
    },
  ],
};

const uppy = Uppy({
  meta: { type: 'avatar' },
  restrictions: { maxNumberOfFiles: 1 },
  autoProceed: true,
});

uppy.use(XHRUpload, {
  endpoint: 'http://my-website.org/upload',
});

uppy.on('complete', (result) => {
  const url = result.successful[0].uploadURL;
  console.log({ url });
});

/**
 * @render react
 * @name AddAlbum component
 * @description UI for album creation.
 * @example
 * <AddAlbum {...routeProps} />
 */

const AddAlbum: FC<IProps> = (props) => {
  const [createAlbum] = useMutation(CREATE_ALBUM, {
    awaitRefetchQueries: true,
    refetchQueries: () => {
      return [{ query: GET_ALBUMS }];
    },
    onCompleted: () => {
      props.closeModal && props.closeModal();
    },
  });

  return (
    <Wrapper>
      <Helmet title="Create a new album" />
      <DragDrop
        uppy={uppy}
        locale={{
          strings: {
            // Text to show on the droppable area.
            // `%{browse}` is replaced with a link that opens the system file selection dialog.
            dropHereOr: 'Drop here or %{browse}',
            // Used as the label for the link that opens the system file selection dialog.
            browse: 'browse',
          },
        }}
      />
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={async () => {
          try {
            await createAlbum({
              variables: { input: ALBUM_PAYLOAD },
            });
          } catch (error) {
            return error;
          }
        }}
        render={(formikProps) => (
          <Form>
            <Field
              name="artwork"
              render={({ field }: FieldProps<AlbumFormValues>) => (
                <Input
                  {...field}
                  field={field}
                  form={formikProps}
                  label="Artwork"
                  hideLabel={true}
                  type="file"
                />
              )}
            />
            <Field
              name="name"
              render={({ field }: FieldProps<AlbumFormValues>) => (
                <Input
                  {...field}
                  field={field}
                  form={formikProps}
                  label="Name"
                  type="text"
                />
              )}
            />
            <Field
              name="artists"
              render={({ field }: FieldProps<AlbumFormValues>) => (
                <Input
                  {...field}
                  field={field}
                  form={formikProps}
                  label="Artist(s)"
                  type="text"
                />
              )}
            />
            <button type="submit">Create</button>
          </Form>
        )}
      />
    </Wrapper>
  );
};

export default AddAlbum;
