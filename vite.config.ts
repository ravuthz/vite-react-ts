import { ConfigEnv, defineConfig, loadEnv } from 'vite';

import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/

export default ({ command, mode }: ConfigEnv) => {
  console.log('vite execute command: ', command);
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const port = Number.parseInt(process.env.VITE_PORT) || 9000;

  return defineConfig({
    plugins: [reactRefresh(), tsconfigPaths()],
    server: {
      port,
    },
  });
};
