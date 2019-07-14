import React, { FC, Suspense } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper, { HelperText } from './styles';
import Checkbox from '../Checkbox/Loadable';
import Dropzone from '../Dropzone/Loadable';
import Label from '../Label';
import LoadingBar from '../LoadingBar';
import Select from '../Select/Loadable';
import Spacer from '../Spacer';
import theme from '../../theme';

export interface IInputProps {
  as?: string;
  className?: string;
  checked?: boolean;
  helperText?: string;
  helperTextPosition?: 'bottom' | 'top';
  id: string;
  label: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLElement>) => void;
  placeholder?: string;
  readonly?: boolean;
  rows?: number;
  sronly?: boolean;
  type:
    | 'text'
    | 'email'
    | 'file'
    | 'date'
    | 'password'
    | 'textarea'
    | 'checkbox'
    | 'radio'
    | 'number'
    | 'select';
  value?: any;
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

const Input: FC<IInputProps> = ({
  checked,
  className,
  helperText,
  id,
  label,
  onChange: handleChange,
  sronly,
  ...rest
}) => {
  const renderLabel = () => <Label sronly={sronly}>{label}</Label>;

  const renderInput = () => {
    switch (rest.type) {
      case 'checkbox':
        return <Checkbox onChange={handleChange} {...rest} />
      case 'file':
        return <Dropzone onChange={handleChange} {...rest} />;
      case 'select':
        return <Select onChange={handleChange} {...rest} />;
      case 'textarea':
        return <textarea id={id} className="a-textarea" aria-label={label} onChange={handleChange} {...rest} />;
      default:
        return <input id={id} className="a-input" aria-label={label} onChange={handleChange} {...rest} />;
    }
  };

  return (
    <Wrapper
      className={classNames('c-input__wrapper', className, {
        '-active': checked,
      })}
    >
      <label htmlFor={id}>
        {
          (rest.type !== 'checkbox' && rest.type !== 'radio')
          && (
            <React.Fragment>
              {renderLabel()}
              <Spacer spacing={theme.space[1]} />
            </React.Fragment>
          )
        }
        {
          rest.helperTextPosition === 'top' && helperText
          && <HelperText>{helperText}</HelperText>
        }
        <Suspense fallback={<LoadingBar />}>{ renderInput() }</Suspense>
        {
          (rest.type === 'checkbox' || rest.type === 'radio')
          && (
            <React.Fragment>
              <span className={`a-${rest.type}`} />
              {renderLabel()}
            </React.Fragment>
          )
        }
        {
          rest.helperTextPosition === 'bottom' && helperText
          && <HelperText>{helperText}</HelperText>
        }
      </label>
    </Wrapper>
  );
};

Input.defaultProps = {
  as: undefined,
  className: '',
  checked: false,
  helperText: '',
  helperTextPosition: 'bottom',
  onChange: () => null,
  placeholder: '',
  readonly: false,
  rows: 5,
  sronly: false,
  value: ''
};

export default Input;
