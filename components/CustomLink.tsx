import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface ICustomLinkProps {
  href: string;
  name: string;
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
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
      <a
        className={`${
          isActive || props.active
            ? props.className + '-active'
            : props.className
        }`}
      >
        {render}
      </a>
    </Link>
  );
}
