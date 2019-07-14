// HorizontalScroller.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import HorizontalScroller from './index';

describe('HorizontalScroller', () => {
  it('should render without crashing', () => {
    render(
      <HorizontalScroller>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </HorizontalScroller>,
    );
  });
});
