import React from 'react';
import { storiesOf } from '@storybook/react';

import SingleDatePicker from './index';

storiesOf('SingleDatePicker', module).add('default', () => (
  <SingleDatePicker id="dateOfBirth" date={null} />
));
