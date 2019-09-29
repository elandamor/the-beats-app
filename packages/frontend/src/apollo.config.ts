import {
  GRAPHQL_ENDPOINT,
  JWT_LOCAL_STORAGE_KEY,
  NODE_ENV,
} from '@app/constants';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { RetryLink } from 'apollo-link-retry';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(JWT_LOCAL_STORAGE_KEY);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const retryLink = new RetryLink();

let clientLink = ApolloLink.from([retryLink, authLink, httpLink]);

if (NODE_ENV === 'development') {
  import('./utils/apollo-utilities').then(({ errorLink, loggerLink }) => {
    clientLink = ApolloLink.from([
      loggerLink,
      errorLink,
      retryLink,
      authLink,
      httpLink,
    ]);
  });
}

// persistCache({
//   cache,
//   storage: window.localStorage as PersistentStorage<
//     PersistedData<NormalizedCacheObject>
//   >,
// });

const client = new ApolloClient({
  cache,
  link: clientLink,
});

export default client;
