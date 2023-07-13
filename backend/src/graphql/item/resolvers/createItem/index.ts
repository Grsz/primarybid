import { MutationCreateItemArgs } from '../../../../@types/api';
import { ItemModel } from '../../../../models/Item';
import { shortenUrl } from '../../../../utils/shortenUrl';

export const createItem = async (
  parent: null,
  { data }: MutationCreateItemArgs,
) => {
  const shortenedUrl = shortenUrl(data.originalUrl);
  const item = await ItemModel.create({
    originalUrl: data.originalUrl,
    shortenedUrl,
  });

  return item.toObject();
};
