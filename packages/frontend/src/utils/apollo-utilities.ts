import { ApolloLink, Operation, NextLink } from 'apollo-link';
import { onError } from 'apollo-link-error';

const formatError = (message: any, path?: any) => {
  if (path) {
    const headerCss = [
      'color: gray; font-weight: lighter', // title
      'color: #333; font-weight: 600', // message
      'color: gray; font-weight: lighter', // on
      'color: #333; font-weight: 600', // path
      'color: gray; font-weight: lighter', // request.
    ];

    const parts = ['%c message'];

    parts.push(`%c${message}`);
    parts.push('%con');
    parts.push(`%c${path.join('.')}`);
    parts.push('%crequest');

    return [parts.join(' '), ...headerCss];
  }

  const headerCss = [
    'color: gray; font-weight: lighter', // title
    'color: #333; font-weight: 600', // message
  ];

  const parts = ['%c message'];

  parts.push(`%c${message}`);

  return [parts.join(' '), ...headerCss];
};

const formatMessage = (operationType: any, operation: any, elapsed?: any) => {
  const headerCss = [
    'color: gray; font-weight: lighter', // title
    `color: ${operationType === 'query' ? '#02B875' : '#03A9F4'};`, // operationType
    'color: #000;', // operationName
  ];

  const parts = ['%c apollo'];

  parts.push(`%c${operationType}`);
  parts.push(`%c${operation.operationName}`);

  if (elapsed) {
    parts.push(`%c(in ${elapsed} ms)`);
    headerCss.push('color: gray; font-weight: lighter;'); // time
  }

  return [parts.join(' '), ...headerCss];
};

const errorLink = onError(({ graphQLErrors, networkError, operation }: any) => {
  if (graphQLErrors) {
    const errorType = 'graphQLError';
    const group = formatMessage(errorType, operation);

    console.groupCollapsed(...group);

    graphQLErrors.map(({ message, path }: any) => {
      const error = formatError(message, path);
      console.log(...error);
      return { message, path };
    });

    // @ts-ignore
    console.groupEnd(...group);
  }

  if (networkError) {
    const errorType = 'networkError';
    const group = formatMessage(errorType, operation);

    console.groupCollapsed(...group);

    const error = formatError(networkError.message);
    console.log(...error);

    // @ts-ignore
    console.groupEnd(...group);
  }
});

const loggerLink = new ApolloLink(
  (operation: Operation, forward?: NextLink): any => {
    const startTime = new Date().getTime();

    return (
      forward &&
      forward(operation).map((result) => {
        // @ts-ignore
        const operationType = operation.query.definitions[0].operation;
        const elapsed = new Date().getTime() - startTime;

        const group = formatMessage(operationType, operation, elapsed);
        console.groupCollapsed(...group);

        console.log('INIT', operation);
        console.log('RESULT', result);

        // @ts-ignore
        console.groupEnd(...group);

        return result;
      })
    );
  },
);

export { errorLink, loggerLink };
