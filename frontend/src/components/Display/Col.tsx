import React, { FC, HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export const Col: FC<Props> = ({ children, className = '', ...props }) => (
  <div className={`col ${className}`} {...props}>
    {children}
  </div>
);
