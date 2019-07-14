import React from 'react';
import { storiesOf } from '@storybook/react';
import { FiShare } from 'react-icons/fi';

import Button from './index';

storiesOf('Button', module)
  .add('default', () => <Button />)
  .add('default with icon', () => <Button icon={<FiShare />} />)
  .add('outlined', () => <Button outlined />)
  .add('outlined with icon', () => <Button outlined icon={<FiShare />} />)
  .add('raised', () => <Button raised />)
  .add('raised with icon', () => <Button raised icon={<FiShare />} />);
