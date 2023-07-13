import { ItemModel } from '../../models/Item';

export const createSeedItems = async (amount = 50) => {
  // using sequential creation to guarantee order
  for (let i = 0; i < amount; i++) {
    await ItemModel.create({
      _id: i,
      originalUrl: i,
      shortenedUrl: i,
    });
  }
};
