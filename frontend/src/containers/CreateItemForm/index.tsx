import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { useCreateItemMutation } from '../../hooks/apollo/apollo-generated';
import { Col } from '../../components/Display/Col';

const isUrlInvalid = (value: string) => {
  const urlRegex =
    /^(https:\/\/)?(www.)?([a-zA-Z0-9])+([-.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/[^\s]*)?$/gm;

  return !value || !urlRegex.test(value);
};
export const urlInvalidErrorMessage = `Please enter a valid url`;

const getUrlError = (value: string) =>
  isUrlInvalid(value) ? urlInvalidErrorMessage : '';

export const CreateItemForm: FC = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(getUrlError(value));

  const [createItem, { loading }] = useCreateItemMutation({
    refetchQueries: ['getItems'],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setValue(newValue);
  };

  const handleSubmit = () => {
    if (error) return;

    createItem({
      variables: {
        data: { originalUrl: value },
      },
      onCompleted: () => {
        setValue('');
      },
    });
  };

  useEffect(() => {
    setError(getUrlError(value));
  }, [value]);

  return (
    <Col className="gap-s">
      <label htmlFor="url">URL</label>
      <input
        id="url"
        type="text"
        placeholder="https://example.com"
        value={value}
        onChange={handleChange}
      />
      <button disabled={!!error || loading} onClick={handleSubmit}>
        Submit
      </button>
      <p className="color-red">{error}</p>
    </Col>
  );
};
