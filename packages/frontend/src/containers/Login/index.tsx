import React, { FC } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useMutation } from 'react-apollo';
import {
  Formik,
  Form,
  Field,
  FieldProps,
  FormikValues,
  FormikProps,
} from 'formik';
import * as Yup from 'yup';

import { Button, Input } from '@app/components';
import { useAuthentication } from '@app/hooks';
import { Text } from '@app/typography';
import { PASSWORD_REGEX, PASSWORD_REGEX_MESSAGE } from '@app/constants';
import { AUTHENTICATE_USER } from '@app/graphql';

interface ILoginFormProps
  extends RouteComponentProps,
    FormikProps<FormikValues> {}

interface ILoginFormValues {
  email?: string;
  password?: string;
}

const INITIAL_VALUES: ILoginFormValues = {
  email: '',
  password: '',
};

const LoginValidation = Yup.object().shape({
  email: Yup.string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
  password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters!')
    .matches(PASSWORD_REGEX, { message: PASSWORD_REGEX_MESSAGE })
    .required('Password is required!'),
});

/**
 * @render react
 * @name LoginForm container
 * @description LoginForm container.
 * @example
 * <LoginForm />
 */

const LoginForm: FC<ILoginFormProps> = (props) => {
  const { setJWT } = useAuthentication();
  const [authenticateUser] = useMutation(AUTHENTICATE_USER, {
    onCompleted: ({ authenticatedUser }) => {
      setJWT(authenticatedUser.token);
    },
  });

  const MERGED_INITIAL_PROPS = {
    ...INITIAL_VALUES,
    ...props.initialValues,
  };

  return (
    <Formik
      initialValues={MERGED_INITIAL_PROPS}
      validationSchema={LoginValidation}
      onSubmit={async ({ email, password }, { setSubmitting }) => {
        setSubmitting(false);

        const payload = { email, password };

        try {
          await authenticateUser({
            variables: { input: payload },
          });
        } catch (error) {
          return error;
        }
      }}
      render={(formikProps) => (
        <Form>
          <fieldset disabled={formikProps.isSubmitting}>
            <Field
              name="email"
              render={({ field }: FieldProps<ILoginFormValues>) => (
                <Input
                  {...field}
                  field={field}
                  form={formikProps}
                  label="Email Address"
                  type="email"
                />
              )}
            />
            <Field
              name="password"
              render={({ field }: FieldProps<ILoginFormValues>) => (
                <Input
                  {...field}
                  field={field}
                  form={formikProps}
                  label="Password"
                  type="password"
                />
              )}
            />
          </fieldset>
          <Button
            text="Login"
            type="submit"
            disabled={formikProps.isSubmitting}
          />
          <Text>
            Don't have an account?{' '}
            <Link to={`/auth/register`}>
              <Text fontWeight="bold">Register</Text>
            </Link>
          </Text>
        </Form>
      )}
    />
  );
};

export default LoginForm;
