import React, { FC } from 'react';
// Styles
import Wrapper from './styles';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('Form');

interface IFormProps {
  [propName: string]: any;
}

/**
 * @render react
 * @name Form component
 * @description Creates an HTML form for user input.
 * @example
 *  <Form onSubmit={() => handleSubmit}>
 *    <Input
 *      id="text"
 *      label="Text"
 *      name="text"
 *      type="text"
 *    />
 *    <Button
 *      text="Submit"
 *      type="submit"
 *    />
 *  </Form>
 */

const Form: FC<IFormProps> = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default Form;
