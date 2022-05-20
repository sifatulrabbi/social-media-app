import React, {useEffect, useState} from 'react';
import {profileCover} from '../../../images';
import {MdOutlineAddAPhoto} from 'react-icons/md';
import {AiOutlinePlus} from 'react-icons/ai';
import {FiEdit} from 'react-icons/fi';
import {useAuthContext} from '../../../contexts/AuthContext';
import {Link} from 'react-router-dom';

const AvatarGroup = () => {
  const {user} = useAuthContext();
  const [mediaUrl, setMediaUrl] = useState('');

  useEffect(() => {
    setMediaUrl(
      `https://prometheus-api-msql.herokuapp.com/api/v1/media/${user.profile.medium.id}`,
    );
  }, [user]);

  return (
    <div className="flex flex-col relative gap-1 min-w-[100px] mt-[40px]">
      {/* avatar */}
      <img
        src={mediaUrl}
        alt=""
        className="w-[100px] h-[100px] absolute top-[-140%] rounded-full bg-gray-300"
      />
      {/* name */}
      <h6 className="text-xl font-bold font-display text-textPrimary">
        {user.profile.fullname}
        <span className="text-base font-normal"> ({user.profile.type})</span>
      </h6>
      {/* Specialization */}
      <span className="font-bold">{user.profile.specialization}</span>
      {/* Location */}
      <span>{user.profile.address}</span>
    </div>
  );
};

const ActionsGroup = () => {
  const {user} = useAuthContext();

  return (
    <div className="flex flex-col justify-start items-end gap-6">
      {/* action top */}
      {/* contains colleague's and contact info */}
      <div className="flex flex-col items-end gap-2 lg:flex-row lg:items-center">
        <div className="text-[#00A30F]">
          Colleagues{' '}
          <span className="font-bold font-display">
            {user.profile.connections.length}
          </span>
        </div>
        <div className="h-1 w-1 rounded-full bg-black hidden lg:block" />
        <button className="text-[#00A30F]">Contact information</button>
      </div>

      {/* Action buttons for editing profile and adding new post */}
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <button className="btn-secondary px-6 gap-4 w-full lg:w-max">
          Edit <FiEdit className="text-primary text-xl" />
        </button>
        <Link to="/feed" className="btn-primary px-4 gap-4">
          Add post <AiOutlinePlus className="fill-white text-xl" />
        </Link>
      </div>
    </div>
  );
};

const ProfileTop = () => {
  const {user} = useAuthContext();

  return (
    <div className="flex flex-col">
      {/* Profile top part */}
      <div className="relative">
        {/* Cover photo */}
        <img
          src={profileCover}
          alt=""
          className="min-h-[150px] object-cover w-full rounded-b-xl"
        />
        {/* replace cover photo button */}
        <button
          className={`absolute flex justify-center items-center right-8 bottom-4 
          text-2xl h-[40px] w-[40px] bg-white rounded-full hover:bg-gray-100`}
        >
          <MdOutlineAddAPhoto />
        </button>
      </div>
      {/* bottom part of profile top */}
      <div className="flex flex-row justify-between items-start p-4">
        <AvatarGroup />
        <ActionsGroup />
      </div>
      {/* bio box */}
      <div className="p-4">
        <p className="p-4 bg-gray-100/80 rounded-lg">{user.profile.bio}</p>
      </div>
    </div>
  );
};

export default ProfileTop;
