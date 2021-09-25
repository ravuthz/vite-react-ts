import React, { useEffect } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AppProvider } from './AppContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const ContextProvider = ({ children }: any) => {
  useEffect(() => {
    const src = 'node_modules/eruda/eruda.js';
    const location = (window as any).location;
    if (!/debug-eruda=true/.test(location) && localStorage.getItem('debug-eruda') != 'true') {
      return;
    }
    document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>{children}</AppProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export * from './AppContext';

export { ContextProvider as default };
