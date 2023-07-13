import React from 'react';
import { onError } from '@apollo/client/link/error';
import * as apolloTesting from '@apollo/client/testing';
import { ApolloLink } from '@apollo/client';

export const MockedProvider = ({
  children,
  mocks,
  ...props
}: apolloTesting.MockedProviderProps & {
  children: React.ReactNode;
  mocks: Readonly<apolloTesting.MockedResponse>[];
}) => {
  const mockLink = new apolloTesting.MockLink(mocks);
  const errorLoggingLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        // eslint-disable-next-line no-console
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );

    // eslint-disable-next-line no-console
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });
  const link = ApolloLink.from([errorLoggingLink, mockLink]);

  return (
    <apolloTesting.MockedProvider {...props} mocks={mocks} link={link}>
      {children}
    </apolloTesting.MockedProvider>
  );
};
