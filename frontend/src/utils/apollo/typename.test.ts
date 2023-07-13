import { removeTypenames } from './typename';

describe('typename', () => {
  describe('removeTypenames', () => {
    test('removes deeply nested "__typename" fields from graphql data', () => {
      const test = {
        __typename: 'foo',
        value: 'foo',
        bar: {
          __typename: 'bar',
          value: 'bar',
          baz: [
            {
              value: 'baz',
              __typename: 'baz',
            },
          ],
        },
      };

      expect(removeTypenames(test)).toMatchSnapshot();
    });
  });
});
