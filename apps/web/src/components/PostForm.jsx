import React, {useRef, useState} from 'react';
import {useAuthContext} from '../contexts/AuthContext';
import {
  AiOutlinePlus,
  AiFillCamera,
  AiFillAudio,
  AiFillVideoCamera,
} from 'react-icons/ai';

const PostForm = () => {
  const [file, setFile] = useState();
  const {user} = useAuthContext();
  const uploadRef = useRef(null);

  return (
    <div className="rounded-lg border-[1px] p-4 mx-auto max-w-3xl flex flex-row gap-4">
      <img
        src={user?.avatar || ''}
        alt=""
        className="h-[70px] w-[70px] rounded-full bg-gray-300"
      />
      <div className="flex flex-col w-full">
        <h6 className="text-textPrimary font-bold mb-6">
          {user?.username || 'Bart Simpson'}
        </h6>
        <form className="w-full">
          <textarea
            placeholder="Write text..."
            className="w-full resize-none border-[1px] rounded-lg outline-none p-3"
          ></textarea>
          <input
            ref={uploadRef}
            type="file"
            className="hidden"
            value={file}
            accept="image/*"
            onChange={(e) => setFile(e.target.value)}
          />
          <input
            ref={uploadRef}
            type="file"
            className="hidden"
            value={file}
            accept="video/*"
            onChange={(e) => setFile(e.target.value)}
          />
          <input
            ref={uploadRef}
            type="file"
            className="hidden"
            value={file}
            accept="audio/*"
            onChange={(e) => setFile(e.target.value)}
          />
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="flex items-center gap-4 bg-primary px-4 py-2 rounded-md text-white"
            >
              <AiOutlinePlus className="fill-white text-lg" />
              Creat post
            </button>
            <div className="flex flex-row gap-4 items-center">
              <button type="button" onClick={() => uploadRef.current.click()}>
                <AiFillCamera className="text-2xl fill-primary" />
              </button>
              <button type="button" onClick={() => uploadRef.current.click()}>
                <AiFillAudio className="text-2xl fill-primary" />
              </button>
              <button type="button" onClick={() => uploadRef.current.click()}>
                <AiFillVideoCamera className="text-2xl fill-primary" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
