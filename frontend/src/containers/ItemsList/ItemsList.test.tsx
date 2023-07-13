import React from 'react';
import { MockedResponse } from '@apollo/client/testing';
import { render, waitFor } from '@testing-library/react';

import { GetItems } from '../../graphql/queries/item';
import { MockedProvider } from '../../utils/test/react-testing-library';

import { ItemsList, loadingText } from '.';

const getItemsMockResult = [
  {
    _id: '1',
    originalUrl: 'https://1.com',
    shortenedUrl: 'https://shortener.com/1',
  },
  {
    _id: '2',
    originalUrl: 'https://2.com',
    shortenedUrl: 'https://shortener.com/2',
  },
];
const getItems = {
  request: {
    query: GetItems,
  },
  result: {
    data: {
      getItems: {
        offset: 0,
        limit: 25,
        data: getItemsMockResult,
      },
    },
  },
};

const setup = (mocks: MockedResponse[]) =>
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ItemsList />
    </MockedProvider>,
  );

describe('ItemsList', () => {
  it('shows shortened urls of the items returned by the API', async () => {
    const { getAllByTestId, getByText, queryByText } = setup([getItems]);

    await waitFor(() => expect(getByText(loadingText)).toBeInTheDocument());
    await waitFor(() =>
      expect(queryByText(loadingText)).not.toBeInTheDocument(),
    );
    await waitFor(() =>
      expect(getAllByTestId('item').length).toBe(getItemsMockResult.length),
    );

    getItemsMockResult.forEach(({ shortenedUrl }) => {
      expect(getByText(shortenedUrl)).toBeInTheDocument();
    });
  });
});
