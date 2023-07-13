import { gql } from '@apollo/client';

import { getNamesFromGqlTags } from './graphql-tag';

describe('graphql-tag', () => {
  describe('getNamesFromGqlTags', () => {
    test('Extracts graphql query/mutation name from tag', () => {
      expect(
        getNamesFromGqlTags(gql`
          query TestName {
            foo {
              id
            }
          }
        `),
      ).toEqual(['TestName']);
    });
  });
});
