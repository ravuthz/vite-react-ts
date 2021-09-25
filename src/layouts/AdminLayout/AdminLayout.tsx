import React, { useEffect } from 'react';
import { Link, Switch } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

import { RouteWithChildren } from '../../routes';
import BaseLayout from '../BaseLayout/BaseLayout';
import './AdminLayout.css';

const menus = [
  {
    key: '/',
    icon: <HomeOutlined />,
    title: <Link to="/">Home</Link>,
  },
  {
    key: '/admin',
    icon: <HomeOutlined />,
    title: <Link to="/admin">Admin Home</Link>,
  },
  {
    key: '/admin/category',
    icon: <HomeOutlined />,
    title: <Link to="/admin/category">Admin Category</Link>,
  },
  {
    key: '/admin/products',
    icon: <HomeOutlined />,
    title: <Link to="/admin/products">Admin Products</Link>,
  },
];

const AdminLayout: React.FC = (props: any) => {
  useEffect(() => {
    document.title = 'Admin Page';
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

export default AdminLayout;
