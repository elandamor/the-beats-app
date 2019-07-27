import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { StyledSystemProps } from 'styled-system';
// Styles
import Wrapper from './styles';

export interface IProps extends StyledSystemProps {
  children: any;
  className?: string;
  defaultOpen?: boolean;
  onToggle?: Function;
  title: string;
}

/**
 * @render react
 * @name Accordion component
 * @description Accordion component.
 * @example
 *  <Accordion
 *    title="Test"
 *  >
 *    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
 *  </Accordion>
 */

const Accordion: FC<IProps> = ({
  children,
  className,
  defaultOpen,
  onToggle,
  title,
  ...rest
}) => {
  const [visibility, setVisibility] = useState(defaultOpen);

  return (
    <Wrapper
      className={classNames('c-accordion', className, {
        '-open': visibility,
      })}
      {...rest}
    >
      <header
        onClick={() => {
          setVisibility(!visibility);
          if (onToggle) onToggle(!visibility);
        }}
      >
        <span className="a-title">{title}</span>
      </header>
      {visibility ? <section>{children}</section> : null}
    </Wrapper>
  );
};

export default Accordion;
