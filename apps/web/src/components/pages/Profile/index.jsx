import React, {useEffect} from 'react';
import LeftSideBar from './LeftSideBar';
import ProfileTop from './ProfileTop';
import ProfilePosts from './ProfilePosts';
import {useAuthContext} from '../../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';

const Profile = () => {
  const {user} = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <>
      <LeftSideBar />
      <div className={`max-w-3xl mx-auto mt-[70px] bg-white shadow-lg`}>
        <ProfileTop />
        <ProfilePosts data={user.posts} />
      </div>
    </>
  );
};

export default Profile;
