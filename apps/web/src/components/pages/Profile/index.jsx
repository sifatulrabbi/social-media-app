import React from 'react';
import LeftSideBar from './LeftSideBar';
import ProfileTop from './ProfileTop';
import ProfilePosts from './ProfilePosts';

const Profile = () => {
  return (
    <>
      <LeftSideBar />
      <div className={`max-w-3xl mx-auto mt-[70px] bg-white shadow-lg`}>
        <ProfileTop />
        <ProfilePosts />
      </div>
    </>
  );
};

export default Profile;
