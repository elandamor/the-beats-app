// Spacer.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Spacer from './index';

describe('Spacer', () => {
  it('should render without crashing', () => {
    const { container } = render(<Spacer spacing={24} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
