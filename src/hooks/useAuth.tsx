import { useState, useEffect } from 'react';
import axios from '../utils/axios';

// interface Authentication {
//   isAuthenticated: () => boolean;
//   getUser: () => object;
// }

const Auth = {
  isAuthenticated: () => {
    return new Promise((resolve, reject) => {
      return resolve(true);
    });
  },
  login: (data: any) => {
    return axios.post('/oauth/token').then((res) => {
      return res;
    });
  },
  logout: () => {
    return axios.post('/oauth/revoke').then((res) => {
      return res;
    });
  },
  fetchUser: () => {
    return axios.get('/oauth/user').then((res) => {
      return res;
    });
  },
};

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState<any>(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    Auth.login({}).then((res) => {
      setAuthenticated(true);
    });
  });

  useEffect(() => {
    if (authenticated) {
      Auth.fetchUser().then((res) => {
        setUser(res);
      });
    } else {
      setUser(null);
    }
  }, [authenticated]);

  return { authenticated, user };
};
