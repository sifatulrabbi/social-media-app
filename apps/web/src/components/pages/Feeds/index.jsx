import React, {useEffect} from 'react';
import LeftSideBar from './LeftSideBar';
import PostForm from '../../PostForm';
import Post from '../../Post';
import {useAuthContext} from '../../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';
import {useFeedContext} from '../../../contexts/FeedContext';
import {v4} from 'uuid';

const Feeds = () => {
  const {user} = useAuthContext();
  const navigate = useNavigate();
  const {feeds} = useFeedContext();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <>
      <div className="mt-[100px]"></div>
      <LeftSideBar />
      <div className={`max-w-3xl mx-auto mt-[70px] bg-white`}>
        <h4 className="text-2xl font-bold text-textPrimary mb-6 font-display">
          Posts
        </h4>
        <PostForm />
        {/* posts */}
        <div className="flex flex-col mt-[5vh] gap-4">
          {feeds && feeds.map((post) => <Post key={v4()} {...post} />)}
        </div>
      </div>
    </>
  );
};

export default Feeds;
