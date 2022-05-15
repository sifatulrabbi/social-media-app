import React from 'react';
import {profileCover} from '../../../images';
import {MdOutlineAddAPhoto} from 'react-icons/md';
import {AiOutlinePlus} from 'react-icons/ai';
import {FiEdit} from 'react-icons/fi';

const AvatarGroup = () => {
  return (
    <div className="flex flex-col relative gap-1 mt-[40px]">
      {/* avatar */}
      <img
        src=""
        alt=""
        className="w-[100px] h-[100px] absolute top-[-140%] rounded-full bg-gray-300"
      />
      {/* name */}
      <h6 className="text-xl font-bold font-display text-textPrimary">
        Bart Simpson
      </h6>
      {/* Specialization */}
      <span className="font-bold">Oncologist</span>
      {/* Location */}
      <span>Doha, Qatar</span>
    </div>
  );
};

const ActionsGroup = ({colleagueCount}) => {
  return (
    <div className="flex flex-col justify-start items-end gap-6">
      {/* action top */}
      {/* contains colleague's and contact info */}
      <div className="flex flex-col items-end gap-2 lg:flex-row lg:items-center">
        <div className="text-[#00A30F]">
          Colleagues{' '}
          <span className="font-bold font-display">{colleagueCount}</span>
        </div>
        <div className="h-1 w-1 rounded-full bg-black hidden lg:block" />
        <button className="text-[#00A30F]">Contact information</button>
      </div>

      {/* Action buttons for editing profile and adding new post */}
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <button className="btn-secondary px-6 gap-4 w-full lg:w-max">
          Edit <FiEdit className="text-primary text-xl" />
        </button>
        <button className="btn-primary px-4 gap-4">
          Add post <AiOutlinePlus className="fill-white text-xl" />
        </button>
      </div>
    </div>
  );
};

const ProfileTop = () => {
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
        <ActionsGroup colleagueCount={123} />
      </div>
      {/* bio box */}
      <p className="p-4 bg-gray-100/80 rounded-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
        praesentium architecto accusamus fugit libero beatae impedit corporis
        soluta totam cupiditate quod, ex eveniet excepturi accusantium dicta
        quasi error aliquid exercitationem nulla quaerat molestias iure, in
        perspiciatis quidem. Fugiat tempora quod labore, autem eveniet veritatis
        ipsa facere quis consequuntur perferendis ex, iusto nihil odit pariatur
        quibusdam nam velit sequi quas sunt minus nostrum, explicabo beatae!
        Quas iste veniam sunt tempore recusandae sequi accusantium laborum
        harum, rerum perferendis, repudiandae porro molestiae maxime!
      </p>
    </div>
  );
};

export default ProfileTop;
