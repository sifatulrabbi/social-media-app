import React, {useState} from 'react';
import {useAuthContext} from '../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useAuthContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('sending login request');
    login(username, password, (err) => {
      if (err) {
        console.error(err);
      } else {
        navigate('/profile');
      }
    });
  }

  return (
    <div className="flex flex-col justify-center items-center mt-[100px]">
      <form
        className="w-full max-w-xl flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          className="rounded-lg w-full border-[1px] p-3 outline-none"
          type="text"
          name="username"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="rounded-lg w-full border-[1px] p-3 outline-none"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-lg bg-primary text-white px-6 py-3 hover:bg-opacity-80 transition-all"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
