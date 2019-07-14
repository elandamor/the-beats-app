import React from 'react';
import { storiesOf } from '@storybook/react';
import { Field, Formik, FieldArray } from 'formik';

import MultiStep from './index';
import Form from '../Form';
import Button from '../Button';
import Flex from '../Flex';

const initialValues = {
  step1: {
    name: '',
  },
  step2: {
    bio: '',
    contacts: [],
  },
};

const Step1 = (props: any) => {
  return (
    <React.Fragment>
      <Field type="text" label="Name" name="step1.name" placeholder="Name" />
    </React.Fragment>
  );
};

const Step2 = (props: any) => {
  const contacts = props.contacts ? props.contacts : undefined;

  return (
    <React.Fragment>
      <Field
        component="textarea"
        name="step2.bio"
        placeholder="Enter your biography"
      />
      <FieldArray name="step2.contacts">
        {({ push, remove }) => (
          <React.Fragment>
            {contacts &&
              contacts.length > 0 &&
              contacts.map((contact: any, index: number) => (
                <Flex key={`contact-${index}`}>
                  <Field
                    name={`step2.contacts[${index}].name`}
                    type="text"
                    placeholder="John Doe"
                  />
                  <Field
                    name={`step2.contacts[${index}].number`}
                    type="tel"
                    placeholder="+263123456789"
                  />
                  <Button
                    onClick={() => remove(index)}
                    text="Remove"
                    iconOnly={true}
                  />
                </Flex>
              ))}
            <Button
              onClick={() => push({ name: '', number: '' })}
              text="Add Contact"
            />
          </React.Fragment>
        )}
      </FieldArray>
    </React.Fragment>
  );
};

storiesOf('MultiStep', module)
  .add('default', () => (
    <MultiStep
      steps={[
        { name: 'Step 1', component: <div>1</div> },
        { name: 'Step 2', component: <div>2</div> },
        { name: 'Step 3', component: <div>3</div> },
      ]}
    />
  ))
  .add('vertical', () => (
    <MultiStep
      verticalTrack
      steps={[
        { name: 'Step 1', component: <div>1</div> },
        { name: 'Step 2', component: <div>2</div> },
        { name: 'Step 3', component: <div>3</div> },
      ]}
    />
  ))
  .add('Mulit-step form', () => (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        console.log({ values });

        setTimeout(() => setSubmitting(false), 3000);
      }}
    >
      {({ values, handleSubmit }) => (
        <Form>
          <MultiStep
            steps={[
              { name: 'Step 1', component: <Step1 {...values.step1} /> },
              { name: 'Step 2', component: <Step2 {...values.step2} /> },
            ]}
            onDone={handleSubmit}
          />
        </Form>
      )}
    </Formik>
  ));
