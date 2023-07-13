import { ItemModel } from '../../../../models/Item';

export const countItems = () => ItemModel.count({}).exec();
