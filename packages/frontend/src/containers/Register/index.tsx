import React, { FC } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
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
import { Text } from '@app/typography';
import { PASSWORD_REGEX, PASSWORD_REGEX_MESSAGE } from '@app/constants';

interface IRegisterFormProps
  extends RouteComponentProps,
    FormikProps<FormikValues> {}

interface IRegisterFormValues {
  email?: string;
  password?: string;
  passwordConfirm?: string;
}

const INITIAL_VALUES: IRegisterFormValues = {
  email: '',
  password: '',
  passwordConfirm: '',
};

const RegisterValidation = Yup.object().shape({
  email: Yup.string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
  password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters!')
    .matches(PASSWORD_REGEX, { message: PASSWORD_REGEX_MESSAGE })
    .required('Password is required!'),
  passwordConfirm: Yup.string()
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match'),
});

/**
 * @render react
 * @name RegisterForm container
 * @description RegisterForm container.
 * @example
 * <RegisterForm />
 */

const RegisterForm: FC<IRegisterFormProps> = (props) => {
  const MERGED_INITIAL_PROPS = {
    ...INITIAL_VALUES,
    ...props.initialValues,
  };

  return (
    <Formik
      initialValues={MERGED_INITIAL_PROPS}
      onSubmit={() => null}
      validationSchema={RegisterValidation}
      render={(formikProps) => (
        <Form>
          <fieldset disabled={formikProps.isSubmitting}>
            <Field
              name="email"
              render={({ field }: FieldProps<IRegisterFormValues>) => (
                <Input
                  {...field}
                  field={field}
                  form={formikProps}
                  label="Email Address"
                  type="text"
                />
              )}
            />
            <Field
              name="password"
              render={({ field }: FieldProps<IRegisterFormValues>) => (
                <Input
                  {...field}
                  field={field}
                  form={formikProps}
                  label="Password"
                  type="password"
                />
              )}
            />
            <Field
              name="passwordConfirm"
              render={({ field }: FieldProps<IRegisterFormValues>) => (
                <Input
                  {...field}
                  field={field}
                  form={formikProps}
                  label="Confirm Password"
                  type="password"
                />
              )}
            />
          </fieldset>
          <Button
            text="Register"
            type="submit"
            disabled={formikProps.isSubmitting}
          />
          <Text>
            Already have an account?{' '}
            <Link to={`/auth/login`}>
              <Text fontWeight="bold">Login</Text>
            </Link>
          </Text>
        </Form>
      )}
    />
  );
};

export default RegisterForm;
