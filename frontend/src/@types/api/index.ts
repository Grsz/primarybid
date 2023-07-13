/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. BigInt can represent values between -(2^53) + 1 and 2^53 - 1.  */
  BigInt: number;
};

export type CreateItemInput = {
  originalUrl: Scalars['String'];
};

export type GetItemsResponse = {
  data: Array<Item>;
  limit: Scalars['BigInt'];
  offset: Scalars['BigInt'];
};

export type Item = {
  _id: Scalars['String'];
  originalUrl: Scalars['String'];
  shortenedUrl: Scalars['String'];
};

export type Mutation = {
  createItem: Item;
};


export type MutationCreateItemArgs = {
  data: CreateItemInput;
};

export type Query = {
  countItems: Scalars['BigInt'];
  getItems: GetItemsResponse;
};


export type QueryGetItemsArgs = {
  limit?: Maybe<Scalars['BigInt']>;
  offset?: Maybe<Scalars['BigInt']>;
};
