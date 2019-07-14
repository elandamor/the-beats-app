// Box.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Box from './index';

describe('Box', () => {
  it('should render without crashing', () => {
    const { container } = render(<Box />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
