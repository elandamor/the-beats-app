// Button.spec.tsx
import * as React from 'react';
import { fireEvent, render } from '@app/utils/test-utils';

import Button from './index';

describe('Button', () => {
  it('should render without crashing', () => {
    render(<Button />);
  });

  it('should render with custom text', () => {
    const props = {
      text: 'Test',
    };

    const { getByText } = render(<Button {...props} />);
    const testButton = getByText(props.text);
    expect(testButton).toBeDefined();
  });

  it('should handle onClick event', () => {
    function Counter() {
      const [count, setCount] = React.useState(0);

      const props = {
        onClick: () => setCount(count + 1),
        text: count.toString(),
      };

      return <Button data-testid="button" {...props} />;
    }

    const { getByTestId } = render(<Counter />);

    const buttonNode = getByTestId('button');
    fireEvent.click(buttonNode);

    // @ts-ignore - Property 'toHaveTextContent' does not exist on type 'Matchers<HTMLElement>'
    expect(buttonNode).toHaveTextContent('1');
  });
});
