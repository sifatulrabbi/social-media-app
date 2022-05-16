import React, {useEffect} from 'react';
import {useAuthContext} from '../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    user && (
      <div className="max-w-3xl bg-white shadow-md flex flex-col gap-4">
        {user.profile.connections.map((item) => (
          <ColleagueCard key={v4()} {...item} />
        ))}
      </div>
    )
  );
};

export default Colleagues;
