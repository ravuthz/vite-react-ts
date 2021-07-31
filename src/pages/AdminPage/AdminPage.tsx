import React from 'react';
import App from '../../components/App';
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';

const AdminPage: React.FC = () => {
  return (
    <DefaultLayout>
      <App />
    </DefaultLayout>
  );
};

export default AdminPage;
