import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[100px]">
      <form className="w-full max-w-xl flex flex-col gap-4">
        <input
          className="rounded-lg w-full border-[1px] p-3 outline-none"
          type="text"
          name="username"
          required
          placeholder="Username"
        />
        <input
          className="rounded-lg w-full border-[1px] p-3 outline-none"
          type="password"
          name="password"
          placeholder="Password"
          required
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
