import React from 'react';
import {grayAvatar} from '../images';
import {
  AiOutlineLike,
  AiOutlineMessage,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import {usePost} from '../hooks/usePost';
import {useUtils} from '../hooks';
import {v4} from 'uuid';
import PostRemove from './PostRemove';

const Post = ({
  id,
  postedBy,
  profileAvatar,
  type,
  specialization,
  createdAt,
  shares,
  likes,
  comments,
  medium,
  body,
  profileTab,
}) => {
  // Using the usePost hook to generate the media url
  // before showing the media to the screen we have to
  // determine the type of the media with verifyMimeType
  const {getMediaUrl, verifyMimeType} = usePost();
  // utility functions for sending requests to the back-end
  const {addComment, addLike, addShare} = useUtils();
  // for storing the values of the comment input element
  const [comment, setComment] = React.useState('');
  // determining avatar
  // for anonymous posts we will use gray avatar
  const avatarUrl =
    profileAvatar === 0
      ? grayAvatar
      : profileAvatar
      ? getMediaUrl(profileAvatar)
      : null;

  // submit handler for the comments
  async function submitComment(e) {
    e.preventDefault();

    // send comment add requests
    await addComment(id, comment);
    setComment('');
  }

  // handler for add like event
  // for some reason the default handler was behaving weirdly
  // so I have added a custom one
  async function handleLike() {
    await addLike(id);
  }

  return (
    <div className="flex flex-col rounded-lg border-[1px] p-4 relative">
      {profileTab && <PostRemove id={id} />}

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
        <div className="flex flex-col">
          <h6 className="font-display text-textPrimary font-bold">
            {postedBy}{' '}
            {type && <span className="text-sm font-normal">({type})</span>}
          </h6>
          {specialization && (
            <span className="text-sm font-normal">{specialization}</span>
          )}
          <span className="text-sm">
            {/* If the createdAt is not a date the will show the string.
              This prevents the app from crashing */}
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
            {
              // add video/image/audio component based on the mimeType of the media
              verifyMimeType(medium.mimeType) === 'video' ? (
                <video src={getMediaUrl(medium.id)} controls></video>
              ) : verifyMimeType(medium.mimeType) === 'image' ? (
                <img src={getMediaUrl(medium.id)} alt="" />
              ) : verifyMimeType(medium.mimeType) === 'audio' ? (
                <audio src={getMediaUrl(medium.id)} controls></audio>
              ) : (
                // default to '' means none
                ''
              )
            }
          </div>
        )}
      </div>

      {/* bottom */}
      <div
        className="flex flex-row justify-end gap-6 items-center mt-6"
        onSubmit={submitComment}
      >
        {/* comment form */}
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

        {/* add like button */}
        <button className="text-2xl relative" onClick={handleLike}>
          <AiOutlineLike className="relative fill-gray-400 hover:fill-primary" />
          {likes && (
            <span className="text-xs absolute font-bold -right-2 bottom-0 text-gray-400">
              {likes.length}
            </span>
          )}
        </button>

        {/* create share button */}
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
        {
          // just making sure comments are available otherwise the app will break finding comments
          comments &&
            comments.length > 0 &&
            comments.map((comment) => (
              <div key={v4()} className="text-sm w-full">
                {comment.body}
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default Post;
