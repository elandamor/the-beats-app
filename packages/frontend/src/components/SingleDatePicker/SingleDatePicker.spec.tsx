// SingleDatePicker.spec.tsx
import React from 'react';
import { Formik, Form, Field, FieldProps } from 'formik';
import { Moment } from 'moment';
import { render } from '@app/utils/test-utils';

import SingleDatePicker from './index';

interface DatePickerFormValues {
  dateOfBirth?: Moment | null;
}

const INITIAL_VALUES = {
  dateOfBirth: null,
};

const DatePickerForm = () => (
  <Formik
    initialValues={INITIAL_VALUES}
    onSubmit={() => null}
    render={() => (
      <Form>
        <Field
          render={({ field, form }: FieldProps<DatePickerFormValues>) => (
            <SingleDatePicker
              {...field}
              form={form}
              id="dateOfBirth"
              date={null}
            />
          )}
        />
      </Form>
    )}
  />
);

describe('SingleDatePicker', () => {
  it('should render without crashing', () => {
    render(<DatePickerForm />);
  });
});
