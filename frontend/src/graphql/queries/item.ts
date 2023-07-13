import { gql } from '@apollo/client';

export const GetItems = gql`
  query getItems($limit: BigInt, $offset: BigInt) {
    getItems(limit: $limit, offset: $offset) {
      offset
      limit
      data {
        _id
        shortenedUrl
      }
    }
  }
`;

export const CountItems = gql`
  query countItems {
    countItems
  }
`;

export const CreateItem = gql`
  mutation createItem($data: CreateItemInput!) {
    createItem(data: $data) {
      _id
    }
  }
`;
