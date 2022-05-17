import React from 'react';
import {useRegistration} from '../../hooks/useRegistration';

const Register = () => {
  const reg = useRegistration();

  return (
    <div className="flex flex-col justify-center items-center mt-[100px]">
      <form
        className="w-full max-w-xl flex flex-col gap-4"
        onSubmit={reg.handleRegister}
      >
        <input
          className="rounded-lg w-full border-[1px] p-3 outline-none"
          type="text"
          name="username"
          required
          placeholder="Username"
          value={reg.username}
          onChange={(e) => reg.setUsername(e.target.value)}
        />
        <input
          className="rounded-lg w-full border-[1px] p-3 outline-none"
          type="email"
          name="email"
          required
          placeholder="Email"
          value={reg.email}
          onChange={(e) => reg.setEmail(e.target.value)}
        />
        <input
          className="rounded-lg w-full border-[1px] p-3 outline-none"
          type="password"
          name="password"
          placeholder="Password"
          value={reg.password}
          onChange={(e) => reg.setPassword(e.target.value)}
          required
        />
        <select
          className="rounded-lg w-full border-[1px] p-3 outline-none bg-white"
          required
          value={reg.type}
          onChange={(e) => reg.setType(e.target.value)}
        >
          <option value="">Select one</option>
          <option value="Doctor">Doctor</option>
          <option value="Organization">Organization</option>
        </select>
        <input
          className="rounded-lg w-full border-[1px] p-3 outline-none"
          type="text"
          name="fullname"
          required
          placeholder="Full name"
          value={reg.fullname}
          onChange={(e) => reg.setFullname(e.target.value)}
        />
        <input
          className="rounded-lg w-full border-[1px] p-3 outline-none"
          type="text"
          name="education"
          required
          placeholder="Education"
          value={reg.education}
          onChange={(e) => reg.setEducation(e.target.value)}
        />
        <input
          className="rounded-lg w-full border-[1px] p-3 outline-none"
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={reg.specialization}
          required
          onChange={(e) => reg.setSpecialization(e.target.value)}
        />
        <input
          className="rounded-lg w-full border-[1px] p-3 outline-none"
          type="text"
          name="address"
          placeholder="Address"
          value={reg.address}
          onChange={(e) => reg.setAddress(e.target.value)}
        />
        <div className="flex items-center gap-6">
          <label htmlFor="media">Avatar</label>
          <input
            className="rounded-lg w-full border-[1px] p-3 outline-none"
            type="file"
            name="media"
            id="media"
            placeholder="Avatar"
            accept="image/*"
            required
            onChange={(e) => reg.setMedia(e.target.files[0])}
          />
        </div>
        <textarea
          className="rounded-lg w-full border-[1px] p-3 outline-none resize-none h-[140px]"
          name="bio"
          placeholder="Bio"
          value={reg.bio}
          required
          onChange={(e) => reg.setBio(e.target.value)}
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
