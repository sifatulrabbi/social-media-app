import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export function useAuthContext() {
  return useContext(AuthContext);
}

const fakeUser = {
  id: 0,
  fullname: '',
  education: '',
  bio: '',
  specialization: '',
  address: '',
  createdAt: '2022-05-16T07:50:49.000Z',
  updatedAt: '2022-05-16T07:50:49.000Z',
  userId: 0,
  orgId: null,
  medium: {
    id: 0,
    source: '',
    mimeType: '',
    createdAt: '2022-05-16T07:50:49.000Z',
    updatedAt: '2022-05-16T07:50:49.000Z',
    postId: null,
    profileId: 0,
  },
  connections: [],
  posts: [],
};

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(fakeUser);

  async function login(username, password, callback) {
    try {
      const resp = await axios.post('http://localhost:8080/api/v1/auth/login', {
        username,
        password,
      });

      if (resp.data.success) {
        console.log('Login successful');

        const profile = await resp.data.data;
        localStorage.setItem(
          'prometheus.auth_user',
          JSON.stringify({username, password}),
        );
        setUser(profile);
      }

      callback && callback(null);
    } catch (err) {
      console.error(err);
      callback && callback(err);
    }
  }

  function logout() {
    localStorage.removeItem('prometheus.auth_user');
  }

  useEffect(() => {
    const data = localStorage.getItem('prometheus.auth_user');

    if (data) {
      const {username, password} = JSON.parse(data);
      console.log(username, password);
      login(username, password);
    }
  }, []);

  return (
    <AuthContext.Provider value={{user, setUser, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
