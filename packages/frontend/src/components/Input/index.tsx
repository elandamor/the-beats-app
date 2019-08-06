import React, { FC, useState } from 'react';
import { FieldProps, ErrorMessage } from 'formik';
// Styles
import { DefaultInput } from './styles';
import Box from '../Box';
import { Text } from '@app/typography';
import Flex from '../Flex';
import Button from '../Button';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Dropzone from '../Dropzone/Loadable';

export interface IInputProps extends FieldProps {
  autoComplete?: string;
  hideLabel?: boolean;
  label: string;
  placeholder?: string;
  readOnly?: boolean;
  type?: 'text' | 'email' | 'number' | 'password' | 'file';
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

const Input: FC<IInputProps> = ({ field, hideLabel, label, ...rest }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const isPasswordInput = rest.type === 'password';

  const inputProps = {
    ...field,
    'aria-label': label,
    id: field.name,
    placeholder: rest.placeholder,
    readOnly: rest.readOnly,
    type: passwordVisible ? 'text' : rest.type,
    ...(rest.autoComplete ? { autoComplete: rest.autoComplete } : {}),
  };

  const renderInput = () => {
    switch (rest.type) {
      case 'file':
        return <Dropzone {...inputProps} />;
      default:
        return <DefaultInput {...inputProps} />;
    }
  };

  return (
    <Box mb="2">
      <label htmlFor={field.name}>
        {!hideLabel && (
          <Flex mb="1">
            <Text mb="0">{label}</Text>
          </Flex>
        )}
        <Box alignItems="center" flexDirection="row">
          {renderInput()}
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
