import { QueryGetItemsArgs } from '../../../../@types/api';
import { DEFAULT_LIMIT } from '../../../../constants/DefaultLimit';
import { ItemModel } from '../../../../models/Item';

export const getItems = async (
  parent: null,
  { limit = DEFAULT_LIMIT, offset = 0 }: QueryGetItemsArgs,
) => {
  const data = await ItemModel.find({}).limit(limit).skip(offset).lean().exec();

  return {
    data,
    limit,
    offset,
  };
};
