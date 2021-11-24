import { Header } from '@components/Header';
import { Card } from 'antd';
import * as React from 'react';

export interface IGalleryProps {}

export default function Gallery(props: IGalleryProps) {
  return (
    <div>
      <Header></Header>
      <h1>Hola</h1>
      <Card>
        <h1>hola</h1>
      </Card>
    </div>
  );
}
