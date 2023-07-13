import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { lexicographicSortSchema } from 'graphql';

import { itemResolvers } from './item/resolvers';
import { commonResolvers } from './common/resolvers';

const typeDefs = mergeTypeDefs(loadFilesSync('./**/*.graphql'));

const resolvers = mergeResolvers([itemResolvers, commonResolvers]);

export const executableSchema = lexicographicSortSchema(
  makeExecutableSchema({
    typeDefs,
    resolvers,
  }),
);
