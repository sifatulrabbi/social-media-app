import React from 'react';
import axios from 'axios';

const FeedContext = React.createContext({
  feeds: [],
  getFeeds: async function () {},
});

export const useFeedContext = () => React.useContext(FeedContext);

const FeedContextProvider = ({children}) => {
  const [feeds, setFeeds] = React.useState(null);

  async function getFeeds() {
    const resp = await axios.get(
      'https://cf30-103-129-236-251.in.ngrok.io/api/v1/posts',
    );

    if (resp.data.success) {
      setFeeds(resp.data.data);
    }
  }

  React.useEffect(() => {
    getFeeds();
  }, []);

  return (
    <FeedContext.Provider value={{feeds, getFeeds}}>
      {children}
    </FeedContext.Provider>
  );
};

export default FeedContextProvider;
