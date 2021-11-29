import { DownOutlined } from '@ant-design/icons';
import { CustomLink } from '@components/CustomLink';
import { Dropdown, Menu } from 'antd';
import * as React from 'react';

export interface IHeaderLinksProps {}

export function HeaderLinks(props: IHeaderLinksProps) {
  return (
    <>
      <ul className="flex flex-nowrap justify-between  items-center w-3/4 ml-auto">
        <li>
          <CustomLink href="/" name="Home" className="nav-link" />
        </li>
        <li>
          <CustomLink href="/gallery" name="Gallery" className="nav-link" />
        </li>
        <li>
          <Dropdown overlay={CMenu}>
            <a
              className="ant-dropdown-link flex items-center button"
              onClick={(e) => e.preventDefault()}
            >
              <p className="mr-1 nav-link"> SubMenu</p>
              <DownOutlined />
            </a>
          </Dropdown>
        </li>
        <li>
          <CustomLink href="/contact" name="Contact" className="nav-link" />
        </li>
      </ul>
    </>
  );
}

const CMenu = () => (
  <Menu className="min-w-[230px] bg-red-700">
    <Menu.Item>
      <li>
        <CustomLink href="/xd" name="Test" className="nav-link" />
      </li>
    </Menu.Item>
  </Menu>
);
