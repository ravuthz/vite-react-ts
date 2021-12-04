import React, { useEffect } from 'react';
import { Link, Switch } from 'react-router-dom';
import {
  HomeOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  ContainerOutlined,
  ShopOutlined,
  TagsOutlined,
  CheckSquareOutlined,
} from '@ant-design/icons';

import { RouteWithChildren } from '../../routes';
import BaseLayout from '../BaseLayout/BaseLayout';
import './DefaultLayout.css';

const menus = [
  {
    key: '/',
    icon: <HomeOutlined />,
    title: <Link to="/">Home</Link>,
  },
  {
    key: '/admin',
    icon: <DashboardOutlined />,
    title: 'Admin',
    menus: [
      {
        key: '/admin/',
        icon: <HomeOutlined />,
        title: <Link to="/admin">Home</Link>,
      },
      {
        key: '/admin/category',
        icon: <DatabaseOutlined />,
        title: <Link to="/admin/category">Category</Link>,
      },
      {
        key: '/admin/products',
        icon: <ContainerOutlined />,
        title: <Link to="/admin/products">Products</Link>,
      },
    ],
  },
  {
    key: '/category',
    icon: <ShopOutlined />,
    title: <Link to="/category">Category</Link>,
  },
  {
    key: '/products',
    icon: <TagsOutlined />,
    title: <Link to="/products">Products</Link>,
  },
  {
    key: '/todos',
    icon: <CheckSquareOutlined />,
    title: <Link to="/todos">Todos</Link>,
  },
  {
    key: '/storages',
    icon: <CheckSquareOutlined />,
    title: <Link to="/storages">Storages</Link>,
  },
];

const DefaultLayout: React.FC = (props: any) => {
  useEffect(() => {
    document.title = 'Main Page';
  }, []);

  return (
    <BaseLayout menus={menus} {...props}>
      <Switch>
        {props?.routes?.map((route: any, i: any) => (
          <RouteWithChildren key={i} {...route} />
        ))}
      </Switch>
    </BaseLayout>
  );
};

export default DefaultLayout;
