import React from 'react';
import { storiesOf } from '@storybook/react';

import Accordion from './index';

storiesOf('Accordion', module).add('default', () => (
  <React.Fragment>
    <Accordion title="Title">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
        voluptatibus vero voluptas placeat fugit ipsa rem error commodi minus
        est quam laborum corrupti sunt ducimus. Dolorum provident a error
        distinctio!
      </p>
    </Accordion>
    <Accordion title="Title">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
        voluptatibus vero voluptas placeat fugit ipsa rem error commodi minus
        est quam laborum corrupti sunt ducimus. Dolorum provident a error
        distinctio!
      </p>
    </Accordion>
  </React.Fragment>
));
