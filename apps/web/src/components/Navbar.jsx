import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {logo} from '../images';
import {BsArrowRight} from 'react-icons/bs';

const Navbar = () => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 h-[70px] bg-[#F6FAFD] z-50 p-container flex flex-row gap-4`}
    >
      <Link to="/" className="flex items-center gap-2 mr-12">
        <img src={logo} alt="" height="50" width="50" />
        <span className="font-bold text-lg text-textPrimary">Prometheus</span>
      </Link>
      {/* Navbar menu */}
      <div className="flex flex-row items-center justify-between w-full">
        <ul className="flex flex-row justify-start items-center w-max gap-4">
          <li>
            <NavLink to="/" className="p-2">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="p-2">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/colleagues" className="p-2">
              Colleagues
            </NavLink>
          </li>
          <li>
            <NavLink to="/feed" className="p-2">
              Feed
            </NavLink>
          </li>
        </ul>
        <Link
          to="/register"
          className={`font-bold px-6 py-3 w-max flex flex-row items-center gap-4`}
        >
          <span>Register</span>
          <BsArrowRight className={`text-2xl fill-primary`} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
