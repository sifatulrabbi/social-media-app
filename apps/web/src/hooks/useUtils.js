import {useAuthContext} from '../contexts/AuthContext';
import {useFeedContext} from '../contexts/FeedContext';

export function useUtils() {
  const {user} = useAuthContext();
  const {getFeeds} = useFeedContext();

  async function addLike(postId) {
    await fetch('http://localhost:8080/api/v1/likes/', {
      method: 'POST',
      body: JSON.stringify({
        profileId: user.profile.id,
        postId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // update the feeds
    await getFeeds();
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
    // update the feeds
    await getFeeds();
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
    // update the feeds
    await getFeeds();
  }

  return {addLike, addComment, addShare};
}
