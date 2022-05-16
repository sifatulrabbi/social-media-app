import React, {useEffect} from 'react';
import {useAuthContext} from '../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';

const ColleagueCard = ({connectedWith}) => {
  return (
    <div>
      <span>Connected with {connectedWith}</span>
    </div>
  );
};

const Colleagues = () => {
  const {user} = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user.connections);
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div className="max-w-3xl bg-white shadow-md flex flex-col gap-4">
      {user.connections.map((item) => (
        <ColleagueCard {...item} />
      ))}
    </div>
  );
};

export default Colleagues;
