import React from 'react';

interface headingProps {
  type?: number;
}

const Heading: React.FC<headingProps> = ({ children, type }) => {
  const Tag = `h${type}` as keyof JSX.IntrinsicElements;

  return <Tag>{children}</Tag>;
};

export default Heading;
