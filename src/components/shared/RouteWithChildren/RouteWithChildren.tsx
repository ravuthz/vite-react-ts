import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithChildren: React.FC = (route: any) => {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={(props) => {
        return <Route render={(props) => <route.component {...props} routes={route.routes} />} />;
      }}
    />
  );
};

export default RouteWithChildren;
