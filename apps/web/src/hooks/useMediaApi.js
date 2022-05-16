import axios from 'axios';

export function useMediaApi() {
  async function uploadMedia(file) {
    try {
      if (file.size > 100000000) {
        return null;
      }

      const formData = new FormData();
      formData.append('media', file);

      const resp = await axios.post(
        'http://localhost:8080/api/v1/media/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      if (resp.data) {
        console.log(resp.data);
      }

      return resp.data.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async function addMediaToPost(postId, file) {
    try {
      const data = await uploadMedia(file);
      if (!data) {
        return null;
      }

      const resp = await axios.post(
        `http://localhost:8080/api/v1/media/${data.id}/addPost/`,
        {postId},
      );

      if (resp.data.success) {
        return resp.data.data;
      }

      return null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async function addMediaToProfile(profileId, file) {
    try {
      const data = await uploadMedia(file);
      if (!data) {
        return null;
      }

      const resp = await axios.post(
        `http://localhost:8080/api/v1/media/${data.id}/addProfile/`,
        {profileId},
      );

      if (resp.data.success) {
        return resp.data.data;
      }

      return null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  return {uploadMedia, addMediaToPost, addMediaToProfile};
}
