import * as Types from '../../@types/api/query-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}

export const GetItemsDocument = gql`
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

/**
 * __useGetItemsQuery__
 *
 * To run a query within a React component, call `useGetItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetItemsQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetItemsQuery, Types.GetItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetItemsQuery, Types.GetItemsQueryVariables>(GetItemsDocument, options);
      }
export function useGetItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetItemsQuery, Types.GetItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetItemsQuery, Types.GetItemsQueryVariables>(GetItemsDocument, options);
        }
export type GetItemsQueryHookResult = ReturnType<typeof useGetItemsQuery>;
export type GetItemsLazyQueryHookResult = ReturnType<typeof useGetItemsLazyQuery>;
export type GetItemsQueryResult = Apollo.QueryResult<Types.GetItemsQuery, Types.GetItemsQueryVariables>;
export const CountItemsDocument = gql`
    query countItems {
  countItems
}
    `;

/**
 * __useCountItemsQuery__
 *
 * To run a query within a React component, call `useCountItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountItemsQuery(baseOptions?: Apollo.QueryHookOptions<Types.CountItemsQuery, Types.CountItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.CountItemsQuery, Types.CountItemsQueryVariables>(CountItemsDocument, options);
      }
export function useCountItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.CountItemsQuery, Types.CountItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.CountItemsQuery, Types.CountItemsQueryVariables>(CountItemsDocument, options);
        }
export type CountItemsQueryHookResult = ReturnType<typeof useCountItemsQuery>;
export type CountItemsLazyQueryHookResult = ReturnType<typeof useCountItemsLazyQuery>;
export type CountItemsQueryResult = Apollo.QueryResult<Types.CountItemsQuery, Types.CountItemsQueryVariables>;
export const CreateItemDocument = gql`
    mutation createItem($data: CreateItemInput!) {
  createItem(data: $data) {
    _id
  }
}
    `;
export type CreateItemMutationFn = Apollo.MutationFunction<Types.CreateItemMutation, Types.CreateItemMutationVariables>;

/**
 * __useCreateItemMutation__
 *
 * To run a mutation, you first call `useCreateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemMutation, { data, loading, error }] = useCreateItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateItemMutation(baseOptions?: Apollo.MutationHookOptions<Types.CreateItemMutation, Types.CreateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.CreateItemMutation, Types.CreateItemMutationVariables>(CreateItemDocument, options);
      }
export type CreateItemMutationHookResult = ReturnType<typeof useCreateItemMutation>;
export type CreateItemMutationResult = Apollo.MutationResult<Types.CreateItemMutation>;
export type CreateItemMutationOptions = Apollo.BaseMutationOptions<Types.CreateItemMutation, Types.CreateItemMutationVariables>;