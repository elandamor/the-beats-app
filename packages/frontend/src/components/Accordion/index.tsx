import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';
import { FiChevronDown } from 'react-icons/fi';

export interface IProps {
  children: any;
  className?: string;
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

const Accordion: FunctionComponent<IProps> = ({
  children,
  className,
  onToggle,
  title,
}) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <Wrapper
      className={classNames('c-accordion', className, {
        '-open': visibility,
      })}
    >
      <header
        onClick={() => {
          setVisibility(!visibility);
          if (onToggle) onToggle(!visibility);
        }}
      >
        <span className="a-title">{title}</span>
        <span className="c-icon">
          <FiChevronDown />
        </span>
      </header>
      {visibility ? <section>{children}</section> : null}
    </Wrapper>
  );
};

export default Accordion;
