import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { persistCache } from 'apollo-cache-persist';
import { PersistentStorage, PersistedData } from 'apollo-cache-persist/types';
import { RetryLink } from 'apollo-link-retry';

import { GRAPHQL_ENDPOINT, NODE_ENV } from '@app/constants';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
});

const retryLink = new RetryLink();

let clientLink = ApolloLink.from([retryLink, httpLink]);

if (NODE_ENV === 'development') {
  import('./utils/apollo-utilities').then(({ errorLink, loggerLink }) => {
    clientLink = ApolloLink.from([loggerLink, errorLink, retryLink, httpLink]);
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
