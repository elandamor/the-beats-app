import React, { FC, useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Wrapper } from './styles';

interface IToggleProps {
  checked?: boolean;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  icons?: object;

  onBlur?: (event: any) => void;
  onChange?: (event: any) => void;
  onFocus?: (event: any) => void;
}

const Toggle: FC<IToggleProps> = (props) => {
  const inputEl = useRef<HTMLInputElement>(null);

  const [checked, setChecked] = useState(
    !!(props.checked || props.defaultChecked),
  );
  const [hasFocus, setHasFocus] = useState(false);

  const { className, icons, ...inputProps } = props;

  const renderIcon = (type: string) => (icons ? icons[type] : null);

  const handleClick = (event: any) => {
    const checkbox = inputEl;

    if (checkbox && checkbox.current) {
      if (event.target !== checkbox) {
        event.preventDefault();
        checkbox.current.focus();
        checkbox.current.click();
        return;
      }

      setChecked(checkbox.current.checked);
    }
  };

  const handleBlur = (event: any) => {
    const { onBlur } = props;

    if (onBlur) {
      onBlur(event);
    }

    setHasFocus(false);
  };

  const handleFocus = (event: any) => {
    const { onFocus } = props;

    if (onFocus) {
      onFocus(event);
    }

    setHasFocus(true);
  };

  useEffect(() => {
    setChecked(!!props.checked);
  }, [props.checked]);

  return (
    <Wrapper
      className={classNames(
        {
          '-checked': checked,
          '-focus': hasFocus,
          '-disabled': props.disabled,
        },
        className,
      )}
      onClick={handleClick}
    >
      <div className="react-toggle-track">
        <div className="react-toggle-track-check">{renderIcon('checked')}</div>
        <div className="react-toggle-track-x">{renderIcon('unchecked')}</div>
      </div>
      <div className="react-toggle-thumb" />
      <input
        {...inputProps}
        ref={inputEl}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="react-toggle-screenreader-only"
        type="checkbox"
        aria-label="Switch between Dark and Light mode"
      />
    </Wrapper>
  );
};

export default Toggle;
