import axios from 'axios';
import {useAuthContext} from '../contexts/AuthContext';

export function useUtils() {
  const {user} = useAuthContext();

  async function addLike(postId) {
    const resp = await axios.post('http://loclhost:8080/api/v1/likes/', {
      profileId: user.id,
      postId,
    });

    return resp.data.data;
  }

  async function addComment(postId, body) {
    const resp = await axios.post('http://loclhost:8080/api/v1/comments/', {
      profileId: user.id,
      postId,
      body,
    });

    return resp.data.data;
  }

  return {addLike, addComment};
}
