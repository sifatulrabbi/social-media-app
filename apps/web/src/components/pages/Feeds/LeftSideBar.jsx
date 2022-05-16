import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {v4} from 'uuid';
import {useAuthContext} from '../../../contexts/AuthContext';
import {AiOutlineAppstore, AiOutlineUser, AiOutlineBell} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';

const SideNavBtn = () => {
  return (
    <>
      <Link
        to={`/feed`}
        className={`hover:bg-gray-100 px-6 py-3 gap-6 flex justify-between items-center transition-colors`}
      >
        <AiOutlineAppstore className="text-xl" /> Home
      </Link>
      <Link
        to={`/feed`}
        className={`hover:bg-gray-100 px-6 py-3 gap-6 flex justify-between items-center transition-colors`}
      >
        <AiOutlineUser className="text-xl" /> Profile
      </Link>
      <Link
        to={`/feed`}
        className={`hover:bg-gray-100 px-6 py-3 gap-6 flex justify-between items-center transition-colors`}
      >
        <AiOutlineBell className="text-xl" /> Colleagues
      </Link>
      <Link
        to={`/feed`}
        className={`hover:bg-gray-100 px-6 py-3 gap-6 flex justify-between items-center transition-colors`}
      >
        <FiSettings className="text-xl" /> Settings
      </Link>
    </>
  );
};

const LeftSideBar = () => {
  const {user} = useAuthContext();

  return (
    <aside
      className={`z-50 h-full flex flex-col justify-start items-start fixed top 0 left-4 top-[100px] -translate-y-8 translate-x-[-120%] transition-transform xl:translate-x-0 pt-[5vh]`}
    >
      <div className="flex flex-col justify-center px-6">
        <img
          src=""
          alt=""
          className="rounded-full bg-gray-300"
          height="80"
          width="80"
        />
      </div>
      <h6 className="text-textPrimary font-bold mb-[6vh] px-6">
        {user?.username || 'Bart Simpson'}
      </h6>
      <SideNavBtn />
    </aside>
  );
};

export default LeftSideBar;
