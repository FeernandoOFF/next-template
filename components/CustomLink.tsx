import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface ICustomLinkProps {
  href: string;
  name: string;
  className?: string;
  activeClassName?: string;
  children?: React.ReactNode;
}

export function CustomLink(props: ICustomLinkProps) {
  const [isActive, setIsActive] = useState(false);
  const render = props.children || props.name;
  useEffect(() => {
    const { href } = props;
    const pathname = window.location.pathname;
    if (pathname === href) {
      setIsActive(true);
    }
  }, []);
  return (
    <Link href={props.href}>
      <a className={`${props.className} ${isActive && props.activeClassName}`}>
        {render}
      </a>
    </Link>
  );
}
