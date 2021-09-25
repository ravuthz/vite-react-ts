import React from 'react';

import './App.css';

import routes, { RouteWithChildren } from '../../routes';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        {routes.map((route, i) => (
          <RouteWithChildren key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
