import React, { FC } from 'react';

import { useGetItemsQuery } from '../../hooks/apollo/apollo-generated';
import { Col } from '../../components/Display/Col';

export const loadingText = 'Loading...';

export const ItemsList: FC = () => {
  const { data, loading } = useGetItemsQuery({
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
  });

  return (
    <Col>
      {loading ? <p>{loadingText}</p> : null}
      {data?.getItems?.data?.map(({ _id, shortenedUrl }) => (
        <p data-testid="item" key={_id}>
          {shortenedUrl}
        </p>
      ))}
    </Col>
  );
};
