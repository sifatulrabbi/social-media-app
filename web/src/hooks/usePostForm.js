import axios from 'axios';
import {useMediaApi} from './useMediaApi';
import {useState} from 'react';
import {useAuthContext} from '../contexts/AuthContext';
import {useFeedContext} from '../contexts/FeedContext';

export function usePostForm() {
  const [body, setBody] = useState('');
  const [media, setMedia] = useState('');
  const {addMediaToPost} = useMediaApi();
  const {user} = useAuthContext();
  const {getFeeds} = useFeedContext();

  async function createPost() {
    try {
      const resp = await axios.post(
        `https://cf30-103-129-236-251.in.ngrok.io/api/v1/profiles/${user.username}/post/`,
        {
          body,
          profileId: user.id,
        },
      );
      const post = resp.data.data;
      if (media) {
        await addMediaToPost(post.id, media);
      }
      await getFeeds();
    } catch (err) {
      console.error(err);
    }
  }

  async function handlePostForm(e) {
    e.preventDefault();
    await createPost();

    setBody('');
    setMedia(null);
  }

  return {handlePostForm, setMedia, media, setBody, body};
}
