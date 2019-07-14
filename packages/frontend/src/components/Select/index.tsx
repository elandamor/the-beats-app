import React, { FC } from 'react';
import classNames from 'classnames';
import ISelect from 'react-select';
// Styles
import Wrapper from './styles';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('Select');

interface IProps {
  className?: string;
  [key: string]: any;
}

/**
 * @render react
 * @name Select component
 * @description Select component.
 * @example
 * <Select />
 */

const Select: FC<IProps> = ({ className, onChange, ...rest }) => {
  const handleChange = (event: any) => {
    onChange({
      target: {
        ...event,
        name: rest.name,
      },
    });
  };

  return (
    <Wrapper className={classNames('c-select', className)} {...rest}>
      <ISelect classNamePrefix="c-select" onChange={handleChange} {...rest} />
    </Wrapper>
  );
};

export default Select;
