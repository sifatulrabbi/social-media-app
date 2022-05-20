import axios from 'axios';
import React from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {useAuthContext} from '../contexts/AuthContext';
import {useFeedContext} from '../contexts/FeedContext';

const PostRemove = ({id}) => {
  const {getProfile} = useAuthContext();
  const [show, setShow] = React.useState(false);
  const {getFeeds} = useFeedContext();

  /**
   * Remove post function
   */
  async function removePost() {
    try {
      const resp = await axios.delete(
        `https://prometheus-api-msql.herokuapp.com/api/v1/posts/${id}`,
      );

      if (resp.data.success) {
        await getProfile();
        await getFeeds();
      }
    } catch (err) {
      console.error(err);
    }
  }

  function toggle() {
    setShow((prev) => !prev);
  }

  return (
    <>
      <button className="absolute top-4 right-4" onClick={toggle}>
        <BsThreeDotsVertical className="text-xl fill-gray-400 hover:fill-primary" />
      </button>
      <div
        className={`bg-white rounded-lg overflow-hidden ${
          show ? 'flex' : 'hidden'
        }
      absolute top-4 right-10`}
      >
        <button
          className="px-4 py-2 hover:bg-gray-100 transition-colors"
          onClick={removePost}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default PostRemove;
