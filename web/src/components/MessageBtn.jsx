import React from 'react';

const MessageBtn = () => {
  return (
    <button className="fixed bottom-6 right-6 z-50 hover:opacity-75 transition-[opacity]">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.2" cx="30" cy="30" r="30" fill="#44D752" />
        <path
          d="M15 25C15 19.4772 19.4772 15 25 15H35C40.5228 15 45 19.4772 45 25V29C45 34.5228 40.5228 39 35 39H15V25Z"
          fill="#44D752"
        />
        <circle cx="24" cy="27" r="2" fill="white" />
        <circle cx="30" cy="27" r="2" fill="white" />
        <circle cx="36" cy="27" r="2" fill="white" />
        <path
          d="M25 38H15V40.4676C15 42.0222 16.6959 42.9824 18.029 42.1826L25 38Z"
          fill="#44D752"
        />
      </svg>
    </button>
  );
};

export default MessageBtn;
