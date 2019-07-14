// ErrorBoundary.spec.tsx
import * as React from 'react';
import { render } from '@app/utils/test-utils';

import ErrorBoundary from './index';

class ComponentThatWillFail extends React.Component {
  componentDidMount() {
    throw new Error('This component failed on purpose...');
  }

  render() {
    return null;
  }
}

describe('Error Boundary', () => {
  it('should display default ErrorBoundary', () => {
    spyOn(console, 'error');

    render(
      <ErrorBoundary>
        <ComponentThatWillFail />
      </ErrorBoundary>,
    );
  });

  it('should display ErrorBoundary with custom fallback', () => {
    spyOn(console, 'error');

    render(
      <ErrorBoundary template={<h1>Oops! Something went wrong.</h1>}>
        <ComponentThatWillFail />
      </ErrorBoundary>,
    );
  });
});
