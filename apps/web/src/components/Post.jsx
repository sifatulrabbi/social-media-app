import React from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {
  AiOutlineLike,
  AiOutlineMessage,
  AiOutlineShareAlt,
} from 'react-icons/ai';

const Post = ({name, createdAt, shares, likes, comments, medium, body}) => {
  return (
    <div className="flex flex-col rounded-lg border-[1px] p-4 shadow-md relative">
      <button className="absolute top-4 right-4">
        <BsThreeDotsVertical className="fill-gray-400 text-xl" />
      </button>

      {/* post top */}
      <div>
        <div className="bg-gray-300 rounded-full h-[60px] w-[60px] overflow-hidden">
          <img src="" alt="" className="w-full h-full object-cover" />
        </div>
        <div>
          <h6 className="font-display text-textPrimary">{name}</h6>
          <span className="text-sm">{createdAt.toISOString()}</span>
        </div>
      </div>

      {/* body */}
      <div className="flex flex-col gap-6">
        <p className="leading-[1.6]">{body}</p>
        <div className="w-full">{medium.mimeType === 'image/png'}</div>
      </div>

      {/* bottom */}
      <div className="flex flex-row justify-end gap-6">
        <button className="fill-gray-400 text-2xl">
          <AiOutlineLike />
          <span className="text-xs text-gray-400"></span>
        </button>
        <button className="fill-gray-400 text-2xl">
          <AiOutlineMessage />
          <span className="text-xs text-gray-400"></span>
        </button>
        <button className="fill-gray-400 text-2xl">
          <AiOutlineShareAlt />
          <span className="text-xs text-gray-400"></span>
        </button>
      </div>
    </div>
  );
};

export default Post;
