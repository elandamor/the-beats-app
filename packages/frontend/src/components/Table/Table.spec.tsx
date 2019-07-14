// Table.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Table from './index';

const data = [
  { one: '1.1', two: '1.2' },
  { one: '2.1', two: '2.2' },
  { one: '3.1', two: '3.2' },
  { one: '4.1', two: '4.2' },
];

const columns = [
  { accessor: 'one', Header: 'One' },
  { accessor: 'two', Header: 'Two' },
];

describe('Table', () => {
  it('should render without crashing', () => {
    render(<Table data={data} columns={columns} />);
  });
});
