import { Menu } from 'antd';
import React from 'react';

const MenuWithChildren: React.FC<any> = ({ menus, ...props }: any) => {
  if (!menus) {
    return <></>;
  }

  const renderItem = (item: any) => {
    return (
      <Menu.Item key={item.key} {...item}>
        {item.title}
      </Menu.Item>
    );
  };

  const renderMenu = (menu: any) => {
    if (menu.menus) {
      return (
        <Menu.SubMenu key={menu.key} {...menu}>
          {menu.menus.map(renderItem)}
        </Menu.SubMenu>
      );
    }
    return renderItem(menu);
  };

  return (
    <Menu selectedKeys={window.location.pathname} {...props}>
      {menus.map(renderMenu)}
    </Menu>
  );
};

export default MenuWithChildren;
