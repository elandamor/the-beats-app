import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from './index';

storiesOf('Modal', module).add('default', () => (
  <Modal trigger={<button>Modal</button>}>
    <div>testing...</div>
  </Modal>
));
