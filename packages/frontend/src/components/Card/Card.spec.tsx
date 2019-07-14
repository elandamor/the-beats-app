// Card.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Card from './index';

describe('Card', () => {
  it('should render without crashing', () => {
    render(<Card />);
  });

  it('should render with an image', () => {
    const props = {
      image: 'image.png',
    };

    render(<Card {...props} />);
  });

  it('should render with an image and a title', () => {
    const props = {
      image: 'image.png',
      title: 'Title',
    };

    const { getByText } = render(<Card {...props} />);

    const titleNode = getByText(props.title);

    expect(titleNode).toBeDefined();
  });

  it('should render with an image, title and description', () => {
    const props = {
      image: 'image.png',
      title: 'Title',
      description: 'This is a test description',
    };

    const { getByText } = render(<Card {...props} />);

    const titleNode = getByText(props.title);
    const descriptionNode = getByText(props.description);

    expect(titleNode).toBeDefined();
    expect(descriptionNode).toBeDefined();
  });
});
