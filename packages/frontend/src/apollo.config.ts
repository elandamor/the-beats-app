import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { persistCache } from 'apollo-cache-persist';
import { PersistentStorage, PersistedData } from 'apollo-cache-persist/types';
import { RetryLink } from 'apollo-link-retry';
import { setContext } from 'apollo-link-context';

import { GRAPHQL_ENDPOINT, NODE_ENV } from '@app/constants';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjankwcWFleXowMDdvMDc0MWJ3NDA5YWxwIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTYzMTE4OTM0LCJleHAiOjE1NjM3MjM3MzR9.B6PkCWxlpPzD-s4InMaQ75_YXIGuGWdF7cOXLcllOj4';
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

persistCache({
  cache,
  storage: window.localStorage as PersistentStorage<
    PersistedData<NormalizedCacheObject>
  >,
});

const client = new ApolloClient({
  cache,
  link: clientLink,
});

export default client;
