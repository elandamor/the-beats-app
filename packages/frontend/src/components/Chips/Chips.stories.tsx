import React from 'react';
import { storiesOf } from '@storybook/react';

import Chips from './index';

const data = ['Apple', 'Samsung', 'Huawei'];

storiesOf('Chips', module).add('default', () => (
  <Chips fontSize={1} value={data} />
));
