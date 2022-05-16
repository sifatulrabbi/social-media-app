import React from 'react';
import {grayAvatar} from '../images';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {
  AiOutlineLike,
  AiOutlineMessage,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import {usePost} from '../hooks/usePost';
import {useUtils} from '../hooks';
import {v4} from 'uuid';

const Post = ({
  id,
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
  const {addComment, addLike, addShare} = useUtils();
  const [comment, setComment] = React.useState('');
  const avatarUrl =
    profileAvatar === 0
      ? grayAvatar
      : profileAvatar
      ? getMediaUrl(profileAvatar)
      : null;

  async function submitComment(e) {
    e.preventDefault();

    await addComment(id, comment);
    setComment('');
  }

  async function handleLike() {
    await addLike(id);
  }

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
      <div
        className="flex flex-row justify-end gap-6 items-center mt-6"
        onSubmit={submitComment}
      >
        <form
          action=""
          className="w-full flex flex-row items-center gap-2 bg-gray-100/80 px-3 py-2 rounded-md"
        >
          <input
            type="text"
            name="comment"
            placeholder="Write comment"
            required
            className="w-full outline-none bg-gray-100/80 text-sm"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit" className="text-2xl relative">
            <AiOutlineMessage className="relative fill-gray-400 hover:fill-primary" />
            {comments && (
              <span className="text-xs absolute font-bold -right-2 bottom-0 text-gray-400">
                {comments.length}
              </span>
            )}
          </button>
        </form>

        <button className="text-2xl relative" onClick={handleLike}>
          <AiOutlineLike className="relative fill-gray-400 hover:fill-primary" />
          {likes && (
            <span className="text-xs absolute font-bold -right-2 bottom-0 text-gray-400">
              {likes.length}
            </span>
          )}
        </button>

        <button className="text-2xl relative" onClick={() => addShare(id)}>
          <AiOutlineShareAlt className="relative fill-gray-400 hover:fill-primary" />
          {shares && (
            <span className="text-xs absolute font-bold -right-2 bottom-0 text-gray-400">
              {shares.length}
            </span>
          )}
        </button>
      </div>
      <div className="flex flex-col p-4 w-full">
        {comments &&
          comments.length > 0 &&
          comments.map((comment) => (
            <div key={v4()} className="text-sm w-full">
              {comment.body}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Post;
