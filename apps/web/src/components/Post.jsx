import React from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {
  AiOutlineLike,
  AiOutlineMessage,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import {usePost} from '../hooks/usePost';

const Post = ({
  postedBy,
  profileAvatar,
  createdAt,
  shares,
  likes,
  comments,
  medium,
  body,
}) => {
  const {getMediaUrl, verifyMimeType} = usePost();
  const avatarUrl = profileAvatar ? getMediaUrl(profileAvatar) : null;

  return (
    <div className="flex flex-col rounded-lg border-[1px] p-4 relative">
      <button className="absolute top-4 right-4">
        <BsThreeDotsVertical className="text-xl fill-gray-400 hover:fill-primary" />
      </button>

      {/* post top */}
      <div className="flex flex-row gap-6 items-center mb-6">
        <div className="bg-gray-300 rounded-full h-[60px] w-[60px] overflow-hidden">
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div>
          <h6 className="font-display text-textPrimary font-bold">
            {postedBy}
          </h6>
          <span className="text-sm">
            {createdAt instanceof Date ? createdAt.toUTCString() : createdAt}
          </span>
        </div>
      </div>

      {/* body */}
      <div className="flex flex-col gap-6">
        <p className="leading-[1.6]">{body}</p>

        {/* media view */}
        {medium && medium.id && medium.mimeType && (
          <div className="mb-4">
            {verifyMimeType(medium.mimeType) === 'video' ? (
              <video src={getMediaUrl(medium.id)} controls></video>
            ) : verifyMimeType(medium.mimeType) === 'image' ? (
              <img src={getMediaUrl(medium.id)} alt="" />
            ) : verifyMimeType(medium.mimeType) === 'audio' ? (
              <audio src={getMediaUrl(medium.id)} controls></audio>
            ) : (
              ''
            )}
          </div>
        )}
      </div>

      {/* bottom */}
      <div className="flex flex-row justify-end gap-6">
        <button className="text-2xl relative">
          <AiOutlineLike className="relative fill-gray-400 hover:fill-primary" />
          {likes && (
            <span className="text-xs absolute font-bold -right-2 bottom-0 text-gray-400">
              {likes.length}
            </span>
          )}
        </button>

        <button className="text-2xl relative">
          <AiOutlineMessage className="relative fill-gray-400 hover:fill-primary" />
          {comments && (
            <span className="text-xs absolute font-bold -right-2 bottom-0 text-gray-400">
              {comments.length}
            </span>
          )}
        </button>

        <button className="text-2xl relative">
          <AiOutlineShareAlt className="relative fill-gray-400 hover:fill-primary" />
          {shares && (
            <span className="text-xs absolute font-bold -right-2 bottom-0 text-gray-400">
              {shares.length}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Post;
