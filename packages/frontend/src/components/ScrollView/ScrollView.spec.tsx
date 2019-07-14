// ScrollView.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import ScrollView from './index';

describe('ScrollView', () => {
  it('should render without crashing', () => {
    const { container } = render(<ScrollView />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
