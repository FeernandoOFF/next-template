import { useState } from 'react';
import Link from 'next/link';

import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { Col, Drawer, Dropdown, Menu, Row } from 'antd';
import { CustomLink } from './CustomLink';

export interface IHeadProps {
  children?: React.ReactNode;
  className?: string;
}

export function Header(props: IHeadProps) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {!props.children && <Nav setVisible={setVisible} />}
      {props.children && props.children}

      <Sidebar setVisible={setVisible} visible={visible}></Sidebar>
    </>
  );
}

const DropD = () => (
  <Menu className="w-full p-4">
    <CustomLink href="/dynamic" name="Dinamico" />
  </Menu>
);

const Sidebar = ({ setVisible, visible }: any) => (
  <Drawer
    placement="right"
    onClose={() => setVisible(false)}
    keyboard
    visible={visible}
  >
    <div className="col">
      <CustomLink href="/" name="Home" />
      <CustomLink href="/gallery" name="Gallery" />
    </div>
  </Drawer>
);

const Nav = ({ setVisible }) => (
  <header>
    <Row
      className="w-full p-4 px-4 lg:px-11 bg-primary dark:bg-primary-dark items-center"
      justify="space-between"
    >
      <Col>
        <Link href="/">
          <a>
            <figure className="min-w-[30px] max-w-[80px] w-[50px] lg:w-auto">
              <img
                src="https://static.mlstatic.com/org-img/homesnw/img/ml-logo-small@2x.png?v=3.0"
                alt="TODOAPPNAME"
                className="w-full"
              />
            </figure>
          </a>
        </Link>
      </Col>

      <Col className="hidden md:block ">
        <nav className="w-full lg:min-w-[550px]">
          <ul className="flex flex-nowrap justify-between  items-center">
            <li>
              <CustomLink href="/" name="Home" className="button" />
            </li>
            <li>
              <CustomLink href="/gallery" name="Gallery" className="button" />
            </li>
            <li>
              <Dropdown overlay={DropD}>
                <a
                  className="ant-dropdown-link flex items-center button"
                  onClick={(e) => e.preventDefault()}
                >
                  <p className="mr-1"> SubMenu</p>
                  <DownOutlined />
                </a>
              </Dropdown>
            </li>
            <li>
              <CustomLink href="/contact" name="Contact" className="button" />
            </li>
          </ul>
        </nav>
      </Col>
      <Col className="block md:hidden items-center ">
        <MenuOutlined className="text-xl " onClick={() => setVisible(true)} />
      </Col>
    </Row>
  </header>
);
