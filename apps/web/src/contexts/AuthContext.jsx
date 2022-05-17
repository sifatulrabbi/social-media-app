import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AuthContext = createContext({
  user: null,
  setUser: function () {},
  login: async function () {},
  logout: async function () {},
  getProfile: async function () {},
});

export function useAuthContext() {
  return useContext(AuthContext);
}

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function login(username, password, callback) {
    try {
      const resp = await axios.post('http://localhost:8080/api/v1/auth/login', {
        username,
        password,
      });

      if (resp.data.success) {
        console.log('Login successful');

        const userData = await resp.data.data;
        localStorage.setItem(
          'prometheus.auth_user',
          JSON.stringify({username, password}),
        );
        setUser(userData);
      }

      callback && callback(null);
    } catch (err) {
      console.error(err);
      callback && callback(err);
    }
  }

  async function getProfile() {
    const resp = await axios.get(
      `http://localhost:8080/api/v1/profiles/${user.username || ''}`,
    );

    if (resp.data.success) {
      setUser(resp.data.data);
    }
  }

  function logout() {
    localStorage.removeItem('prometheus.auth_user');
    navigate('/');
  }

  useEffect(() => {
    const data = localStorage.getItem('prometheus.auth_user');

    if (data) {
      const {username, password} = JSON.parse(data);
      console.log(username, password);
      login(username, password);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{user, setUser, login, logout, getProfile}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
