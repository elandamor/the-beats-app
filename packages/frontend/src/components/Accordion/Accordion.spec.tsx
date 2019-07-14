// Accordion.spec.tsx
import * as React from 'react';
import { render, fireEvent } from '@app/utils/test-utils';

import Accordion from './index';

const dummyText = 'This is a test accordion body of text.';

const accordionProps = {
  children: <p>{dummyText}</p>,
  title: 'Test',
};

describe('WrappedMutation', () => {
  it('should render without crashing', () => {
    render(<Accordion {...accordionProps} />);
  });

  it('should render in collapsed state initially', () => {
    render(<Accordion {...accordionProps} />);
  });

  it('should render in expanded state', () => {
    const { getByText } = render(<Accordion {...accordionProps} />);

    const accordionHeaderNode = getByText('Test');
    fireEvent.click(accordionHeaderNode);

    const accordionBodyTextNode = getByText(dummyText);
    expect(accordionBodyTextNode).toBeDefined();
  });
});
