import React from 'react';
import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
}

const HTMLHeader: React.FC<Props> = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  );
}

export default HTMLHeader;