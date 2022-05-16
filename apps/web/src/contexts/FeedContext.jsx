import React from 'react';
import axios from 'axios';

const FeedContext = React.createContext(null);

export const useFeedContext = () => React.useContext(FeedContext);

const FeedContextProvider = ({children}) => {
  const [feeds, setFeeds] = React.useState(null);

  async function getFeeds() {
    const resp = await axios.get('http://localhost:8080/api/v1/posts');

    if (resp.data.success) {
      setFeeds(resp.data.data);
    }
  }

  React.useEffect(() => {
    getFeeds();
  }, []);

  return (
    <FeedContext.Provider value={{feeds}}>{children}</FeedContext.Provider>
  );
};

export default FeedContextProvider;
