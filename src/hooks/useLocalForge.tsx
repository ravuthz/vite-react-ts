import { useState, useEffect } from 'react';
import localforage from 'localforage';

const useLocalForge: any = (key: string, initialValue: any = {}, driver = localforage.WEBSQL) => {
  const [value, setValue] = useState<any>(initialValue);

  const storage = localforage.createInstance({
    driver,
    name: 'vite-react-app',
    version: 1.0,
    size: 4980736, // Size of database, in bytes. WebSQL-only for now.
    storeName: 'local_forage', // Should be alphanumeric, with underscores.
    description: 'Local Forge default instance database',
  });

  useEffect(() => {
    storage
      .getItem(key)
      .then((val) => {
        setValue(val || initialValue);
      })
      .catch((err) => {
        setValue(initialValue);
      });
  }, []);

  useEffect(() => {
    if (value) {
      storage.setItem(key, value);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalForge;
