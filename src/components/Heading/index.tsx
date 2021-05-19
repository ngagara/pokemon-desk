import React from 'react';

interface headingProps {
  lvl?: number;
}

const Heading: React.FC<headingProps> = ({ children, lvl }) => {
  const Tag = `h${lvl}` as keyof JSX.IntrinsicElements;

  return <Tag>{children}</Tag>;
};

export default Heading;
