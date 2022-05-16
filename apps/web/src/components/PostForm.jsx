import React, {useRef, useState, useEffect} from 'react';
import {useAuthContext} from '../contexts/AuthContext';
import {
  AiOutlinePlus,
  AiFillCamera,
  AiFillAudio,
  AiFillVideoCamera,
} from 'react-icons/ai';
import {usePosts} from '../hooks/usePosts';

const PostForm = () => {
  const {user} = useAuthContext();
  const uploadImageRef = useRef(null);
  const uploadAudioRef = useRef(null);
  const uploadVideoRef = useRef(null);
  const {handlePostForm, setMedia} = usePosts();
  const [mediaUrl, setMediaUrl] = useState('');

  useEffect(() => {
    setMediaUrl(`http://localhost:8080/api/v1/media/${user.medium.id}`);
  }, [user]);

  return (
    <div className="rounded-lg border-[1px] p-4 mx-auto max-w-3xl flex flex-row gap-4">
      <img
        src={mediaUrl}
        alt=""
        className="h-[70px] w-[70px] rounded-full bg-gray-300"
      />
      <div className="flex flex-col w-full">
        <h6 className="text-textPrimary font-bold mb-6">{user.fullname}</h6>
        <form className="w-full" onSubmit={handlePostForm}>
          <textarea
            placeholder="Write text..."
            className="w-full resize-none border-[1px] rounded-lg outline-none p-3"
            required
          ></textarea>
          <input
            ref={uploadImageRef}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => setMedia(e.target.files[0])}
          />
          <input
            ref={uploadVideoRef}
            type="file"
            className="hidden"
            accept="video/*"
            onChange={(e) => setMedia(e.target.files[0])}
          />
          <input
            ref={uploadAudioRef}
            type="file"
            className="hidden"
            accept="audio/*"
            onChange={(e) => setMedia(e.target.files[0])}
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
              <button
                type="button"
                onClick={() => uploadImageRef.current.click()}
              >
                <AiFillCamera className="text-2xl fill-primary" />
              </button>
              <button
                type="button"
                onClick={() => uploadVideoRef.current.click()}
              >
                <AiFillVideoCamera className="text-2xl fill-primary" />
              </button>
              <button
                type="button"
                onClick={() => uploadAudioRef.current.click()}
              >
                <AiFillAudio className="text-2xl fill-primary" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
