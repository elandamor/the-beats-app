import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './index';
import Inner from '../Inner';
import Flex from '../Flex';
import Chip from '../Chip';

storiesOf('Card', module)
  .add('default', () => (
    <Inner>
      <Card
        description="Rythms of life’s mission is to provide immediate and lasting change for refugees and asylum-seekers…"
        title="Rythms of life"
      />
    </Inner>
  ))
  .add('default with chips', () => (
    <Inner>
      <Card
        description="Rythms of life’s mission is to provide immediate and lasting change for refugees and asylum-seekers…"
        title="Rythms of life"
      >
        <Flex>
          <Chip text="Social Welfare" />
          <Chip text="Sports Club" />
        </Flex>
      </Card>
    </Inner>
  ))
  .add('default with image and chips', () => (
    <Inner>
      <Card
        description="Rythms of life’s mission is to provide immediate and lasting change for refugees and asylum-seekers…"
        image="../images"
        title="Rythms of life"
      >
        <Flex>
          <Chip text="Social Welfare" />
          <Chip text="Sports Club" />
        </Flex>
      </Card>
    </Inner>
  ));
