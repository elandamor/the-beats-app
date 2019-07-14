import React from 'react';
import { storiesOf } from '@storybook/react';
import { Field, Formik, FieldProps } from 'formik';

import Form from './index';
import Button from '../Button';
import SingleDatePicker from '../SingleDatePicker';
import Flex from '../Flex';

const initialValues = {
  dateOfBirth: null,
};

storiesOf('Form', module).add('default', () => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values, { setSubmitting }) => {
      console.log({ values });

      setTimeout(() => setSubmitting(false), 3000);
    }}
  >
    {(formikProps) => (
      <Form>
        <Flex>
          <Flex flexDirection="column" justifyContent="flex-start">
            <Field
              name="dateOfBirth"
              render={({ field }: FieldProps<any>) => (
                <SingleDatePicker
                  field={field}
                  id="dateOfBirth"
                  date={formikProps.values.dateOfBirth}
                  form={formikProps}
                />
              )}
            />
            <Button
              type="submit"
              text="Submit"
              disabled={formikProps.isSubmitting}
            />
          </Flex>
          <Flex>
            <pre>{JSON.stringify(formikProps, null, 2)}</pre>
          </Flex>
        </Flex>
      </Form>
    )}
  </Formik>
));
