import React from 'react';

import { AdminLayout, DefaultLayout } from '../layouts';
import { RouteWithChildren } from '../components/shared';
import Todo from '../components/Todo';
import AppStorage from '../components/AppStorage/AppStorage';

const AdminCategory: React.FC = () => <h1>AdminCategory</h1>;
const AdminProducts: React.FC = () => <h1>AdminProducts</h1>;

const Category: React.FC = () => <h1>Category</h1>;
const Products: React.FC = () => <h1>Products</h1>;

const routes = [
  {
    path: '/admin',
    component: AdminLayout,
    routes: [
      {
        path: '/admin/category',
        component: AdminCategory,
      },
      {
        path: '/admin/products',
        component: AdminProducts,
      },
    ],
  },
  {
    path: '/',
    component: DefaultLayout,
    routes: [
      {
        path: '/category',
        component: Category,
      },
      {
        path: '/products',
        component: Products,
      },
      {
        path: '/todos/:id',
        component: Todo,
      },
      {
        path: '/todos',
        component: Todo,
      },
      {
        path: '/storages',
        component: AppStorage,
      }
    ],
  },
];

export { routes as default, RouteWithChildren };
