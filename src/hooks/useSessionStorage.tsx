import { useEffect, useState } from 'react';

const useSessionStorage = (key: string, initialValue: any = {}) => {
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.sessionStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      window.sessionStorage.setItem(key, value);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useSessionStorage;
