import { countItems } from './resolvers/countItems';
import { createItem } from './resolvers/createItem';
import { getItems } from './resolvers/getItems';

export const itemResolvers = {
  Query: {
    getItems: getItems,
    countItems: countItems,
  },
  Mutation: {
    createItem: createItem,
  },
};
