// MultiStep.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import MultiStep from './index';

const STEPS = [
  { name: 'Step 1', component: <div>Step 1</div> },
  { name: 'Step 2', component: <div>Step 2</div> },
  { name: 'Step 3', component: <div>Step 3</div> },
];

describe('MultiStep', () => {
  it('should render without crashing', () => {
    render(<MultiStep steps={STEPS} />);
  });
});
