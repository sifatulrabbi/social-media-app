import {useState} from 'react';
import axios from 'axios';

export function useRegistration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister() {
    try {
      const resp = await axios.post(
        'http://localhost:8080/api/v1/auth/signup/',
        {
          username,
          email,
          password,
        },
      );

      if (resp.data.success) {
        return resp.data.data;
      }

      return null;
    } catch (err) {
      console.error(err);
    }
  }

  return {handleRegister, setUsername, setEmail, setPassword};
}
