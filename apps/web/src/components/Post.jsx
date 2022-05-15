import React from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {
  AiOutlineLike,
  AiOutlineMessage,
  AiOutlineShareAlt,
} from 'react-icons/ai';

const Post = ({postedBy, createdAt, shares, likes, comments, medium, body}) => {
  return (
    <div className="flex flex-col rounded-lg border-[1px] p-4 relative">
      <button className="absolute top-4 right-4">
        <BsThreeDotsVertical className="text-xl fill-gray-400 hover:fill-primary" />
      </button>

      {/* post top */}
      <div className="flex flex-row gap-6 items-center mb-6">
        <div className="bg-gray-300 rounded-full h-[60px] w-[60px] overflow-hidden">
          <img src="" alt="" className="w-full h-full object-cover" />
        </div>
        <div>
          <h6 className="font-display text-textPrimary font-bold">
            {postedBy}
          </h6>
          <span className="text-sm">{createdAt.toUTCString()}</span>
        </div>
      </div>

      {/* body */}
      <div className="flex flex-col gap-6">
        <p className="leading-[1.6]">{body}</p>
        <div className="w-full">{medium.mimeType === 'image/png'}</div>
      </div>

      {/* bottom */}
      <div className="flex flex-row justify-end gap-6">
        <button className="text-2xl relative">
          <AiOutlineLike className="relative fill-gray-400 hover:fill-primary" />
          <span className="text-xs absolute font-bold -right-2 bottom-0 text-gray-400">
            {likes.length}
          </span>
        </button>
        <button className="text-2xl relative">
          <AiOutlineMessage className="relative fill-gray-400 hover:fill-primary" />
          <span className="text-xs absolute font-bold -right-2 bottom-0 text-gray-400">
            {comments.length}
          </span>
        </button>
        <button className="text-2xl relative">
          <AiOutlineShareAlt className="relative fill-gray-400 hover:fill-primary" />
          <span className="text-xs absolute font-bold -right-2 bottom-0 text-gray-400">
            {shares.length}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Post;
