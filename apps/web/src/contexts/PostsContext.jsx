import React, {createContext, useContext, useState} from 'react';
import axios from 'axios';

const PostContext = createContext(null);

export function usePostContext() {
  return useContext(PostContext);
}

const PostContextProvider = ({children}) => {
  const [posts, setPosts] = useState(null);

  async function getFeed() {
    try {
      const response = await axios.get('https://localhost:8080/api/v1/posts/');

      if (response.data.data) {
        setPosts(response.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <PostContext.Provider value={{posts, getFeed}}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
