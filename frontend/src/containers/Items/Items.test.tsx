import React from 'react';
import { MockedResponse } from '@apollo/client/testing';
import { fireEvent, render, waitFor } from '@testing-library/react';

import { CreateItem, GetItems } from '../../graphql/queries/item';
import { MockedProvider } from '../../utils/test/react-testing-library';
import { loadingText } from '../ItemsList';
import { urlInvalidErrorMessage } from '../CreateItemForm';

import { Items } from '.';

const newMockItem = {
  _id: '0',
  originalUrl: 'https://0.com',
  shortenedUrl: 'https://shortener.com/0',
};
const createItem = {
  request: {
    query: CreateItem,
    variables: {
      data: {
        originalUrl: newMockItem.originalUrl,
      },
    },
  },
  result: {
    data: {
      createItem: newMockItem,
    },
  },
};

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

const getItemsAfterCreating = {
  request: {
    query: GetItems,
  },
  result: {
    data: {
      getItems: {
        offset: 0,
        limit: 25,
        data: [...getItemsMockResult, newMockItem],
      },
    },
  },
};

const setup = (mocks: MockedResponse[]) =>
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Items />
    </MockedProvider>,
  );

describe('Items', () => {
  it('creating a new item adds it to the list', async () => {
    const {
      getAllByTestId,
      getByText,
      queryByText,
      getByLabelText,
      getByRole,
    } = setup([getItems, createItem, getItemsAfterCreating]);

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

    const input = getByLabelText('URL') as HTMLInputElement;
    const button = getByRole('button', {
      name: 'Submit',
    });
    expect(button).toBeDisabled();

    fireEvent.change(input, { target: { value: newMockItem.originalUrl } });

    expect(button).toBeEnabled();
    expect(queryByText(urlInvalidErrorMessage)).not.toBeInTheDocument();

    fireEvent.click(button);

    await waitFor(() => expect(getByText(loadingText)).toBeInTheDocument());
    await waitFor(() =>
      expect(queryByText(loadingText)).not.toBeInTheDocument(),
    );
    await waitFor(() =>
      expect(getAllByTestId('item').length).toBe(getItemsMockResult.length + 1),
    );

    [...getItemsMockResult, newMockItem].forEach(({ shortenedUrl }) => {
      expect(getByText(shortenedUrl)).toBeInTheDocument();
    });
  });
});
