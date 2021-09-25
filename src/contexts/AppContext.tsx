import React, { memo, createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext({});

export const AppProvider = memo((props) => {
  const [state, setState] = useState<any>();

  const value = {
    state,
    setState,
    displayName: 'AppProvider',
  };

  return <AppContext.Provider value={value} {...props} />;
});

export const useAppCtx = () => useContext(AppContext);
