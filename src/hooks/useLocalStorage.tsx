import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialValue: any = {}) => {
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      window.localStorage.setItem(key, value);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
