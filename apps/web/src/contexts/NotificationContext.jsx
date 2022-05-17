import React from 'react';

const NotificationContext = React.createContext({
  show: function (message) {},
});

export const useNotification = () => React.useContext(NotificationContext);

const NotificationProvider = ({children}) => {
  const [message, setMessage] = React.useState('');
  const [hide, setHide] = React.useState(true);

  function show(message) {
    console.log('Notification');
    setMessage(message);
    setHide(false);

    setTimeout(() => {
      setHide(true);
    }, 2000);
  }

  return (
    <NotificationContext.Provider value={{show}}>
      <div
        className={`z-[1000] bg-white fixed top-4 left-1/2 -translate-x-1/2 p-4 
        w-[340px] shadow-lg rounded-lg justify-start items-center text-center 
        ${hide ? 'hidden' : 'flex'}`}
      >
        {message}
      </div>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
