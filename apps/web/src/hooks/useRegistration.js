import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useAuthContext} from '../contexts/AuthContext';
import {useMediaApi} from './useMediaApi';
import {useNotification} from '../contexts/NotificationContext';

export function useRegistration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const [fullname, setFullname] = useState('');
  const [education, setEducation] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [address, setAddress] = useState('');
  const [bio, setBio] = useState('');
  const [media, setMedia] = useState();
  const navigate = useNavigate();
  const {login} = useAuthContext();
  const {show} = useNotification();

  const {addMediaToProfile} = useMediaApi();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const resp = await axios.post(
        'http://localhost:8080/api/v1/auth/signup/',
        {
          username,
          email,
          password,
          type,
          fullname,
          education,
          specialization,
          address,
          bio,
        },
      );

      if (resp.data.success) {
        const profileId = resp.data.data.profile.id;
        await addMediaToProfile(profileId, media);
        await login(username, password);
        navigate('/profile');
        show('Login successful!');
      }

      return null;
    } catch (err) {
      console.error(err);
    }
  }

  return {
    username,
    email,
    password,
    type,
    fullname,
    education,
    specialization,
    address,
    media,
    bio,
    handleRegister,
    setUsername,
    setEmail,
    setPassword,
    setType,
    setFullname,
    setEducation,
    setSpecialization,
    setAddress,
    setBio,
    setMedia,
  };
}
