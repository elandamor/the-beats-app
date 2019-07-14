// WrappedQuery.spec.tsx
import React from 'react';
import {
  render,
  waitForElement,
  waitForDomChange,
} from '@testing-library/react';
import gql from 'graphql-tag';
import { MockedProvider } from 'react-apollo/test-utils';

import WrappedQuery from './index';

const getTodosGQL = gql`
  query getTodos {
    todos {
      id
      text
    }
  }
`;

const mocks = [
  {
    request: {
      query: getTodosGQL,
    },
    result: {
      data: {
        todos: [
          { id: '1', text: 'First todo' },
          { id: '2', text: 'Second todo' },
        ],
      },
    },
  },
];

const Todos = () => (
  <WrappedQuery query={getTodosGQL} overrideStates={true}>
    {({ data, error, loading }) => {
      if (loading) {
        return <div data-testid="loading">Loading...</div>;
      }
      if (error) {
        return <div data-testid="error">Error!!!</div>;
      }

      return data.todos.map((todo: any, idx: number) => (
        <div key={todo.id} data-testid={`todo:${idx}`}>
          {todo.text}
        </div>
      ));
    }}
  </WrappedQuery>
);

describe('WrappedQuery', () => {
  it('renders without crashing', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Todos />
      </MockedProvider>,
    );
  });

  it('renders loading state', async () => {
    const { getByText } = render(
      <MockedProvider mocks={[]}>
        <Todos />
      </MockedProvider>,
    );

    const loadingText = getByText('Loading...');
    expect(loadingText).toBeDefined();
  });

  it('renders todos', async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Todos />
      </MockedProvider>,
    );

    const firstTodoTextNode = await waitForElement(() => getByTestId('todo:0'));
    // @ts-ignore
    expect(firstTodoTextNode).toHaveTextContent('First todo');
  });

  it('renders error UI', async () => {
    const todoMock = {
      request: { query: getTodosGQL },
      error: new Error('Oops!!!'),
    };

    const { getByTestId } = render(
      <MockedProvider mocks={[todoMock]} addTypename={false}>
        <Todos />
      </MockedProvider>,
    );

    await waitForDomChange();

    const errorTextNode = await waitForElement(() => getByTestId('error'));
    // @ts-ignore
    expect(errorTextNode).toHaveTextContent('Error!!!');
  });
});
