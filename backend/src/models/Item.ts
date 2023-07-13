import { Document, model, Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Item } from '../@types/api';

const ItemFields = {
  _id: {
    type: String,
    required: true,
    default: () => uuid(),
  },
  originalUrl: {
    type: String,
    required: true,
  },
  shortenedUrl: {
    type: String,
    required: true,
  },
};

export const ItemSchema = new Schema<Item>(ItemFields);
export const ItemModel = model<Document & Item>('items', ItemSchema);
