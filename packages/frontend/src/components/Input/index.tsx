import React, { FC, useState } from 'react';
import { FieldProps, ErrorMessage } from 'formik';
// Styles
import { DefaultInput } from './styles';
import Box from '../Box';
import { Text } from '@app/typography';
import Flex from '../Flex';
import Button from '../Button';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export interface IInputProps extends FieldProps {
  autoComplete?: string;
  label: string;
  placeholder?: string;
  readOnly?: boolean;
  type?: 'text' | 'email' | 'number' | 'password';
}

/**
 * @render react
 * @name Input component
 * @description Input component.
 * @example
 * <Input
 *  id="text"
 *  label="Text"
 *  name="text"
 *  type="text"
 * />
 */

const Input: FC<IInputProps> = ({ field, label, ...rest }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const isPasswordInput = rest.type === 'password';

  return (
    <Box mb="2">
      <label htmlFor={field.name}>
        <Flex mb="1">
          <Text>{label}</Text>
        </Flex>
        <Box alignItems="center" flexDirection="row">
          <DefaultInput
            {...field}
            aria-label={label}
            id={field.name}
            placeholder={rest.placeholder}
            readOnly={rest.readOnly}
            type={passwordVisible ? 'text' : rest.type}
            {...(rest.autoComplete ? { autoComplete: rest.autoComplete } : {})}
          />
          {isPasswordInput && (
            <Button
              variant="icon"
              icon={passwordVisible ? <FiEye /> : <FiEyeOff />}
              onClick={() => setPasswordVisible(!passwordVisible)}
              minWidth="40px"
              size="40px"
            />
          )}
        </Box>
      </label>
      <ErrorMessage name={field.name}>
        {(message) => (
          <Text color="error" fontSize="2" mt="1">
            {message}
          </Text>
        )}
      </ErrorMessage>
    </Box>
  );
};

Input.defaultProps = {
  placeholder: '',
  readOnly: false,
};

export default Input;
