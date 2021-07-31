import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'antd/dist/antd.css';

import AdminPage from './pages/AdminPage/AdminPage';

ReactDOM.render(
  <React.StrictMode>
    <AdminPage />
  </React.StrictMode>,
  document.getElementById('root'),
);
