import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, Form, Field, FieldProps } from 'formik';
// Styles
import Wrapper from './styles';
import { Input } from '@app/components';
import WrappedMutation from '@app/components/WrappedMutation';
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

const ALBUM_PAYLOAD = {
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

/**
 * @render react
 * @name AddAlbum component
 * @description AddAlbum component.
 * @example
 * <AddAlbum />
 */

const AddAlbum: FC<IProps> = (props) => (
  <Wrapper>
    <Helmet title="Create a new album" />
    <WrappedMutation
      mutation={CREATE_ALBUM}
      awaitRefetchQueries={true}
      refetchQueries={() => {
        return [{ query: GET_ALBUMS }];
      }}
      onCompleted={(data) => {
        console.log(data);
        props.closeModal && props.closeModal();
      }}
    >
      {(createAlbum) => (
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
      )}
    </WrappedMutation>
  </Wrapper>
);

export default AddAlbum;
