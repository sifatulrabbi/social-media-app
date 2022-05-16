import React from 'react';

const Register = () => {
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
          type="email"
          name="email"
          required
          placeholder="Email"
        />
        <input
          className="rounded-lg w-full border-[1px] p-3 outline-none"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          className="rounded-lg w-full border-[1px] p-3 outline-none"
          type="text"
          name="fullname"
          required
          placeholder="Full name"
        />
        <input
          className="rounded-lg w-full border-[1px] p-3 outline-none"
          type="text"
          name="education"
          required
          placeholder="Education"
        />
        <input
          className="rounded-lg w-full border-[1px] p-3 outline-none"
          type="text"
          name="specialization"
          placeholder="Specialization"
        />
        <input
          className="rounded-lg w-full border-[1px] p-3 outline-none"
          type="text"
          name="address"
          placeholder="Address"
        />
        <textarea
          className="rounded-lg w-full border-[1px] p-3 outline-none resize-none h-[140px]"
          name="bio"
          placeholder="Bio"
        ></textarea>
        <button
          type="submit"
          className="rounded-lg bg-primary text-white px-6 py-3 hover:bg-opacity-80 transition-all"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
