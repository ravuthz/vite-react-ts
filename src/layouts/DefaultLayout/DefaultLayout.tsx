import React, { useRef, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import './DefaultLayout.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const DefaultLayout: React.FC = (props: any) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggle = () => setCollapsed((collapsed: boolean) => !collapsed);

  return (
    <Layout className="contaier-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-header site-layout-background">
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content className="site-layout-content site-layout-background">{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
