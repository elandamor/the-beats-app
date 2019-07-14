// Flex.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Flex from './index';

describe('Flex', () => {
  it('should render without crashing', () => {
    const { container } = render(<Flex />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
