// Grid.spec.tsx
import * as React from 'react';
import { render } from '@app/utils/test-utils';

import Grid from './index';

describe('Grid', () => {
  it('should display a grid', () => {
    const { container } = render(
      <Grid columns={2}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Grid>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
