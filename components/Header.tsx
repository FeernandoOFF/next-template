import { useState } from 'react';
import Link from 'next/link';

import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { Col, Drawer, Dropdown, Menu, Row } from 'antd';
import { CustomLink } from './CustomLink';
import { HeaderLinks } from './Dropdown/HeaderLinks';

export interface IHeadProps {
  children?: React.ReactNode;
  className?: string;
}

export function Header(props: IHeadProps) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <header className="w-screen py-5 px-4 lg:px-11 bg-white shadow fixed dark:bg-primary-dark items-center top-0 z-30 right-0">
        <div className="items-center flex  justify-between  mx-auto  container-size">
          <div className="w-1/4">
            <Link href="/">
              <a className="text-lg font-semibold">
                Logo
                {/* <figure className="min-w-[30px] max-w-[60px] w-[40px] lg:w-auto">
                  <img
                    src="https://static.mlstatic.com/org-img/homesnw/img/ml-logo-small@2x.png?v=3.0"
                    alt="TODOAPPNAME"
                    className="w-full"
                  />
                </figure> */}
              </a>
            </Link>
          </div>

          <div className="hidden md:block w-full max-w-[700px]">
            <nav className="w-full lg:min-w-[550px] lg:max-w-[600px] ml-auto">
              <HeaderLinks></HeaderLinks>
            </nav>
          </div>
          <div className="block md:hidden items-center ">
            <MenuOutlined
              className="text-xl "
              onClick={() => setVisible(true)}
            />
          </div>
        </div>
      </header>
      <Sidebar setVisible={setVisible} visible={visible} />
    </>
  );
}

const Sidebar = ({ setVisible, visible }: any) => (
  <Drawer
    placement="right"
    onClose={() => setVisible(false)}
    keyboard
    visible={visible}
  >
    <HeaderLinks></HeaderLinks>
  </Drawer>
);
