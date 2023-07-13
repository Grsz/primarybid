import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { MockedProvider } from '../../utils/test/react-testing-library';

import { CreateItemForm, urlInvalidErrorMessage } from '.';

const setup = () =>
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <CreateItemForm />
    </MockedProvider>,
  );

describe('Create item', () => {
  it('shows empty value in the form initially', async () => {
    const { getByLabelText, getByRole } = setup();

    const input = getByLabelText('URL') as HTMLInputElement;
    expect(input.value).toBe('');

    const button = getByRole('button', {
      name: 'Submit',
    });
    expect(button).toBeDisabled();
  });
  it('shows error message if url is invalid, button is disabled', async () => {
    const { getByRole, getByText } = setup();

    expect(getByText(urlInvalidErrorMessage)).toBeInTheDocument();

    const button = getByRole('button', {
      name: 'Submit',
    });
    expect(button).toBeDisabled();
  });
  it('makes the error disappear, button is enabled if input value is a valid URL', async () => {
    const { getByLabelText, getByRole, queryByText } = setup();

    const input = getByLabelText('URL') as HTMLInputElement;
    const button = getByRole('button', {
      name: 'Submit',
    });
    expect(button).toBeDisabled();

    fireEvent.change(input, { target: { value: 'https://0.com' } });

    expect(button).toBeEnabled();
    expect(queryByText(urlInvalidErrorMessage)).not.toBeInTheDocument();
  });
});
