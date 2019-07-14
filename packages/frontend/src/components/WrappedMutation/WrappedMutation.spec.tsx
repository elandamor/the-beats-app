// WrappedMutation.spec.tsx
import * as React from 'react';
import {
  render,
  waitForElement,
  fireEvent,
  waitForDomChange,
} from '@testing-library/react';
import { MockedProvider } from 'react-apollo/test-utils';
import { GraphQLError } from 'graphql';
import gql from 'graphql-tag';

import WrappedMutation from './index';

const deleteTodoGQL = gql`
  mutation deleteTodo($id: String!) {
    deleteTodo(id: $id) {
      id
      text
    }
  }
`;

const DeleteTodo = () => (
  // TODO: onError prop feels like a hack... Not sure if this causes an invalid test success.
  <WrappedMutation
    mutation={deleteTodoGQL}
    onError={() => {}}
    overrideStates={true}
  >
    {(mutateFunc, { data, error, loading }) => {
      if (loading) {
        return <div data-testid="loading">Loading...</div>;
      }
      if (error) {
        return <div data-testid="error">Error!</div>;
      }
      if (data) {
        return <div>Deleted!</div>;
      }

      return (
        <button
          data-testid="deleteButton"
          onClick={() => mutateFunc({ variables: { id: '1' } })}
        >
          Delete todo
        </button>
      );
    }}
  </WrappedMutation>
);

describe('WrappedMutation', () => {
  it('should render without crashing', () => {
    render(
      <MockedProvider mocks={[]}>
        <DeleteTodo />
      </MockedProvider>,
    );
  });

  it('should render loading state initially', async () => {
    const deleteTodo = { id: '1', text: 'First todo' };

    const mocks = [
      {
        request: {
          query: deleteTodoGQL,
          variables: { id: '1' },
        },
        result: { data: { deleteTodo } },
      },
    ];

    const { getByTestId, getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <DeleteTodo />
      </MockedProvider>,
    );

    // find the button and simulate a click
    const deleteButtonNode = await waitForElement(() =>
      getByTestId('deleteButton'),
    );
    fireEvent.click(deleteButtonNode);

    const loadingText = getByText('Loading...');
    expect(loadingText).toBeDefined();
  });

  it('should fire mutation and give visual feedback', async () => {
    const deleteTodo = { id: '1', text: 'First todo' };

    const mocks = [
      {
        request: {
          query: deleteTodoGQL,
          variables: { id: '1' },
        },
        result: { data: { deleteTodo } },
      },
    ];

    const { getByTestId, getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <DeleteTodo />
      </MockedProvider>,
    );

    // find the button and simulate a click
    const deleteButtonNode = await waitForElement(() =>
      getByTestId('deleteButton'),
    );
    fireEvent.click(deleteButtonNode);

    await waitForDomChange();

    const deletedText = getByText('Deleted!');
    expect(deletedText).toBeDefined();
  });

  it('should render error UI', async () => {
    const mocks = [
      {
        request: {
          query: deleteTodoGQL,
          variables: { id: '1' },
        },
        result: {
          errors: [new GraphQLError('Error!')],
        },
      },
    ];

    const { getByTestId, getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <DeleteTodo />
      </MockedProvider>,
    );

    const deleteButtonNode = await waitForElement(() =>
      getByTestId('deleteButton'),
    );
    fireEvent.click(deleteButtonNode);

    await waitForDomChange();

    const errorText = await getByText('Error!');
    expect(errorText).toBeDefined();
  });
});
