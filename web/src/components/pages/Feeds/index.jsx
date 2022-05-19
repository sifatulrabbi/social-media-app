import React from 'react';
import LeftSideBar from './LeftSideBar';
import PostForm from '../../PostForm';
import Post from '../../Post';
import {useAuthContext} from '../../../contexts/AuthContext';
import {Navigate} from 'react-router-dom';
import {useFeedContext} from '../../../contexts/FeedContext';
import {v4} from 'uuid';
import ColleaguesView from '../../ColleaguesView';

const Feeds = () => {
  // logged in user
  const {user} = useAuthContext();
  // collected feeds
  const {feeds} = useFeedContext();

  return (
    // if there is no feeds then their will be nothing to show on page
    !user || !feeds ? (
      <Navigate to="/login" />
    ) : (
      <>
        <ColleaguesView />
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
    )
  );
};

export default Feeds;
