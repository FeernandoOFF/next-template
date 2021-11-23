import * as React from 'react';
import Head from 'next/head';

export interface ISeoProps {
  title: string;
  metaDescription?: string;
  metaKeywords?: string;
}

export function Seo(props: ISeoProps) {
  return (
    <Head>
      <title>Title</title>
      {props.metaDescription && (
        <meta name="description" content={props.metaDescription} />
      )}
      {props.metaKeywords && (
        <meta name="keywords" content={props.metaKeywords} />
      )}
    </Head>
  );
}
