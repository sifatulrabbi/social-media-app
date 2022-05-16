import React, {useEffect} from 'react';
import {useAuthContext} from '../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';

const Colleagues = () => {
  const {user} = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return <div>Colleagues</div>;
};

export default Colleagues;
