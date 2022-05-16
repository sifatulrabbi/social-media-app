import React from 'react';
import LeftSideBar from './LeftSideBar';
import PostForm from '../../PostForm';
import Post from '../../Post';

const index = () => {
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
          <Post
            postedBy="Jimmy Jones"
            createdAt={new Date()}
            shares={['', '', '']}
            likes={['', '', '']}
            comments={['', '', '']}
            medium={{}}
            body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum haurvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </div>
      </div>
    </>
  );
};

export default index;
