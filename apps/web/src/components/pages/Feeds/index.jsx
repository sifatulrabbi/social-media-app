import React from 'react';
import LeftSideBar from './LeftSideBar';
import PostForm from '../../PostForm';

const index = () => {
  return (
    <>
      <LeftSideBar />
      <PostForm />
      <div className={`max-w-3xl mx-auto mt-[70px] bg-white shadow-lg`}></div>
    </>
  );
};

export default index;
