import React, { FC } from 'react';
import {
  Mutation,
  MutationFn,
  MutationProps,
  MutationResult,
} from 'react-apollo';

import LoadingBar from '../LoadingBar';

interface IWrappedMutationProps extends MutationProps {
  loader?: React.ReactNode;
  overrideStates?: boolean;
}

/**
 * @render react
 * @name WrappedMutation component
 * @description WrappedMutation component.
 * @example
 * <WrappedMutation />
 */

const WrappedMutation: FC<IWrappedMutationProps> = ({ children, ...rest }) => (
  <Mutation {...rest}>
    {(mutateFn: MutationFn, result: MutationResult) => (
      <React.Fragment>
        {!rest.overrideStates &&
          result.loading &&
          (rest.loader || <LoadingBar />)}
        {children(mutateFn, result)}
      </React.Fragment>
    )}
  </Mutation>
);

WrappedMutation.defaultProps = {
  loader: undefined,
  overrideStates: false,
};

export default WrappedMutation;
