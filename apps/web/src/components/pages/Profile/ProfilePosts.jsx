import React from 'react';
import {v4} from 'uuid';
import Post from '../../Post';

const rawData = [
  {
    postId: 2,
    postedBy: 'Jimmy jones',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum haurvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
    createdAt: new Date(),
    shares: [
      {profileId: 2, postId: 2},
      {profileId: 5, postId: 2},
    ],
    comments: [
      {profileId: 2, body: 'Lorem Ipsum is simply dummy text of the printing!'},
    ],
    medium: {
      source: '',
    },
    likes: [
      {profileId: 2, postId: 2},
      {profileId: 3, postId: 2},
      {profileId: 6, postId: 2},
    ],
  },
];

const ProfilePosts = () => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-6">Your posts</h3>
      {rawData.map((data) => (
        <Post {...data} key={v4()} />
      ))}
    </div>
  );
};

export default ProfilePosts;
