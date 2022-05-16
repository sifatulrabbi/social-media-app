import {useAuthContext} from '../contexts/AuthContext';

export function useUtils() {
  const {user} = useAuthContext();

  async function addLike(postId) {
    await fetch('http://loclhost:8080/api/v1/likes/', {
      method: 'POST',
      body: JSON.stringify({
        profileId: user.profile.id,
        postId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async function addComment(postId, body) {
    await fetch('http://localhost:8080/api/v1/comments/', {
      method: 'POST',
      body: JSON.stringify({
        profileId: user.profile.id,
        postId,
        body,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async function addShare(postId) {
    await fetch('http://localhost:8080/api/v1/shares/', {
      method: 'POST',
      body: JSON.stringify({
        profileId: user.profile.id,
        postId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return {addLike, addComment, addShare};
}
