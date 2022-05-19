import React from 'react';
import LeftSideBar from './LeftSideBar';
import ProfileTop from './ProfileTop';
import ProfilePosts from './ProfilePosts';
import {useAuthContext} from '../../../contexts/AuthContext';
import {Navigate} from 'react-router-dom';
import ColleagueView from '../../ColleaguesView';

const Profile = () => {
  const {user} = useAuthContext();

  return !user ? (
    <Navigate to="/login" />
  ) : (
    <>
      <LeftSideBar />
      <ColleagueView />
      <div className={`max-w-3xl mx-auto mt-[70px] bg-white shadow-lg`}>
        <ProfileTop />
        <ProfilePosts data={user.profile.posts} />
      </div>
    </>
  );
};

export default Profile;
