import * as Types from './index';

export type GetItemsQueryVariables = Types.Exact<{
  limit?: Types.Maybe<Types.Scalars['BigInt']>;
  offset?: Types.Maybe<Types.Scalars['BigInt']>;
}>;


export type GetItemsQuery = { getItems: { offset: any, limit: any, data: Array<{ _id: string, shortenedUrl: string }> } };

export type CountItemsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CountItemsQuery = { countItems: any };

export type CreateItemMutationVariables = Types.Exact<{
  data: Types.CreateItemInput;
}>;


export type CreateItemMutation = { createItem: { _id: string } };
