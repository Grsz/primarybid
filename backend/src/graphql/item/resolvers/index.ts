import { MutationCreateItemArgs } from '../../../@types/api';
import { ItemModel } from '../../../models/Item';
import { shortenUrl } from '../../../utils/shortenUrl';
import { getItems } from './getItems';

export const itemResolvers = {
  Query: {
    getItems: getItems,
    countItems: () => {
      return ItemModel.count({}).exec();
    },
  },
  Mutation: {
    createItem: async (parent: null, { data }: MutationCreateItemArgs) => {
      const shortenedUrl = shortenUrl(data.originalUrl);
      const item = await ItemModel.create({
        originalUrl: data.originalUrl,
        shortenedUrl,
      });

      return item;
    },
  },
};
