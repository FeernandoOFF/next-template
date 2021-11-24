import { Header } from '@components/Header';
import * as React from 'react';

export interface IContactProps {}

export default function Contact(props: IContactProps) {
  return (
    <div>
      <Header></Header>
      <h1>Contact</h1>
    </div>
  );
}
