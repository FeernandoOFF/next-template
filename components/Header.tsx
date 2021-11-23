import * as React from 'react';

export interface IHeadProps {}

export function Header(props: IHeadProps) {
  return (
    <header>
      <h1>Santa Page</h1>
      <ul>
        <li>Link</li>
      </ul>
    </header>
  );
}
