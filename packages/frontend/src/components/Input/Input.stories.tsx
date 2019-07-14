import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './index';

storiesOf('Input', module)
  .add('text', () => (
    <Input
      id="name"
      label="Name"
      name="name"
      onChange={() => null}
      type="text"
    />
  ))
  .add('checkbox', () => (
    <Input
      id="checkbox"
      label="Checkbox"
      name="checkbox"
      onChange={() => null}
      type="checkbox"
    />
  ))
  .add('radio', () => (
    <Input
      id="radio"
      label="Radio"
      name="radio"
      onChange={() => null}
      type="radio"
    />
  ))
  .add('toggle', () => (
    <Input
      id="toggle"
      label="Toggle"
      name="toggle"
      onChange={() => null}
      type="checkbox"
      as="toggle"
    />
  ))
  .add('dropzone', () => (
    <Input
      id="file"
      label="File"
      name="file"
      onChange={() => null}
      type="file"
    />
  ))
  .add('select', () => (
    <Input
      id="select"
      label="Select"
      name="select"
      onChange={() => null}
      type="select"
    />
  ));
