import React, { FC } from 'react';
import { ApolloProvider } from '@apollo/client';

import '../../styles/Global.scss';
import { apolloClient } from '../../utils/apollo';
import { Items } from '../Items';

export const App: FC = () => (
  <ApolloProvider client={apolloClient}>
    <Items />
  </ApolloProvider>
);
