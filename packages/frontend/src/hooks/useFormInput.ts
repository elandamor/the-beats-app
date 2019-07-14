import { useState } from 'react';

function useFormInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.currentTarget;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setValue(value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

export default useFormInput;
