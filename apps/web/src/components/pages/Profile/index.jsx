import React, {useEffect} from 'react';
import LeftSideBar from './LeftSideBar';
import ProfileTop from './ProfileTop';
import ProfilePosts from './ProfilePosts';
import {useAuthContext} from '../../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';
import ColleagueView from '../../ColleaguesView';

const Profile = () => {
  const {user} = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    user && (
      <>
        <LeftSideBar />
        <ColleagueView />
        <div className={`max-w-3xl mx-auto mt-[70px] bg-white shadow-lg`}>
          <ProfileTop />
          <ProfilePosts data={user.profile.posts} />
        </div>
      </>
    )
  );
};

export default Profile;
