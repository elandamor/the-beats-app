// Image.spec.tsx
import * as React from 'react';
import { render } from '@app/utils/test-utils';

import Image from './index';

describe('Image', () => {
  it('should display an image', () => {
    render(<Image src="../../images/icon-512x512.png" />);
  });
});
