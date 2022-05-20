import {useAuthContext} from '../contexts/AuthContext';
import {useFeedContext} from '../contexts/FeedContext';
import {useNotification} from '../contexts/NotificationContext';

export function useUtils() {
  const {user} = useAuthContext();
  const {getFeeds} = useFeedContext();
  const {show} = useNotification();

  async function addLike(postId) {
    await fetch('https://prometheus-api-msql.herokuapp.com/api/v1/likes/', {
      method: 'POST',
      body: JSON.stringify({
        profileId: user.profile.id,
        postId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    show('Like added');
    // update the feeds
    await getFeeds();
  }

  async function addComment(postId, body) {
    await fetch('https://prometheus-api-msql.herokuapp.com/api/v1/comments/', {
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

    show('Comment added');
    // update the feeds
    await getFeeds();
  }

  async function addShare(postId) {
    await fetch('https://prometheus-api-msql.herokuapp.com/api/v1/shares/', {
      method: 'POST',
      body: JSON.stringify({
        profileId: user.profile.id,
        postId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    show('Post shared');
    // update the feeds
    await getFeeds();
  }

  return {addLike, addComment, addShare};
}
