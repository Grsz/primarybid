import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const { apiUrl } = window.customProps.config;

const httpLink = createHttpLink({
  uri: apiUrl,
  credentials: 'include',
});

const apolloClient = new ApolloClient({
  link: httpLink,
  credentials: 'include',
  cache: new InMemoryCache({}),
});

apolloClient.defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
  },
};

export { apolloClient };
