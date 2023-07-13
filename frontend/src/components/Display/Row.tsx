import React, { FC, HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export const Row: FC<Props> = ({ children, className = '', ...props }) => (
  <div className={`row ${className}`} {...props}>
    {children}
  </div>
);
