// Equalizer.spec.tsx
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Equalizer from './index';

describe('<Equalizer />', () => {
  it('should display a loading bar', () => {
    const component = renderer.create(<Equalizer />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
