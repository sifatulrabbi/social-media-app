import React, {useRef, useState} from 'react';
import {useAuthContext} from '../contexts/AuthContext';
import {AiOutlinePlus, AiFillCamera} from 'react-icons/ai';

const PostForm = () => {
  const [file, setFile] = useState();
  const {user} = useAuthContext();
  const uploadRef = useRef(null);

  return (
    <div className="rounded-lg border-2 p-4 mt-[100px] mx-auto max-w-3xl flex flex-row gap-4">
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
            <div>
              <button type="button" onClick={() => uploadRef.current.click()}>
                <AiFillCamera className="text-2xl fill-primary" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
