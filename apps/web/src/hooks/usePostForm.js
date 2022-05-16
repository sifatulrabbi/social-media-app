import axios from 'axios';
import {useMediaApi} from './useMediaApi';
import {useState} from 'react';
import {useAuthContext} from '../contexts/AuthContext';

export function usePostForm() {
  const [body, setBody] = useState('');
  const [media, setMedia] = useState('');
  const {uploadMedia} = useMediaApi();
  const {user} = useAuthContext();

  async function createPost() {
    try {
      const uploadedMedia = await uploadMedia(media);
      console.log(uploadedMedia);
      // const resp = await axios.post('http://localhost:8080/posts/', {});
    } catch (err) {
      console.error(err);
    }
  }

  async function updatePost() {
    try {
    } catch (err) {
      console.error(err);
    }
  }

  async function handlePostForm(e) {
    e.preventDefault();
    await createPost();
  }

  return {handlePostForm, setMedia, media};
}
