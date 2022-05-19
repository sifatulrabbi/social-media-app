import React from 'react';
import {useAuthContext} from '../../contexts/AuthContext';
import {Navigate} from 'react-router-dom';
import {v4} from 'uuid';

const ColleagueCard = ({connectedWith}) => {
  return (
    <div>
      <span>Connected with {connectedWith}</span>
    </div>
  );
};

const Colleagues = () => {
  const {user} = useAuthContext();

  return !user ? (
    <Navigate to="/login" />
  ) : (
    <div className="max-w-3xl bg-white shadow-md flex flex-col gap-4 mt-[100px] mx-auto p-4 rounded-lg">
      {user.profile.connections.map((item) => (
        <ColleagueCard key={v4()} {...item} />
      ))}
    </div>
  );
};

export default Colleagues;
