import React, {createContext, useContext, useState} from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export function useAuthContext() {
  return useContext(AuthContext);
}

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null);

  async function login(username, password) {
    try {
      const response = await axios.post(
        'https://localhost:8080/api/v1/auth/login',
        {username, password},
      );

      const profile = await response.data.data;
      setUser(profile);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <AuthContext.Provider value={{user, setUser, login}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
