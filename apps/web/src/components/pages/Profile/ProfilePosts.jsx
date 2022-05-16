import React from 'react';
import {v4} from 'uuid';
import Post from '../../Post';

const ProfilePosts = ({data}) => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h3 className="text-xl font-bold mb-6">Your posts</h3>
      {data.map((data) => (
        <Post {...data} key={v4()} />
      ))}
    </div>
  );
};

export default ProfilePosts;
