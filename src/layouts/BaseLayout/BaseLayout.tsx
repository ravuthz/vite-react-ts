import { Menu, Layout } from 'antd';
import React, { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import './BaseLayout.css';
import { MenuWithChildren } from '../../components/shared';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const BaseLayout: React.FC<any> = (props: any) => {
  const { menus, children } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggle = () => setCollapsed((collapsed: boolean) => !collapsed);

  return (
    <Layout className="contaier-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        {menus && <MenuWithChildren menus={menus} theme="dark" mode="inline" defaultSelectedKeys={['home']} />}
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-header site-layout-background">
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content className="site-layout-content site-layout-background">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
