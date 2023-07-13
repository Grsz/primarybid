import React, { FC } from 'react';

import { Col } from '../../components/Display/Col';
import { CreateItemForm } from '../CreateItemForm';
import { ItemsList } from '../ItemsList';

export const Items: FC = () => {
  return (
    <Col className="section margin-auto padding-y-xl padding-x-m">
      <CreateItemForm />
      <ItemsList />
    </Col>
  );
};
