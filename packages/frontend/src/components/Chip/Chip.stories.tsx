import React from 'react';
import { storiesOf } from '@storybook/react';

import Chip from './index';

storiesOf('Chip', module)
  .add('with text', () => <Chip text="Thandolwethu Mpofu" />)
  .add('with text and remove button', () => (
    <Chip
      text="Thandolwethu Mpofu"
      showRemove
      onRemove={() => console.log('Removing...')}
    />
  ));
