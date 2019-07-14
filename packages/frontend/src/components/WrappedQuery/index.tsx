import React, { FC } from 'react';
import { Query, QueryProps, QueryResult } from 'react-apollo';

import LoadingBar from '../LoadingBar';

interface IWrappedQueryProps extends QueryProps {
  loader?: React.ReactNode;
  overrideStates?: boolean;
}

/**
 * @render react
 * @name WrappedQuery component
 * @description WrappedQuery component.
 * @example
 * <WrappedQuery />
 */

const WrappedQuery: FC<IWrappedQueryProps> = ({ children, ...rest }) => (
  <Query {...rest}>
    {(result: QueryResult) => {
      if (!rest.overrideStates) {
        if (result.loading) {
          return rest.loader || <LoadingBar />;
        }
        if (result.error) return <span>{`Error!: ${result.error}`}</span>;
      }

      return children(result);
    }}
  </Query>
);

WrappedQuery.defaultProps = {
  loader: undefined,
  overrideStates: false,
};

export default WrappedQuery;
